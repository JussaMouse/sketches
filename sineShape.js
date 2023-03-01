let length = 1000
let dx = 20
let numPoints = Math.floor(length / dx) + 1
let x0 = 0
let y0 = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(20)
}

function draw() {
  translate(0, height / 2)
  angleMode(DEGREES)
  noFill()
  stroke(255)
  strokeWeight(1)
  for (let i = 0; i < numPoints; i++) {
    line(x0, y0, x0 + dx, sin(x0 + dx) * 50)
    x0 = x0 + dx
    y0 = sin(x0) * 50
  }
}
