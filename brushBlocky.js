function setup() {
  createCanvas(windowWidth, windowHeight)
  // createLoop({ duration: 3, gif: true })
  background(255, 0, 0)

  imageMode(CENTER)
  mask = createGraphics(500, 500)
  brush = createGraphics(500, 500)
}

function draw() {
  mask.noFill()
  mask.stroke(10)
  for (let i = 0; i < 5; i++) {
    let x = random(-200, 200)
    let y = random(-200, 200)
    mask.rect(x, y, random(5, 15))
  }

  brush.fill(255)

  brush.textSize(16)
}

function mouseDragged() {
  let glyphs = []
  for (let i = 0; i < 500; i++) {
    glyphs[i] = String.fromCharCode(random((0x0021, 0x0fd9)))
  }
  let gi = 0
  for (let row = 0; row < 22; row++) {
    for (let col = 0; col < 22; col++) {
      brush.text(glyphs[gi], col * 22.7, row * 22.7)
      gi++
    }
  }

  translate(mouseX, mouseY)
  // let brushImg = brush.get()
  // brushImg.mask(mask)
  // image(brushImg, 0, 0)
  image(brush, 0, 0)
}
