function draw() {
  /* draw spreading sin lines */
  vertexCount = 6
  numLines = 5
  startX = 50 //47
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
    y[i] = sin(x[i] + PI) * 100 + height / 3 + (i * yOffset + 10) ** 2 / 500
    curveVertex(x[i], y[i])
    endShape()
  }
}
