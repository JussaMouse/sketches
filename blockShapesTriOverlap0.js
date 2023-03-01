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
    triX = u / tan(60)
    hyp = u / cos(60)
    triangle(0, 0, triX, 0, triX, -u)
    rectX = 7 * u - hyp - 2 * triX
    rect(triX, -u, rectX, u)
    triangle(rectX + triX, 0, rectX + 2 * triX, 0, rectX + triX, -u)
    stroke(sColor)
    line(0, 0, rectX + 2 * triX, 0)
    line(rectX + 2 * triX, 0, rectX + triX, -u)
    line(rectX + triX, -u, triX, -u)
    line(triX, -u, 0, 0)
  }
  // make triangle
  function triBlocks(u, weight) {
    for (let i = 0; i < 3; i++) {
      triEdge(u, pal[i + 1], pal[4])
      translate(3.5 * u - weight, -7 * u * sin(60) - weight)
      rotate(120)
    }
  }

  strokeWeight(2)
  triBlocks(unit, 2)
  triBlocks(unit / 2, 2)
}
