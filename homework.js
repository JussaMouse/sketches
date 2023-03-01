const pal = [
  [
    [22, 71, 130],
    [254, 74, 117],
    [14, 70, 67],
    [18, 41, 47],
    [252, 15, 38],
    [103, 5, 6],
    [62, 4, 3],
    [13, 9, 7],
  ],
  [
    [238, 204, 165],
    [65, 0, 10],
    [205, 46, 87],
    [171, 240, 217],
    [2, 137, 178],
    [117, 76, 65],
    [18, 49, 53],
    [21, 23, 22],
  ],
  [
    [11, 222, 179],
    [31, 2, 44],
    [200, 129, 40],
    [76, 125, 166],
    [118, 0, 131],
    [4, 30, 30],
    [3, 72, 48],
    [158, 82, 146],
  ],
]
let palNum = 0
let colour = pal[palNum]
let tik
tik = 0

function setup() {
  createCanvas(800, 600)
}

function draw() {
  background(color(colour[0]))
  push()
  textSize(18)
  fill(colour[4])
  textFont("Courier")
  text("JussaMouse // Buddy // a woodcut for your light stream. though ink dries and decays, we hold on to the afterburn", 10, 20)
  pop()
  noStroke()
  let c = []
  for (let i = 0; i < 4; i++) {
    c[i] = colour[i + 1]
  }

  if (tik > 30) {
    let xoff = 0
    push()
    for (let i = 0; i < 4; i++) {
      let co = color(c[i])
      i === 3 ? co.setAlpha(335 - tik) : co.setAlpha(335 - 2 * tik)
      strokeWeight(width * 0.025)
      stroke(co)
      noFill()
      rect(
        noise(xoff) * width * 0.02 + width * 0.15,
        noise(xoff + 1) * height * 0.02 + height * 0.1,
        width * 0.6,
        height * 0.8,
        width * 0.07
      )
      xoff++
    }
    pop()
    if (tik > 60) {
      let xoff = 0
      translate(width * 0.32 + noise(xoff), height * 0.35)
      for (let i = 0; i < 4; i++) {
        let co = color(c[i])
        i === 3 ? co.setAlpha(335 - 1.02 * tik) : co.setAlpha(335 - 2 * tik)
        fill(co)
        circle(noise(xoff) * width * 0.02 - width * 0.015, noise(xoff + 1) * height * 0.02, height * 0.12)
        xoff++
      }
      if (tik > 90) {
        translate(width * 0.3, 0)
        let xoff = 0
        for (let i = 0; i < 4; i++) {
          let co = color(c[i])
          i === 3 ? co.setAlpha(335 - 1.04 * tik) : co.setAlpha(335 - 2 * tik)
          fill(co)
          circle(noise(xoff) * width * 0.02 - width * 0.015, noise(xoff + 1) * height * 0.02, height * 0.12)
          xoff++
        }
        if (tik > 120) {
          let xoff = 0
          translate(-0.15 * width + noise(xoff + 7) * 10, height * 0.25)
          for (let i = 0; i < 4; i++) {
            let co = color(c[i])
            i === 3 ? co.setAlpha(335 - 1.06 * tik) : co.setAlpha(335 - 2 * tik)
            fill(co)
            arc(noise(xoff) * (width * 0.02) - width * 0.015, +noise(xoff + 1) * height * 0.02, width * 0.3, height * 0.3, 0, PI, CHORD)
            xoff++
          }
        }
      }
    }
  }

  if (tik == 300) {
    palNum++
    colour = pal[palNum % pal.length]
    tik = -1
  }
  tik++
}
