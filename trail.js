const pal = [
  [22, 34, 41],
  [20, 11, 32],
  [45, 34, 88],
  [90, 80, 148],
  [176, 173, 197],
  [27, 42, 76],
  [49, 84, 134],
  [93, 129, 172],
  [169, 192, 216],
]

let tick = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
  background(pal[0])
  frameRate(10)
}

function draw() {
  stroke(255)
  if (frameCount ** 2 / 40 < 360) {
    translate(width / 2, height / 2)
    rotate(frameCount ** 2 / 40)

    for (let i = 0; i < 8; i++) {
      fill(...pal[(i % 8) + 1], 255 - frameCount * 1.5)
      quad(0, 0, 100, 100, 500 - i * 50, 100, 400 - i * 50, 0)
      // point(0, 0)
    }
  }
  tick += 0.5
}
