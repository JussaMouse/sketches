const pal0 = [
  [33, 24, 70],
  [45, 34, 88],
  [67, 56, 125],
  [90, 80, 148],
  [176, 173, 197],
]
const pal1 = [
  [15, 26, 48],
  [27, 42, 76],
  [49, 84, 134],
  [93, 129, 172],
  [169, 192, 216],
]
const pal2 = [
  [21, 30, 16],
  [30, 48, 28],
  [40, 66, 40],
  [49, 84, 47],
  [110, 144, 110],
]
let pal = pal0
let randos = []
for (let i = 0; i < 1000; i++) {
  randos[i] = Math.random()
}

let jump = 0
let big = false

function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
  colorMode(HSB)
  background(20)
  strokeCap(SQUARE)
  //blendMode(MULTIPLY)
}

function draw() {
  // strokeWeight(10)
  // translate(width / 2, height / 4)

  function fatMark(x, y) {
    noStroke()
    for (let i = 0; i < 360; i += 21) {
      fill([(sin(i) * 36 + jump) % 360, 50, 100, 0.1])
      // fill(...pal[i % 5], 3)
      // stroke(i / 10, 50, 100, 0.05)
      // noFill()
      x = 10 * cos(i)
      y = 10 * sin(i)
      ellipse(x, y, big ? random(100, 200) : random(20, 50))
    }
  }

  // translate(width / 2, height / 2)

  function manyFatMarks(x, y) {
    translate(x, y)
    for (let i = 0; i < 10; i++) {
      fatMark(100 * cos(i), 100 * sin(i))
    }
  }
  if (mouseIsPressed) {
    manyFatMarks(mouseX, mouseY)
  }
}
function keyPressed() {
  if (keyCode === SHIFT) {
    big = true
  }
  // if (keyCode === ALT) {
  //   alpha = 0.06
  // }
  if (keyCode === 48) {
    pal = pal0
    // jump += 80
  }
  if (keyCode === 49) {
    pal = pal1
    // jump += 80
  }
  if (keyCode === 50) {
    pal = pal2
    // jump += 80
  }
}

function keyReleased() {
  if (big) {
    big = false
  }
}
