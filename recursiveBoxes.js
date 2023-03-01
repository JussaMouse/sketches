function setup() {
  createCanvas(800, 600)
  angleMode(DEGREES)
  rectX = width * 0.333
  rectY = height * 0.25
  // set to square:
  rectWidth = width * 0.4
  rectHeight = width * 0.4
}

function draw() {
  background(255, 250, 245)
  stroke(20)
  noFill()
  translate(rectX, rectY)
  innerWidth = rectWidth
  innerHeight = rectHeight
  innerX = 0
  innerY = 0
  while (innerWidth > 0 && innerHeight > 0) {
    rotate(1)
    translate(innerX, 0)
    rect(innerX, innerY, innerWidth, innerHeight)
    innerWidth -= 20
    innerHeight -= 20
    innerX += 3
    innerY += 3
  }
}
