const wid = window.innerWidth
const hei = window.innerHeight

let maskCanvas
let fillCanvas
let ink = 0
let ts

const p = [
  '\u{1F339}',
  '\u{1F338}',
  '\u{1F490}',
  '\u{1F33A}',
  '\u{1F337}',
  '\u{1F33B}',
  '\u{1F33C}',
  '\u{1F4AE}',
  '\u{1FAB7}',
  '\u{1FABB}',
]

function setup() {
  createCanvas(wid, hei)
  angleMode(DEGREES)
  strokeCap(PROJECT)
  colorMode(HSB, 360, 100, 100, 1)
  imageMode(CENTER)

  maskCanvas = createGraphics(512, 512)
  fillCanvas = createGraphics(512, 512)
  ts = 100

  translate(100, 100)
}

function keyPressed() {
  if (keyCode === 32) {
    ink = (ink + 1) % p.length
  }
  if (keyCode === UP_ARROW) {
    ts += 10
  }
  if (keyCode === DOWN_ARROW) {
    ts -= 10
  }
}

function mouseDragged() {
  text(p[ink], 0, 0)
}

function draw() {
  noStroke()
  fill(255)
  rect(0, 0, 25, 40)
  textSize(20)
  text(p[ink], 0, 20)
  fill(0)
  textSize(12)
  text(ts, 0, 40)

  textSize(ts)
  translate(mouseX - ts / 2, mouseY + ts / 2)
}
