// PRESS B TO TOGGLE BETWEEN JAGGY BRUSH AND FUZZY BRUSH
// PRESS ARROW KEYS TO CHANGE DIRECTION OF GRADIENT
// PRESS SPACE TO CHANGE COLOR
//
// *JAGGY BRUSH CONTROLS*
// HOLD SHIFT FOR BIG
// HOLD ALT FOR TINY
//
// *FUZZY BRUSH CONTROLS*
// HOLD A/D TO ROTATE BRUSH

// RGB color palettes. gradients transition palA[n] to palB[n]
palA = [
  [7, 13, 33],
  [34, 79, 95],
  [0, 109, 30],
  [228, 215, 140],
  [127, 179, 233],
  [105, 151, 195],
  [204, 125, 0],
  [116, 54, 75],
  [203, 58, 74],
  [111, 155, 135],
  [147, 173, 181],
  [105, 0, 1],
  [27, 132, 140],
  [135, 56, 0],
  [94, 88, 81],
  [10, 109, 144],
]

palB = [
  [121, 9, 73],
  [0, 65, 10],
  [38, 88, 132],
  [233, 194, 199],
  [178, 206, 178],
  [176, 234, 255],
  [130, 58, 28],
  [132, 107, 147],
  [245, 166, 118],
  [127, 152, 149],
  [34, 40, 31],
  [255, 123, 35],
  [130, 157, 191],
  [65, 42, 25],
  [123, 134, 153],
  [54, 110, 143],
]

// array for random characters
let glyphs = []

// index of current random character
let gi = 0

// toggle fuzzyBrush
let fuzzyBrushOn = false

// fuzzyBrush angle
let fba = 0

// distance/angle from mouse position to shape
let r0 = 20
let r0big = 100
let a0 = 0

// distance/angle from a shape's center its vertex
let r1 = 20
let r1big = 100
let a1 = 0

// counts the number of frames the mouse button is held. resets on release
let tPressed = 0

// index of the current color in palA[]/palB[]
let n = 0

// toggle brush size/shape
let big = false
let lil = false

// set the direction of the gradient ('up', 'down', 'left', 'right')
let dir = '↑'

function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)

  background(255)
  colorMode(RGB)
  imageMode(CENTER)

  // extra canvas for a brush made of random characters
  fuzzyBrush = createGraphics(50, 50)
  fuzzyBrush.textSize(14)
  for (let i = 0; i < 50000; i++) {
    glyphs[i] = String.fromCharCode(random((0x0021, 0x0500)))
  }

  // extra canvas to mask fuzzyBrush
  mask = createGraphics(80, 80)
  mask.noFill()
  mask.translate(40, 40)
  mask.angleMode(DEGREES)
}

function draw() {
  // fuzzy brush ////////////////////////
  ////////////////////////////////////////////////////////////////////////
  if (fuzzyBrushOn) {
    push()
    fuzzyBrush.fill(getNewColor(n))
    translate(mouseX, mouseY)
    for (let i = 0; i < 200; i++) {
      mask.stroke(random(10, 30))
      let x = random(-20, 20)
      let y = random(-20, 20)
      mask.ellipse(x, y, 3)
    }

    if (mouseIsPressed) {
      fuzzyBrush.clear()
      for (let row = 0; row < 15; row++) {
        for (let col = 0; col < 15; col++) {
          fuzzyBrush.text(glyphs[gi], col * 5, row * 5)
          gi++
          if (gi > 49998) gi = 0
        }
      }

      let fuzzyBrushImg = fuzzyBrush.get()
      fuzzyBrushImg.mask(mask)
      image(fuzzyBrushImg, 0, 0)
      mask.clear()
    }
    pop()

    if (keyIsDown(65)) {
      mask.rotate(1)
      fba++
    }
    if (keyIsDown(68)) {
      mask.rotate(-1)
      fba--
    }
  }
  // jaggy brush ////////////////////////
  ////////////////////////////////////////////////////////////////////////
  else {
    noStroke()
    if (mouseIsPressed) {
      fill(getNewColor(n))

      push()
      translate(mouseX, mouseY)
      lil ? scale(0.25) : scale(1)

      for (let j = 0; j < 12; j++) {
        big ? (r = r0big) : (r = r0)
        let x0 = r * cos(a0)
        let y0 = r * sin(a0)
        push()
        translate(x0, y0)
        beginShape()
        for (let i = 0; i < 4; i++) {
          big ? (r = r1big) : (r = r0)
          // a1 += randos[i + randoIndex] * 90
          a1 += random(90)
          let x1 = r * cos(a1)
          let y1 = r * sin(a1)
          vertex(x1, y1)
          // randoIndex++
        }
        endShape(CLOSE)
        pop()
        a0 += 30
      }
      tPressed++
      pop()
    }
  }

  // tool bar ///////////////////////////
  ////////////////////////////////////////////////////////////////////////
  fill(255)
  stroke(10)
  rect(0, 0, 60, 60)
  push()
  translate(30, 30)
  rotate(fba)
  rect(-15, -15, 30, 30)
  pop()
  rect(60, 0, 60, 60)
  fill(10)
  textSize(24)
  text(dir, 82, 40)

  translate(120, 0)
  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < palA.length; c++) {
      r == 0 ? fill(palA[c]) : fill(palB[c])
      rect(c * 30, r * 30, 30, 30)
      fill(255)
      rect(n * 30, 45, 15, 15)
      fill(10)
      text('*', n * 30 + 2, 66)
    }
  }

  // brush color ////////////////////////
  ////////////////////////////////////////////////////////////////////////
  function getNewColor(n) {
    if (dir === '↑') {
      newColor = [
        map(mouseY, height, 0, palA[n][0], palB[n][0]),
        map(mouseY, height, 0, palA[n][1], palB[n][1]),
        map(mouseY, height, 0, palA[n][2], palB[n][2]),
      ]
    } else if (dir === '↓') {
      newColor = [
        map(mouseY, 0, height, palA[n][0], palB[n][0]),
        map(mouseY, 0, height, palA[n][1], palB[n][1]),
        map(mouseY, 0, height, palA[n][2], palB[n][2]),
      ]
    } else if (dir === '→') {
      newColor = [
        map(mouseX, 0, width, palA[n][0], palB[n][0]),
        map(mouseX, 0, width, palA[n][1], palB[n][1]),
        map(mouseX, 0, width, palA[n][2], palB[n][2]),
      ]
    } else {
      newColor = [
        map(mouseX, width, 0, palA[n][0], palB[n][0]),
        map(mouseX, width, 0, palA[n][1], palB[n][1]),
        map(mouseX, width, 0, palA[n][2], palB[n][2]),
      ]
    }
    return newColor
  }
}

function mouseReleased() {
  a = 0
  tPressed = 0
}

function keyPressed() {
  if (keyCode === SHIFT) big = true
  if (keyCode === ALT) lil = true
  if (keyCode === UP_ARROW) dir = '↑'
  if (keyCode === DOWN_ARROW) dir = '↓'
  if (keyCode === LEFT_ARROW) dir = '←'
  if (keyCode === RIGHT_ARROW) dir = '→'
  if (keyCode === 32) n = (n + 1) % 16 // 32 = space key
  if (keyCode === 66) fuzzyBrushOn = !fuzzyBrushOn // 66 = B key
}

function keyReleased() {
  if (keyCode === SHIFT) big = false
  if (keyCode === ALT) lil = false
}
