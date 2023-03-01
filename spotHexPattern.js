const pal = [
  [215, 84, 38],
  [196, 229, 234],
]

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(pal[0])
}

function draw() {
  stroke(pal[1])
  strokeWeight(10)
  fill(pal[1])
  let unit = width / 12
  translate(0, 2 * unit)

  for (let n = 0; n < 3; n++) {
    for (let i = 0; i < width; i++) {
      let y = unit * sin(i) + 2 * unit * cos(i)
      if (abs(y) < unit * 2) ellipse(i, unit * sin(i) + 2 * unit * cos(i), 10)
    }
    translate(0, unit * 4.1)
  }
}
