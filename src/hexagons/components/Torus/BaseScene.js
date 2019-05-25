import { Component } from "react"
import * as THREE from "three"
import Hammer from "hammerjs"

const CAMERA_SPEED_FRICTION = 0.08

class BaseScene extends Component {
  constructor(props) {
    super(props)

    this.cameraPosX = 0
    this.cameraPosY = 0
    this.cameraPosZ = 10
    this.cameraSpeedX = 0
    this.cameraSpeedY = 0
    this.cameraSpeedZ = 0

    this.raycaster = new THREE.Raycaster()

    this.position = 0

    this.meshObjects = []
    this.keyHandler = {}
    this.swipeHandler = () => {}
  }

  componentDidMount() {
    const { innerWidth: width, innerHeight: height } = window

    // Add canvas
    this.renderer = new THREE.WebGLRenderer()
    document.body.appendChild(this.renderer.domElement)

    this.scene = new THREE.Scene()

    this.renderer.setSize(width, height)

    let fov = 60
    let near = 1
    this.far = 10

    // Set up camera and scene
    this.camera = new THREE.PerspectiveCamera(
      fov,
      width / height,
      near,
      this.far
    )

    window.addEventListener("resize", this.onDocumentResize)
    document.addEventListener("mousedown", this.onDocumentMouseDown, false)
    document.addEventListener("keydown", this.onDocumentKeyDown)

    var manager = new Hammer.Manager(this.renderer.domElement)
    var Swipe = new Hammer.Swipe()
    manager.add(Swipe)

    manager.on("swipe", this.swipeHandler)
  }

  onDocumentKeyDown = event => {
    const handler = this.keyHandler[event.code]
    handler && handler(event)
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

    // var intersects = this.raycaster.intersectObjects(this.group.children)

    // if (intersects.length > 0) {
    //   const { postId } = intersects[0].object
    //   console.log({ postId })
    // }
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

  render() {
    return null
  }
}

export default BaseScene
