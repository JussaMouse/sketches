function setup() {
  createCanvas(windowWidth, windowHeight)
  noiseSeed(2)
}

function draw() {
  let p = []
  for (let i = 0; i < 50; i++) {
    p[i] = [((i + 1) * width) / 52, noise(i) * height - height / 2]
  }

  background(20)
  stroke(255)
  strokeWeight(24)
  translate(0, height / 2)
  // for (let i = 0; i < 50; i++) {
  //   point(p[i][0], p[i][1])
  // }

  noFill()
  strokeWeight(1)
  beginShape()
  vertex(p[0][0], p[0][1])
  for (let i = 1; i < 48; i += 3) {
    bezierVertex(p[i][0], p[i][1], p[i + 1][0], p[i + 1][1], p[i + 2][0], p[i + 2][1])
  }
  endShape()

  stroke(255, 0, 0)
  beginShape()
  curveVertex(p[0][0], p[0][1])
  for (let i = 0; i < 50; i++) {
    curveVertex(p[i][0], p[i][1])
  }
  curveVertex(p[49][0], p[49][1])
  endShape()
}
