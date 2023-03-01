const palXmas = [[25, 27, 13], [166, 0, 4], [127, 184, 79], [255]]

function setup() {
  createCanvas(windowWidth, windowHeight)
  noiseSeed(666)
}

function draw() {
  background(255, 250, 245)

  for (let i = 0; i < 200; i++) {
    // x, y, length, width, color, noize
    coolLine(0, i * 8, width, 30, palXmas[floor(noise(i) * 4) % 4], i)
  }

  // create a mask
  noFill()
  strokeWeight(20)
  stroke(255, 245, 240)
  translate(width / 2, height / 2)
  for (let i = 0; i < 100; i++) {
    ellipse(0, 0, 500 + i * 20)
  }

  // ornament top bit
  noStroke()
  fill(180)
  rect(-29, -279, 58, 40)
  noFill()
  stroke(20)
  strokeWeight(1)
  beginShape()
  vertex(-30, -238)
  vertex(-30, -280)
  vertex(30, -280)
  vertex(30, -238)
  endShape()
  line(0, -280, 0, -350)
  bezier(0, -350, 0, -400, 60, -400, 60, -350)
  // draw a circle
  ellipse(0, 0, 480)
}

function coolLine(x, y, length, width, color, noize) {
  push()
  translate(x, y)
  let p = []
  for (let i = 0; i < 50; i++) {
    p[i] = [((i + 1) * length) / 51, noise(i + noize / 20) * width - width / 2]
  }

  strokeWeight(5)
  stroke(color)
  noFill()
  beginShape()
  curveVertex(p[0][0], p[0][1])
  for (let i = 0; i < 50; i++) {
    curveVertex(p[i][0], p[i][1])
  }
  curveVertex(p[49][0], p[49][1])
  endShape()
  pop()
}
