import * as THREE from 'three'

const getHexagonVertices = (scale = 0.95) => {
  const points = []
  for (let angle = 0; angle < 2 * Math.PI; angle += Math.PI / 3) {
    const vertex = new THREE.Vector3(scale * Math.cos(angle), scale * Math.sin(angle), 0)
    points.push(vertex)
  }
  return points
}

export const distance = (vertex1, vertex2) => {
  const xDist = vertex1.x - vertex2.x
  const yDist = vertex1.y - vertex2.y
  return Math.sqrt(xDist * xDist + yDist * yDist)
}

export const getHexagonGeometry = () => {
  const vertices = getHexagonVertices()

  const geom = new THREE.Geometry()

  const center = new THREE.Vector3(0, 0, 0)
  geom.vertices.push(center)

  const uvs = [new THREE.Vector2(0.5, 0.5)]

  vertices.forEach(vertex => {
    geom.vertices.push(vertex)
    uvs.push(new THREE.Vector2(0.5 + 0.5 * vertex.x, 0.5 + 0.5 * vertex.y))
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

export const HALF_HEIGHT = Math.sin(Math.PI / 3)

export const translationForCoords = (xIndex, yIndex) => {
  return {
    x: xIndex * 1.5,
    y: yIndex * 2 * HALF_HEIGHT + (xIndex & 1) * HALF_HEIGHT,
  }
}
