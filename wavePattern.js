const pal = [
  [169, 192, 216],
  [171, 240, 217],
  [2, 137, 178],
  [11, 222, 179],
  [158, 82, 146],
]

let ci = 0

let wid = 120 //window.innerWidth
let hei = 120 //window.innerHeight

function setup() {
  createCanvas(wid, hei)
  angleMode(DEGREES)
  noStroke()
  createLoop({ duration: 6, gif: true })
}
function draw() {
  background(20)
  translate(-frameCount, 0.5 * hei)

  let dx = 3
  for (let j = -18; j < 19; j += 3) {
    // j % 2 == 0 ? (dx = 6) : (dx = 3)
    ci = abs(j) % 5
    fill(pal[ci])
    if (j) dx = abs(j)
    for (let i = 0; i < 800; i += dx) {
      let x = i
      let y = sin(i * 1.5) * j
      rect(x, y, 2)
    }
  }
}
