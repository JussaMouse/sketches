function setup() {
  createCanvas(500, 500)
  // createLoop({ duration: 3, gif: true })
  background(220)
}

function draw() {
  strokeWeight(3)
  stroke(10)
  translate(250, 250)
  for (let i = -1; i < 1; i += 0.005) {
    point(i * 100 + 100, noise(i) * 100)
  }
}
