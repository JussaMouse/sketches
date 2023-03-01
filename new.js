let wid = window.innerWidth
let hei = window.innerHeight
let cx = 0.5 * wid
let cy = 0.5 * hei

function setup() {
  createCanvas(wid, hei)
  angleMode(DEGREES)
  // createLoop({ duration: 6, gif: true })
  background(255)
}

function draw() {
  stroke(10)

  if (mouseIsPressed) {
    for (let i = 0; i < 360; i++) {
      let r = 20
      let x = mouseX + r * cos(i)
      let y = mouseY + r * (sin(i) + 0.2 * sin(x * 10))
      point(x, y)
    }
  }
}
