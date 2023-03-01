function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
}

function draw() {
  background(20)
  translate(width / 2, height / 2)

  for (let i = 0; i < 360; i++) {
    let x = 100 * cos(i)
    let y = 100 * sin(i)
    mark(x, y, 10, frameCount + i * 10, 255)
  }
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
