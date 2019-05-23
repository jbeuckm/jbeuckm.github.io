import { Component } from "react"
import * as THREE from "three"
import blogClient from "../../clients/blog"
import { hexagonMeshForImage, translationForCoords } from "./utils"
import { flatten } from "ramda"

const PAGE_SIZE = 16
const CAMERA_SPEED_FRICTION = 0.08

const thumbnailForFileId = fileId =>
  `http://localhost:1337/image-formats/hexagon/${fileId}`

class Hexagons extends Component {
  constructor(props) {
    super(props)

    this.state = { posts: [] }

    const { innerWidth: width, innerHeight: height } = window

    let fov = 60
    let near = 1
    this.far = 10000

    // Set up camera and scene
    this.camera = new THREE.PerspectiveCamera(
      fov,
      width / height,
      near,
      this.far
    )
    this.cameraPosX = 0
    this.cameraPosY = 0
    this.cameraPosZ = 10
    this.cameraSpeedX = 0
    this.cameraSpeedY = 0
    this.cameraSpeedZ = 0

    this.raycaster = new THREE.Raycaster()

    // Add canvas
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize(width, height)
    document.body.appendChild(this.renderer.domElement)

    //    this.camera.position.set(0, 0, far)

    this.scene = new THREE.Scene()

    this.position = 0

    window.addEventListener("resize", this.onDocumentResize)
    document.addEventListener("mousedown", this.onDocumentMouseDown, false)
    document.addEventListener("keydown", this.onDocumentKeyDown)
  }

  onDocumentKeyDown = event => {
    console.log({ event })
    switch (event.code) {
      case "ArrowLeft":
        this.cameraSpeedX -= 0.1
        break
      case "ArrowRight":
        this.cameraSpeedX += 0.1
        break
      case "ArrowUp":
        this.cameraSpeedY += 0.1
        break
      case "ArrowDown":
        this.cameraSpeedY -= 0.1
        break
      case "KeyZ":
        this.cameraSpeedZ -= 0.1
        break
      case "KeyX":
        this.cameraSpeedZ += 0.1
        break
      default:
        break
    }
  }

  onDocumentResize = () => {
    const { innerWidth: width, innerHeight: height } = window

    this.renderer.setSize(width, height)
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
  }

  onDocumentMouseDown = event => {
    event.preventDefault()

    var mouse = new THREE.Vector2()
    mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1
    mouse.y = -(event.clientY / this.renderer.domElement.clientHeight) * 2 + 1

    this.raycaster.setFromCamera(mouse, this.camera)

    var intersects = this.raycaster.intersectObjects(this.group.children)

    if (intersects.length > 0) {
      const { postId } = intersects[0].object
      console.log({ postId })
    }
  }

  handlePosts = posts => {
    this.group = new THREE.Group()

    const thumbnails = flatten(
      posts.map(({ id: postId, files }) =>
        files.map(({ id: fileId }) => ({ postId, fileId })).shift()
      )
    )

    this.meshObjects = []

    thumbnails.slice(0, 100).forEach(({ postId, fileId }) => {
      const xIndex = this.position % PAGE_SIZE
      const yIndex = Math.floor(this.position / PAGE_SIZE)

      const mesh = hexagonMeshForImage(
        thumbnailForFileId(fileId),
        this.renderer
      )

      const translation = translationForCoords(xIndex, yIndex)
      mesh.translateX(translation.x)
      mesh.translateY(translation.y)

      mesh.postId = postId

      this.group.add(mesh)

      this.meshObjects.push(mesh)

      this.position++
    })

    this.camera.position.set(this.cameraPosX, this.cameraPosY, this.far)

    this.scene.add(this.group)
    this.renderer.render(this.scene, this.camera)
    this.animate()
  }

  animate = () => {
    requestAnimationFrame(this.animate)

    this.updateCameraPosition()

    this.renderer.render(this.scene, this.camera)
  }

  updateCameraPosition = () => {
    this.cameraSpeedX *= 1.0 - CAMERA_SPEED_FRICTION
    this.cameraSpeedY *= 1.0 - CAMERA_SPEED_FRICTION
    this.cameraSpeedZ *= 1.0 - CAMERA_SPEED_FRICTION

    this.cameraPosX += this.cameraSpeedX
    this.cameraPosY += this.cameraSpeedY
    this.cameraPosZ += this.cameraSpeedZ

    this.camera.position.set(this.cameraPosX, this.cameraPosY, this.cameraPosZ)
  }

  componentDidMount() {
    blogClient.Post.list()
      .then(response => {
        this.handlePosts(response.data())
      })
      .catch(console.log)
  }

  render() {
    return null
  }
}

export default Hexagons
