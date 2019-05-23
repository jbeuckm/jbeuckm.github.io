import * as THREE from 'three'

export const getUnitHexagon2d = () => {
  const points = []
  for (let angle = 0; angle < 2 * Math.PI; angle += Math.PI / 3) {
    const vertex = new THREE.Vector2(Math.cos(angle), Math.sin(angle))
    points.push(vertex)
  }
  return points
}

const unitHexagon = getUnitHexagon2d()

export const projectOntoTorus = (theta, phi) => {
  const major = R + r * Math.cos(phi)
  return new THREE.Vector3(major * Math.cos(theta), r * Math.sin(phi), major * Math.sin(theta))
}

export const getHexagonGeometry = (positionTheta, positionPhi, sizeTheta, sizePhi) => {
  const geom = new THREE.Geometry()

  geom.vertices.push(projectOntoTorus(positionTheta, positionPhi))

  const uvs = [new THREE.Vector2(0.5, 0.5)]

  unitHexagon.forEach(vertex => {
    geom.vertices.push(
      projectOntoTorus(positionTheta + sizeTheta * vertex.x, positionPhi + sizePhi * vertex.y)
    )
    uvs.push(new THREE.Vector2(0.5 + 0.5 * vertex.x, 0.5 - 0.5 * vertex.y))
  })

  for (let i = 1; i <= 6; i++) {
    const face = new THREE.Face3(0, i, i + 1)
    geom.faces.push(face)
    geom.faceVertexUvs[0].push([uvs[0], uvs[i], uvs[i + 1]])
  }

  return geom
}

const hexagonGeometry = getHexagonGeometry()

export const hexagonMeshForImage = (imageUrl, renderer) => {
  var texture = new THREE.TextureLoader().load(imageUrl)
  texture.anisotropy = renderer.getMaxAnisotropy()

  var material = new THREE.MeshBasicMaterial({
    map: texture,
  })

  return new THREE.Mesh(hexagonGeometry, material)
}

export const meshForGeometryAndImage = (geometry, imageUrl, renderer) => {
  var texture = new THREE.TextureLoader().load(imageUrl)
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy()

  var material = new THREE.MeshBasicMaterial({
    map: texture,
  })

  return new THREE.Mesh(geometry, material)
}

export const HALF_HEIGHT = Math.sin(Math.PI / 3)

let R = 10
let r = 3

export const setTorusDimensions = (_R, _r) => {
  R = _R
  r = _r
}

export const projectVectorOntoTorus = vec => {
  const major = R + r * Math.cos(vec.y)
  return new THREE.Vector3(major * Math.cos(vec.x), r * Math.sin(vec.y), major * Math.sin(vec.x))
}
