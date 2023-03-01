let tick = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
  background(20)
  noiseSeed(0)
}

function draw() {
  translate(width / 2, height / 2)
  for (let i = 0; i < 360; i++) {
    let x = 200 * cos(i) + tick * cos(i)
    let y = 200 * sin(i) + tick * sin(i)
    // x0, y0, length, angle, color
    mark(x, y, 5, i, [255, 5])
  }
  tick += 0.1
}

function mark(x0, y0, length, angle, color) {
  push()
  translate(x0, y0)
  let x1 = length * cos(angle)
  let y1 = -1 * length * sin(angle)
  stroke(color)
  line(0, 0, x1, y1)
  pop()
}
