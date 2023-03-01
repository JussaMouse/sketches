const pal = [
  [7, 13, 33],
  [6, 43, 87],
  [43, 70, 63],
  [34, 79, 95],
  [38, 88, 132],
  [111, 155, 135],
  [204, 165, 76],
  [228, 215, 140],
  [178, 206, 178],
  [127, 179, 233],
  [233, 194, 199],
  [176, 234, 255],
]

let randPts = []
for (let i = 0; i < 1000; i++) {
  randPts[i] = Math.random() / 4
}
let rando = Math.random()

let tick = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
  noiseSeed(0)
}

function draw() {
  background(pal[0])
  //       x, y, angle, size, thicc, randIndex

  makeStar(width * 0.4, height * 0.5, 0, 500, 20, 2)

  function makeStar(x, y, angle, size, thicc, randIndex) {
    push()
    rotate(angle)

    // for the circle
    let numPts = 90
    let numActive = 5
    let c0 = circlePts(x, y, size, numPts)
    let arcLen = numPts / numActive
    let rIn = randIndex * numActive
    let activePts = []
    for (let i = 0; i < numActive; i++) {
      activePts[i] = c0[floor(arcLen * (randPts[i + rIn] + i))]
    }

    strokeWeight(thicc)
    stroke(pal[11])
    translate(activePts[0][0], activePts[0][1])
    for (let i = 0; i < numActive; i++) {
      let a = (2 * i) % numActive
      let b = (a + 2) % numActive
      let dx = activePts[b][0] - activePts[a][0]
      let dy = activePts[b][1] - activePts[a][1]
      let dxSign = 1
      if (dx < 0) dxSign = -1

      rotate(atan(dy / dx))
      let hyp = (dx ** 2 + dy ** 2) ** 0.5
      let sl_dx = 1
      // x0, dx, y0, amp, stretch, numPoints
      sineLine(0, sl_dx * dxSign, 0, 6, 0.333, hyp / sl_dx)
      translate(hyp * dxSign, 0)
      rotate(-atan(dy / dx))
    }
    pop()
  }

  tick += 3
}

function circlePts(x, y, size, numPts) {
  angleMode(DEGREES)
  let c = []
  for (let i = 0; i < numPts; i++) {
    let a = i * (360 / numPts)
    c[i] = [x + size * cos(a), y + size * sin(a)]
  }
  return c
}

function sineLine(x0, dx, y0, amp, stretch, numPoints) {
  angleMode(DEGREES)
  for (let i = 0; i < numPoints; i++) {
    line(x0, y0, x0 + dx, sin((x0 + dx) * stretch + tick) * amp)
    x0 = x0 + dx
    y0 = sin(x0 * stretch + tick) * amp
  }
}
