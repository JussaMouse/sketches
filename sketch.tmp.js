function setup() {
  createCanvas(800, 500)
  /* draw non-rotating shapes */
  background(255, 250, 245)
  noFill()
  stroke(20)
  strokeWeight(30)
  translate(width * 0.6, height * 0.4)
  rotate(PI * 0.333)
  polygon(0, 0, 200, 5) // Hexagon (pX,pY,size,sides)
}

function draw() {
  /* draw spreading sin lines */
  strokeWeight(2)
  vertexCount = 6
  numLines = 5
  startX = 120 //47
  translate((width * 26.7) / 100, 0)
  for (n = 1; n < numLines + 1; n++) {
    sinSpread(vertexCount, n * 8)
  }
}

function sinSpread(vertexCount, yOffset) {
  noFill()
  beginShape()
  x = []
  y = []
  for (i = 0; i < vertexCount; i++) {
    stroke(20)
    if (i === 0) {
      x[i] = 0
      stroke(255, 250, 245)
    } else x[i] = x[i - 1] + startX
    y[i] = sin(x[i] + PI) * 100 + height / 3 + (i * yOffset + 10) ** 2 / 100
    curveVertex(x[i], y[i])
    endShape()
  }
}

function polygon(x, y, radius, npoints) {
  this.angle = TWO_PI / npoints // FORMULA PI*2 / nr os sides
  beginShape()
  for (a = 0; a < TWO_PI; a += angle) {
    sx = x + cos(a) * radius
    sy = y + sin(a) * radius
    vertex(sx, sy)
  }
  endShape(CLOSE)
}
