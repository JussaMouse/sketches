let pal = [
  [34, 29, 25],
  [215, 84, 38],
  [187, 152, 124],
  [99, 181, 241],
  [53, 26, 125],
  [196, 229, 234],
]

function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
  // createLoop({ duration: 3, gif: true })
}

function draw() {
  background(pal[0])
  let unit
  width > height ? (unit = height / 20) : (unit = width / 20)
  translate(width * 0.1, height * 0.6)
  // make edge-of-a-triangle block
  function triEdge(u, sColor, fColor) {
    fill(fColor)
    noStroke()
    triangle(0, 0, u / tan(30), 0, u / tan(30), -u)
    rect(u / tan(30) - 1, -u, u * (10 - 2 / tan(30)) + 2, u)
    triangle(u * (10 - 1 / tan(30)), 0, 10 * u, 0, u * (10 - 1 / tan(30)), -u)
    stroke(sColor)
    line(0, 0, 10 * u, 0)
    line(10 * u, 0, u * (10 - 1 / tan(30)), -u)
    line(u * (10 - 1 / tan(30)), -u, u / tan(30), -u)
    line(u / tan(30), -u, 0, 0)
  }
  // make triangle
  function triBlocks(u, weight) {
    for (let i = 0; i < 3; i++) {
      triEdge(u, pal[i + 1], pal[4])
      translate(5 * u - weight, -10 * u * sin(60) - weight)
      rotate(120)
    }
  }

  strokeWeight(2)
  triBlocks(unit, 2)
}
