// Gpt infinity is a text generator
numGuys = 7 // number of letters
x = []
y = 0
content = [] // glyph unicode

function setup() {
  createCanvas(800, 600)
  colorMode(HSB)
  // FPS = 60
  // frameRate(FPS)
  // createLoop({ duration: 13, gif: true })
}

function draw() {
  background(255, 250, 245)
  if (y % height === 0) {
    for (i = 0; i < numGuys; i++) {
      x[i] = random(width * 0.1, width * 0.75)
      content[i] = String.fromCharCode(random((0x0021, 0x0fd9)))
    }
    fill(random() * 255, 100, 100)
  }
  textSize(200)
  for (i = 0; i < numGuys; i++) {
    text(content[i], x[i], (y % height) + random(-3, 3))
  }
  y += 5
}
