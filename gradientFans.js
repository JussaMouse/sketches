const pal = [
  [15, 26, 48],
  [27, 42, 76],
  [49, 84, 134],
  [93, 129, 172],
  [169, 192, 216],
]

//let tick = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(20)
  noiseSeed(0)
  angleMode(DEGREES)
}

function draw() {
  const divX = 200
  const divY = 100
  const numCol = floor(width / divX) + 1
  const numRow = floor(height / divY) + 1
  translate(width * 1.5, divY)
  noStroke()

  for (let k = 0; k < numRow; k++) {
    for (let n = 0; n < numCol + 2; n++) {
      for (let i = 0; i < 180; i++) {
        // colorNumber, length, thickness
        let newColor = [
          map(i, 0, 180, pal[n % 5][0], pal[(n + 1) % 5][0]),
          map(i, 0, 180, pal[n % 5][1], pal[(n + 1) % 5][1]),
          map(i, 0, 180, pal[n % 5][2], pal[(n + 1) % 5][2]),
        ]
        fill(newColor)
        fatLine(100, 50)
        rotate(-1)
      }
      rotate(180)
      translate(-divX, 0)
    }
    translate(width + (k * divX) / 2, divY)
  }

  //tick += 0.001
}

// cn = color number (palette element)

// function gradientLine(cn, len, chonk) {
//   for (let i = 0; i < len; i++) {
//     let newColor = [
//       map(i, 0, len, pal[cn][0], pal[(cn + 1) % 5][0]),
//       map(i, 0, len, pal[cn][1], pal[(cn + 1) % 5][1]),
//       map(i, 0, len, pal[cn][2], pal[(cn + 1) % 5][2]),
//     ]
//     fill(newColor)
//     ellipse(i, 0, chonk)
//   }
// }

function fatLine(len, chonk) {
  for (let i = 0; i < len; i++) {
    ellipse(i, 0, chonk)
  }
}
