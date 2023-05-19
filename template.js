function setup() {
  createCanvas(500, 500)
  // createLoop({ duration: 3, gif: true })
  background(220)
  strokeWeight(3)
  stroke(10)
}

function draw() {
  if (mouseIsPressed) {
    translate(mouseX, mouseY)
    for (let i = -1; i < 1; i += 0.005) {
      point(i * 100, noise(i) * 100)
    }
  }
}
