function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
}

function draw() {
  background(20)
  let unit = 0
  let ang = 120
  translate(width / 2, height / 2)
  stroke(255)
  strokeWeight(1)
  push()
  for (let i = 0; i < 113; i++) {
    line(0, 0, unit, 0)
    translate(unit, 0)
    rotate(ang)
    unit += 4
    ang += 0.005
  }
  pop()
}
