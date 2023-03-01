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
  width > height ? (unit = height / 16) : (unit = width / 16)
  translate(width * 0.3, height * 0.6)
  // make edge-of-a-triangle block
  function triEdge(u, sColor, fColor) {
    fill(fColor)
    noStroke()
    let triX = u / tan(60)
    let hyp = u / sin(60)
    let rectX = 8 * u - hyp - 2 * triX
    let y = 2.5 * hyp * sin(60)
    let hyp2 = (y - u) / sin(60)
    triangle(0, 0, triX, 0, triX, -u)
    rect(triX, -u, rectX, u)
    triangle(rectX + triX, 0, rectX + 2 * triX, 0, rectX + triX, -u)
    triangle(rectX + triX - hyp2, -u, rectX + triX - 0.5 * hyp2, -y, rectX + triX, -u)
    stroke(sColor)
    line(0, 0, rectX + 2 * triX, 0)
    line(rectX + 2 * triX, 0, rectX + 2 * triX - 1.25 * hyp, -y)
    line(rectX + 2 * triX - 1.25 * hyp, -y, rectX + 2 * triX - 1.25 * hyp - (y - u) / tan(60), -u)
    line(rectX + 2 * triX - 1.25 * hyp - (y - u) / tan(60), -u, triX, -u)
    line(triX, -u, 0, 0)
  }
  // make triangle
  function triBlocks(u, weight) {
    for (let i = 0; i < 3; i++) {
      triEdge(u, pal[i + 1], pal[4])
      translate(4 * u, -8 * u * sin(60))
      rotate(120)
    }
  }

  strokeWeight(5)
  triBlocks(unit, 2)
}
