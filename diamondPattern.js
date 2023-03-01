let pal2001 = [
  [22, 71, 130],
  [254, 74, 117],
  [14, 70, 67],
  [18, 41, 47],
  [252, 15, 38],
  [103, 5, 6],
  [62, 4, 3],
  [13, 9, 7],
  [238, 204, 165],
  [65, 0, 10],
  [205, 46, 87],
  [171, 240, 217],
  [2, 137, 178],
  [117, 76, 65],
  [18, 49, 53],
  [21, 23, 22],
  [11, 222, 179],
  [31, 2, 44],
  [200, 129, 40],
  [76, 125, 166],
  [118, 0, 131],
  [4, 30, 30],
  [3, 72, 48],
  [158, 82, 146],
]

let palMono = [255, 225, 205, 185, 105, 85, 45]

let tick = 0
let bg = 20
let colors = []
function colorsReroll() {
  for (let i = 0; i < 16; i++) {
    colors[i] = Math.floor(Math.random() * 24)
  }
}
colorsReroll()

let pieces = []
for (let i = 0; i < 12; i++) {
  pieces[i] = `${9812 + i}`
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  //noLoop()
}

function draw() {
  // blendMode(SOFT_LIGHT)
  background(bg)

  if (frameCount % 120 == 0) {
    colorsReroll()
  }
  let dx
  width > height ? (dx = width / 8) : (dx = height / 8)

  for (let i = 0; i < 16; i++)
    for (let n = 0; n < 10; n++) {
      flippy((i * dx) / 1.333, n * dx, palMono[colors[i] % 7], i % 12, dx)
    }

  tick += 0.03
}

function flippy(x, y, color, piece, dx) {
  push()
  translate(x, y)
  stroke(palMono[0])
  textSize(100)
  text(`${String.fromCodePoint(pieces[piece])}`, dx, dx)
  rotate(PI / 4)
  noFill()
  stroke(color)
  strokeWeight(2)
  //fill(...pal[c1], 10)
  rect(-100, -100, 100, 100)
  //fill(...pal[c2], 10)
  rect(0, 0, 100, 100)
  //fill(...pal[c3], 10)
  arc(-100, -100, 200, 200, 0, 0.5 * PI)
  arc(100, 100, 200, 200, PI, 1.5 * PI)

  rotate(-PI / 4)

  let u = (8 / 3 - 3 ** 0.5) * PI * 20
  let v = 2 * 3 ** 0.5 * 20
  bezier(-PI * 20, 0, u - PI * 20, -v * sin(tick), TWO_PI * 20 - u - PI * 20, v * sin(tick), TWO_PI * 20 - PI * 20, 0)
  bezier(-PI * 20, 0, u - PI * 20, v * sin(tick), TWO_PI * 20 - u - PI * 20, -v * sin(tick), TWO_PI * 20 - PI * 20, 0)
  // mask for half squares
  // stroke(255, 0, 0)
  // strokeWeight(3)
  // beginShape()
  // vertex(-100, 0)
  // vertex(-100, -100)
  // vertex(0, -100)
  // endShape()
  // beginShape()
  // vertex(100, 0)
  // vertex(100, 100)
  // vertex(0, 100)
  // endShape()
  pop()
}
