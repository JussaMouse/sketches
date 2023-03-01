let tick = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
  // createLoop({ duration: 8, gif: true })
}

function draw() {
  background(20)
  // dx, x0, numPoints, hei, area
  p = ellipsePoints(10, -width * 0.4, (width * 0.8) / 10, 0.9, 16000)
  translate(width * 0.8, height * 0.7)
  push()
  translate(p[0][0], p[0][1])
  for (let i = 0; i < p.length - 1; i++) {
    let x0 = 0
    let y0 = 0
    let x1 = p[i + 1][0] - p[i][0]
    let y1 = p[i + 1][1] - p[i][1]
    rotate(atan(y1 / x1))
    stroke(255)
    strokeWeight(2)
    line(0, 0, (x1 ** 2 + y1 ** 2) ** 0.5, 0)
    translate(x1, y1)
  }
  pop()
  console.log(p[27])
  tick += 0.01
  //console.log(p[0])
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
