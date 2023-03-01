let tick = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  createLoop({ duration: 8, gif: true })
}

function draw() {
  translate(width / 2, height / 2)
  background(20)
  // dx, x0, numPoints, hei, area
  p = ellipsePoints(sin(tick) * 15 + 16, -width * 0.4, (width * 0.8) / 10, 0.9, 80000)

  for (let i = 0; i < 5; i++) {
    stroke(255, (i + 1) * 10)
    strokeWeight(200 - 48 * i)
    for (let n = 0; n < p.length; n++) {
      point(p[n][0], p[n][1])
      point(p[n][0], -p[n][1])
    }
  }
  tick += 0.01
  console.log(p)
}
// hei default: 0.5 // area deafult: 40000
function ellipsePoints(dx, x0, numPoints, hei, area) {
  let points = []
  let x = x0
  let y = -hei * (area - x ** 2) ** 0.5
  // n = a counter for points with non-NaN y
  let n = 0
  for (let i = 0; i < numPoints; i++) {
    if (!isNaN(y)) {
      points[n] = [x, y]
      n++
    }
    // console.log(x, y)
    x += dx
    y = -hei * (area - x ** 2) ** 0.5
    if (n) {
      point(points[n - 1][0], points[n - 1][1])
    }
  }
  return points
}
