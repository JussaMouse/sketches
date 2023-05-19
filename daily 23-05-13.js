const wid = window.innerWidth
const hei = window.innerHeight
const colTotal = 50
let colW = wid / colTotal
const rowTotal = 50
let rowH = hei / rowTotal

let tick = 0

// choose unicode chars
let p0 = [1920, 1925]
let p1 = [1925, 1935]
let p2 = [1961, 1969]
let palette0 = []
let palette1 = []
let palette2 = []
for (let i = p0[0]; i < p2[1]; i++) {
  if (i < p0[1]) {
    palette0.push(String.fromCharCode(i))
  } else if (i > p1[0] && i < p1[1]) {
    palette1.push(String.fromCharCode(i))
  } else if (i > p2[0]) {
    palette2.push(String.fromCharCode(i))
  }
}
let p0bag = []
let p1bag = []
let p2bag = []
let bagMax

let char = 0
let charMax
let cut0
let cut1
let r0
let r

let chonk

function setup() {
  createCanvas(wid, hei)
  angleMode(DEGREES)
  strokeCap(PROJECT)
  colorMode(HSB, 360, 100, 100, 1)

  textFont('Courier')
  textSize(13)

  chonk = 50
  charMax = 200
  cut0 = 0.8
  cut1 = 0.5
  r0 = 10
  bagMax = 1000

  for (let i = 0; i < bagMax; i++) {
    p0bag.push(random(palette0))
    p1bag.push(random(palette1))
    p2bag.push(random(palette2))
  }
}

function makeFrame(p, d) {
  let dx = (wid * 0.6) / d

  for (let side = 0; side < 4; side++) {
    translate(-30, 0)
    for (let i = 0; i < d; i++) {
      textSize(33)
      // textSize(noise(i+tick/62)*20+30)

      push()
      rotate(noise(i / 10) * 30)
      text(p[char % p.length], 0, 0)
      pop()

      translate(dx, sin(i * 10) / 2)
      char++
    }
    rotate(90)
  }
}

function draw() {
  char = 0
  fill(0)

  // background(0)
  background(223, 10, 100)

  push()
  translate(wid / 5 + 30, hei / 5 + 40)

  textSize(53)
  for (let i = 0; i < 60; i++) {
    for (let j = 0; j < 62; j++) {
      fill(23, 3, 94 + 6 * noise((i + j) / 10))
      text(p1bag[j], i * 6, j * 6)
    }
  }

  pop()

  translate(wid / 5, hei / 5)

  let chroma = 0
  for (let layer = 0; layer < 8; layer++) {
    push()
    scale(1 - layer * 0.03)
    translate(8 * layer, 8 * layer)
    //        palette, density
    makeFrame(p2bag, 50)
    pop()
    chroma += 13
    fill(0, 0, chroma)
  }

  // let char
  // let dice = noise(i / 3 + tick / 200 + (r - r0) / 10)
  // if (dice > cut0) {
  //   char = palette0[j % palette0.length]
  // } else if (dice > cut1) {
  //   char = palette1[j % palette1.length]
  // } else {
  //   char = palette2[j % palette2.length]
  // }

  tick++
}

function mousePressed() {}
