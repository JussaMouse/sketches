function setup() {
  createCanvas(1200, 700)
}

function draw() {
  background(255, 250, 245)
  startX = 47 //width / 12
  centerY = (height * 4) / 10

  /* draw spreading sin lines */
  noFill()
  vertexCount = 12
  numLines = 5
  function sinSpread(vertexCount, x, y, yOffset) {
    for (i = 0; i < vertexCount; i++) {
      stroke(20)
      if (i === 0) {
        x[i] = 0
        stroke(255, 250, 245)
      } else x[i] = x[i - 1] + startX
      y[i] = sin(x[i] + PI) * 100 + centerY + (i * yOffset + 10) ** 1.89 / 500
      curveVertex(x[i], y[i])
    }
  }
  for (n = 1; n < numLines + 1; n++) {
    beginShape()
    x = []
    y = []
    sinSpread(vertexCount, x, y, n * 8)
    endShape()
  }

  /* rulers */
  // stroke(20)
  // line(0, 1, width, 1)
  // line(1, 0, 1, height)
  // tick = []
  // for (i = 0; i < width / 100; i++) {
  //   if (i === 0) tick[i] = 0
  //   else tick[i] = tick[i - 1] + 100
  //   line(tick[i], 0, tick[i], 10)
  //   line(0, tick[i], 10, tick[i])
  // }
}
