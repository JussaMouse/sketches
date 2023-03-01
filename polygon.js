function setup() {
  createCanvas(1200, 700)
  /* draw non-rotating shapes */
  background(255, 250, 245)
  noFill()
  stroke(20)
  translate(width * 0.5, height * 0.5)
  rotate(PI * 0.333)
  polygon(0, 0, 200, 5) // Hexagon (pX,pY,size,sides)
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
