const pal = [
  [20, 11, 32],
  [45, 34, 88],
  [90, 80, 148],
  [176, 173, 197],
  [22, 34, 41],
  [27, 42, 76],
  [49, 84, 134],
  [93, 129, 172],
  [169, 192, 216],
]

function setup() {
  createCanvas(1000, 800)
  noiseSeed(0)
}

function draw() {
  background(pal[0])

  lineStack(frameCount - width * 10, 600, width * 11, 13, 9, 20, 60, 4, 1 / 14, 40)

  fill(pal[0])
  noStroke()
  rect(0, 0, width / 2, height)
  stroke(255)
  strokeWeight(1)
  rect(185, 100, 440, 600)
  strokeWeight(20)
  stroke(255, 40)
  line(0, height / 2, 184, height / 2)

  //       (x0, y0, dx, dy, numLines, thickness, spread, amp, freq, alpha)
  push()
  rotate(PI / 2)
  scale(0.5, 0.5)

  pop()
  noStroke()
  lineStack(200, 600, 400, 13, 9, 20, 60, 4, 1 / 14, 255)

  noStroke()
  fill(pal[0])
  rect(195, 150, 70, 500)
  rect(545, 140, 70, 500)
  noFill()
}

function coolLine(x0, y0, width, height, amp, freq) {
  m = -height / width
  push()
  translate(x0, y0)
  beginShape()
  for (let x = 0; x < width; x += 1) {
    let y = m * x + amp * sin(x * freq)
    curveVertex(x, y)
  }
  endShape()
  pop()
}

function lineStack(x0, y0, dx, dy, numLines, thickness, spread, amp, freq, alpha) {
  strokeCap(SQUARE)
  strokeWeight(thickness)
  noFill()
  push()
  translate(x0, y0)
  for (let i = 0; i < numLines; i++) {
    stroke(...pal[(i % 8) + 1], alpha)
    coolLine(0, 0, dx, dy, amp, freq)
    //rotate(0.04)
    translate(0, -spread + noise(i) * (spread / 2))
  }
  pop()
}

// function coolBox() {
//   fill(pal[4])
//   noStroke()
//   beginShape()
//   vertex(298.5, 100)
//   vertex(700, 80)
//   vertex(700, 80 + 600 * 0.618)
//   vertex(300, 100 + 600 * 0.618)
//   vertex(300, 100)
//   endShape()
// }

// function coolBox2() {
//   noFill()
//   stroke(pal[7])
//   strokeWeight(2)
//   beginShape()
//   vertex(291, 92)
//   vertex(708, 72)
//   vertex(708, 88 + 600)
//   vertex(292, 108 + 600)
//   vertex(292, 92)
//   endShape()
// }
