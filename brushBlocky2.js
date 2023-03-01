let glyphs = []
let gi = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  imageMode(CENTER)
  angleMode(DEGREES)

  brush = createGraphics(50, 50)
  brush.fill(255)
  brush.textSize(14)
  for (let i = 0; i < 50000; i++) {
    glyphs[i] = String.fromCharCode(random((0x0021, 0x0500)))
  }

  mask = createGraphics(50, 50)
  mask.noFill()
  mask.translate(25, 25)
}

function draw() {}
