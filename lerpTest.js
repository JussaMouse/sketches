function setup() {
  createCanvas(windowWidth, windowHeight)
}

let points = []
let x = 0
let y = 100
let i = 0

function draw() {
  background(20)
  translate(width / 2, height / 2)

  if (frameCount == 1) {
    for (let angle = 0; angle < TWO_PI; angle += HALF_PI) {
      let p = {
        x: 100 * sin(angle),
        y: 100 * cos(angle),
      }
      points.push(p)
    }
  }

  fill(255, 0, 0)
  for (let p of points) {
    ellipse(p.x, p.y, 10)
  }

  fill(255, 50)
  let len = points.length
  x = lerp(x, points[i % len].x, 0.01)
  y = lerp(y, points[i % len].y, 0.01)
  if (abs(points[i % len].x - x) < 10 && abs(points[i % len].y - y) < 10) i++

  ellipse(x, y, 50)
}
