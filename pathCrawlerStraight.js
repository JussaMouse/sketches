let p = [
  [0, 0],
  [100, 100],
  [200, 100],
  [300, 0],
]
function setup() {
  createCanvas(windowWidth, windowHeight)
  background(20)
  angleMode(DEGREES)
}

function draw() {
  translate(width / 2, height / 2)
  translate(p[0][0], p[0][1])
  for (let i = 0; i < p.length - 1; i++) {
    stroke(255)
    strokeWeight(2)
    let dx = p[i + 1][0] - p[i][0]
    let dy = p[i + 1][1] - p[i][1]

    rotate(-atan(dy / dx))
    console.log(atan(dy / dx))
    line(0, 0, (dx ** 2 + dy ** 2) ** 0.5, 0)
    translate((dx ** 2 + dy ** 2) ** 0.5, 0)
    rotate(atan(dy / dx))
  }
}
