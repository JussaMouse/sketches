// HW part 2
// Dec 22, 2022
// Three lighted facades
// The two principles utlized here are gradation (of color) and similarity. The sizes and positions of the 3 forms are variable, but they retain their shape. The other constant in their arrangement is the order by size: purple > blue > green.

const bg = [20, 11, 32]
const pPurp = [
  [33, 24, 70],
  [45, 34, 88],
  [67, 56, 125],
  [90, 80, 148],
  [176, 173, 197],
]
const pBlue = [
  [15, 26, 48],
  [27, 42, 76],
  [49, 84, 134],
  [93, 129, 172],
  [169, 192, 216],
]
const pGreen = [
  [21, 30, 16],
  [30, 48, 28],
  [40, 66, 40],
  [49, 84, 47],
  [110, 144, 110],
]

const pal = [pPurp, pBlue, pGreen]
const dx = Math.random() * 2 - 1
const syze = Math.random() * 0.3 + 0.3

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(bg)
  const unit = height / 20
  let flip = 1
  let x = 0
  for (let i = 0; i < 3; i++) {
    if (i == 2) flip = -1
    i ? (x = width / 3 + ((dx * width) / 3) * flip) : (x = width * 0.5 + dx * width * 0.2)
    // x, y, syze, palette
    if (frameCount < width / 4) house(x + width / 2 - frameCount * 2, height * 0.8, 2 - i * syze, i)
    else house(x, height * 0.8, 2 - i * syze, i)
  }
  fill(pBlue[1])
  noStroke()
  rect(0, height * 0.8, width, height)

  function house(x, y, syze, palNum) {
    push()
    noStroke()
    translate(x, y)
    fill(pal[palNum][0])
    arc(unit * 2.5 * syze, unit * -4 * syze, unit * 5 * syze, unit * 5 * syze, PI, 0)
    for (let i = 0; i < 4; i++) {
      fill(pal[palNum][i + 1])
      rect(0, (-4 * unit + i * unit) * syze, unit * 5 * syze, unit * syze)
    }
    fill(bg)
    for (let i = 1; i < 3; i++) {
      ellipse(unit * (2 * i - 0.5) * syze, unit * -1 * syze, unit * syze)
      rect((2 * i - 1) * unit * syze, -unit * syze, unit * syze, unit * syze)
    }
    pop()
  }
}
