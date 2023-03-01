let tick = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
  background(16, 16, 32)
}

function draw() {
  translate(0, height / 2)

  for (let i = 0; i < 360; i++) {
    let x = tick * 4
    let y = tick * 4 * sin(i)
    // x0, y0, length, angle, color
    scratch(x, y, 5, (i * tick) / 10, [255, 5])
  }

  tick += 0.1
}

function scratch(x0, y0, length, angle, color) {
  push()
  translate(x0, y0)
  let x1 = length * cos(angle)
  let y1 = -1 * length * sin(angle)
  stroke(color)
  line(0, 0, x1, y1)
  pop()
}
