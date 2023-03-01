let tick = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(20)
  angleMode(DEGREES)
  colorMode(HSB)
}

function draw() {
  translate(width / 2, height * 0.55)
  let r = height / 3
  if (tick < 200) {
    for (let i = 0; i < 360; i++) {
      let x = r * cos(i)
      let y = r * sin(i)
      mark(x, y, i * 0.67, (i * tick) / 20, [(tick * 10) % 360, 30, 100, 0.01])
    }
  }

  tick += 0.1

  function mark(x0, y0, length, angle, color) {
    push()
    translate(x0, y0)
    let x1 = length * cos(angle)
    let y1 = -1 * length * sin(angle)
    stroke(color)
    line(0, 0, x1, y1)
    pop()
  }
}
