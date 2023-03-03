let layer1

function setup() {
  createCanvas(400, 400)
  layer1 = createGraphics(400, 400)
  layer1.colorMode(HSB)

  background(225)
  layer1.fill(255, 50, 50)
  layer1.rect(100, 100, 200)

  image(layer1, 0, 0)
}
