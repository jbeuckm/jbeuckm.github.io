export default (imageUrl, targetSize = 256) => {
  return new Promise((resolve, reject) => {
    var img = new Image()

    img.onerror = reject

    img.onload = function() {
      const size = Math.min(img.width, img.height)
      const scale = targetSize / size

      const canvas = document.createElement('canvas')
      canvas.width = targetSize
      canvas.height = targetSize

      const ctx = canvas.getContext('2d')
      const originX = targetSize / 2 - (scale * img.width) / 2
      const originY = targetSize / 2 - (scale * img.height) / 2
      ctx.drawImage(img, originX, originY, scale * img.width, scale * img.height)

      resolve(canvas.toDataURL())
    }

    img.src = imageUrl
  })
}
