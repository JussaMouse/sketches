let tick = 0.01

function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
  background(20)
  noiseSeed(0)
}

function draw() {
  translate(-width * 3.5, 0)
  if (tick < 200) {
    for (let i = 0; i < 360; i++) {
      let x = width * 4 * cos(i)
      let y = width * 4 * sin(i)
      // x0, y0, length, angle, color
      mark(x, y, tick, i * tick, [255, 50])
    }
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
