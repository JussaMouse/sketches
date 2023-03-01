let tick = 0
let chunks = 1
let p = []
p[0] = [0, 0]

function setup() {
  createCanvas(windowWidth, windowHeight)
  noiseSeed(12)
  angleMode(DEGREES)
}

function draw() {
  let delta = floor(width / 30)

  let y = 0
  if (frameCount % 50 == 0) chunks++

  for (let i = 0; i < chunks; i++) {
    p[i] = [delta * (i + noise(i)), y + 3 * delta * (noise(i) * 2 - 1)]
    y += 3 * delta * (noise(i) * 2 - 1)
  }
  background(20)
  translate(0, height / 2)
  translate(p[0][0], p[0][1])
  for (let i = 0; i < p.length - 1; i++) {
    stroke(255)
    strokeWeight(1)
    let dx = p[i + 1][0] - p[i][0]
    let dy = p[i + 1][1] - p[i][1]

    rotate(-atan(dy / dx))
    let hyp = (dx ** 2 + dy ** 2) ** 0.5
    // x0, dx, y0, amp, numPoints
    let sl_dx = 5
    sineLine(0, sl_dx, 0, 3, floor(hyp) / sl_dx)
    translate(hyp, 0)
    rotate(atan(dy / dx))
  }

  tick += 1

  function sineLine(x0, dx, y0, amp, numPoints) {
    angleMode(DEGREES)
    noFill()
    stroke(255)
    strokeWeight(1)
    for (let i = 0; i < numPoints; i++) {
      line(x0, y0, x0 + dx, sin((x0 + dx) * 10) * amp)
      x0 = x0 + dx
      y0 = sin(x0 * 10) * amp
    }
  }
}
