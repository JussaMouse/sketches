let pal = [
  [228, 215, 140],
  [215, 84, 38],
  [187, 152, 124],
  [196, 229, 234],
  [99, 181, 241],
  [111, 155, 135],
  [38, 88, 132],
  [7, 13, 33],
  [6, 43, 87],
  [43, 70, 63],
  [34, 79, 95],
  [178, 206, 178],
  [127, 179, 233],
  [233, 194, 199],
  [204, 165, 76],
  [176, 234, 255],
]
let pal2 = [
  [34, 29, 25],
  [53, 26, 125],
]
let randColor = Math.floor(Math.random() * 16)

function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
  // createLoop({ duration: 3, gif: true })
}

function draw() {
  background(pal2[0])
  let unit
  width > height ? (unit = height / 30) : (unit = width / 30)
  translate(width * 0.5, height * 0.5)
  // make edge-of-a-triangle block
  function triEdge(u, len, sColor, fColor) {
    fill(fColor)
    noStroke()
    triX = u / tan(60)
    hyp = u / cos(60)
    triangle(0, 0, triX, 0, triX, -u)
    rectX = len * u - hyp - 2 * triX
    rect(triX, -u, rectX, u)
    triangle(rectX + triX, 0, rectX + 2 * triX, 0, rectX + triX, -u)
    stroke(sColor)
    line(0, 0, rectX + 2 * triX, 0)
    line(rectX + 2 * triX, 0, rectX + triX, -u)
    line(rectX + triX, -u, triX, -u)
    line(triX, -u, 0, 0)
  }
  // make triangle
  function triBlocks(u, len, weight) {
    for (let i = 0; i < 10; i++) {
      triEdge(u, len, pal[3], pal2[1])
      translate((len - i * 0.05) * u - weight, 0)
      rotate(-120)
      if (i > 0 && i < 8) len -= 1.7
    }
  }
  // function triBlocks(u, len, weight) {
  //   for (let n = 0; n < 3; n++) {
  //     for (let i = 0; i < 3; i++) {
  //       triEdge(u, len, pal[((i + n) % 3) + 1], pal[4])
  //       translate(0.5 * len * u - weight, -len * u * sin(60) - weight)
  //       rotate(120)
  //     }
  //     len -= 4
  //     translate(0.2 * len * u, -0.1 * len * u * sin(60))
  //   }
  // }

  strokeWeight(2)
  triBlocks(unit, 18, 2)
}
