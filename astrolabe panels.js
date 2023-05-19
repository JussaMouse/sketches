let myFont
function preload() {
  myFont = loadFont('./DroidSans.otf')
}

let wid = window.innerWidth
let hei = window.innerHeight

let r
let sqSize
let dArc

function setup() {
  createCanvas(wid, hei, WEBGL)
  angleMode(DEGREES)
  strokeCap(PROJECT)
  textFont(myFont)
  textSize(14)
  colorMode(HSB, 360, 100, 100, 1)

  r = 1000
  sqSize = 70
  dArc = 4
}

function draw() {
  background(23, 4, 50)
  orbitControl()

  makeAxes()
  makeSphere(r, sqSize, dArc)
}

function makeAxes() {
  strokeWeight(4)

  stroke('red')
  line(0, 0, 0, 100, 0, 0)
  stroke('green')
  line(0, 0, 0, 0, 100, 0)
  stroke('blue')
  line(0, 0, 0, 0, 0, 100)
}

function makeSphere(r, sqSize, dArc) {
  for (let j = -90; j < 90; j += dArc * 2) {
    rotateX(-j)
    for (let i = 0; i < 360; i += dArc) {
      push()
      translate(r * cos(i), 0, r * sin(i))
      rotateY(-i + 90)
      strokeWeight(1)
      plane(sqSize)
      fill(0)
      // text(`i: ${i}`,0,0)
      pop()
    }
  }
}
