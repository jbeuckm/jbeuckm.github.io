import BaseScene from "./BaseScene"
import * as THREE from "three"
import {
  setTorusDimensions,
  projectOntoTorus,
  getHexagonGeometry,
  meshForGeometryAndImage,
} from "./utils"
import blogClient from "../../clients/blog"
import { flatten } from "ramda"

const R = 20
const r = 4
const CAMERA_SPEED_FRICTION = 0.08
const PHI_THROTTLE_DELTA = 0.01
const THETA_THROTTLE_DELTA = 0.005

const thetaSplit = 210 // divisible by three seems nice
const phiSplit = 60 // even

const thetaInterval = (2 * Math.PI) / thetaSplit
const phiInterval = (2 * Math.PI) / phiSplit

setTorusDimensions(R, r)

class Torus extends BaseScene {
  constructor() {
    super()

    this.thetaGroup = new THREE.Group()
    this.phiGroup = new THREE.Group()

    this.cameraPosX = 0
    this.cameraPosY = 0
    this.cameraPosZ = 0

    this.positionTheta = Math.PI
    this.positionPhi = Math.PI

    this.speedTheta = 0
    this.speedPhi = 0

    this.baseSpeedPhi = 0.001
    this.baseSpeedTheta = 0.0003

    this.keyHandler = {
      ArrowRight: () => {
        this.baseSpeedTheta = -0.0003
        this.speedTheta -= THETA_THROTTLE_DELTA
      },
      ArrowLeft: () => {
        this.baseSpeedTheta = 0.0003
        this.speedTheta += THETA_THROTTLE_DELTA
      },

      ArrowUp: () => {
        this.baseSpeedPhi = -0.001
        this.speedPhi -= PHI_THROTTLE_DELTA
      },
      ArrowDown: () => {
        this.baseSpeedPhi = 0.001
        this.speedPhi += PHI_THROTTLE_DELTA
      },
    }
  }

  handlePosts = items => {
    const thumbnails = flatten(
      items.map(({ link, images }) =>
        images.map(image => ({
          link,
          image: image,
        }))
      )
    )

    const thetaSize = this.getThetaSize()
    const phiSize = this.getPhiSize()

    thumbnails
      .concat(thumbnails)
      .concat(thumbnails)
      .concat(thumbnails)
      .concat(thumbnails)
      .concat(thumbnails)
      .concat(thumbnails)
      .concat(thumbnails)
      .concat(thumbnails)
      .forEach((thumbnail, index) => {
        if (!thumbnail) return
        const url = thumbnail.image
        const coords = this.hexagonCoords[index]

        const mesh = meshForGeometryAndImage(
          getHexagonGeometry(coords.theta, coords.phi, thetaSize, phiSize),
          url,
          this.renderer
        )
        this.thetaGroup.add(mesh)
      })
  }

  getThetaSize = () => {
    return 0.97 * thetaInterval
  }
  getPhiSize = () => {
    return (0.97 * phiInterval) / Math.sin(Math.PI / 3)
  }

  setupTorus = () => {
    const vertices = []

    for (let i = 0; i < 2 * Math.PI; i += thetaInterval) {
      for (let j = 0; j < 2 * Math.PI; j += phiInterval) {
        vertices.push(projectOntoTorus(i, j))
      }
    }

    const geom = new THREE.Geometry()

    vertices.forEach(vertex => {
      geom.vertices.push(vertex)
    })

    const l = geom.vertices.length

    for (let i = 0; i < l; i++) {
      const face = new THREE.Face3(i, (i + phiSplit) % l, (i + 1) % l)
      geom.faces.push(face)
    }

    var line = new THREE.LineSegments(new THREE.WireframeGeometry(geom))
    line.material.depthTest = true
    line.material.opacity = 1
    line.material.transparent = true

    const thetaSize = this.getThetaSize()
    const phiSize = this.getPhiSize()

    let layer = 0

    this.hexagonCoords = []

    for (let phi = 0; phi < 2 * Math.PI; phi += phiInterval) {
      const thetaOffset = layer++ % 2 === 1 ? 1.5 * thetaInterval : 0

      for (let theta = 0; theta < 2 * Math.PI; theta += 3 * thetaInterval) {
        this.hexagonCoords.push({ theta: thetaOffset + theta, phi })
        const hexagon = getHexagonGeometry(
          thetaOffset + theta,
          phi,
          thetaSize,
          phiSize
        )
        var hexagonLine = new THREE.LineSegments(
          new THREE.WireframeGeometry(hexagon)
        )
        hexagonLine.material.depthTest = true
        hexagonLine.material.opacity = 1
        hexagonLine.material.transparent = true

        //        this.thetaGroup.add(hexagonLine)
      }
    }

    blogClient.Post.list().then(response => {
      const items = response.data().items
      console.log({ items })
      this.handlePosts(items)
    })

    this.thetaGroup.position.z = -0.95 * R

    this.phiGroup.add(this.thetaGroup)

    this.scene.add(this.phiGroup)

    this.animate()
  }

  updateCameraPosition = () => {
    this.speedTheta *= 1.0 - CAMERA_SPEED_FRICTION
    this.speedPhi *= 1.0 - CAMERA_SPEED_FRICTION

    this.positionPhi += this.baseSpeedPhi + this.speedPhi
    this.positionTheta += this.baseSpeedTheta + this.speedTheta

    this.thetaGroup.rotation.y = this.positionTheta
    this.phiGroup.rotation.x = this.positionPhi
  }

  componentDidMount() {
    super.componentDidMount()

    this.camera.position.set(this.cameraPosX, this.cameraPosY, this.cameraPosZ)

    this.setupTorus()
  }
}

export default Torus
