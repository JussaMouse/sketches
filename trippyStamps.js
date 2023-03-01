function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
  colorMode(HSB)
  background(10)
}

let big = false
let alpha = 0.01
let c = 0

function draw() {
  let ang = 120
  let unit = 0

  stroke([(sin(frameCount) * 20 + 120 + c) % 360, 30, 100, alpha])
  strokeWeight(1)
  if (mouseIsPressed) {
    translate(mouseX, mouseY)
    push()
    for (let i = 0; i < 113; i++) {
      line(0, 0, unit, 0)
      translate(unit, 0)
      rotate(ang + frameCount / 100)
      if (big) unit += 5
      unit += 1
      ang += 0.005
    }
    pop()
  }
}
function keyPressed() {
  if (keyCode === SHIFT) {
    big = true
  }
  if (keyCode === ALT) {
    alpha = 0.06
  }
  if (keyCode === UP_ARROW) {
    c += 50
  }
}

function keyReleased() {
  if (big) {
    big = false
  }

  alpha = 0.01
}

function mouseReleased() {
  ang = 120
}
