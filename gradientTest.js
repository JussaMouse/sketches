function setup() {
  createCanvas(500, 500)
  background(255)

  let palRgb = [
    [255, 50, 100],
    [150, 200, 255],
    [100, 150, 10],
  ]
  let palHsb = [
    [345, 80, 100],
    [211, 41, 100],
    [81, 93, 59],
  ]
  let fromRgb = palRgb[0]
  let toRgb = palRgb[1]
  let fromHsb = palHsb[0]
  let toHsb = palHsb[1]

  let x = 100
  let yRgb = 100
  let yHsb = 300
  for (let i = 0; i < 290; i++) {
    let t = map(i, 0, 289, 0, 1)
    noStroke()
    colorMode(RGB)
    let blendRgb = [
      lerp(fromRgb[0], toRgb[0], t),
      lerp(fromRgb[1], toRgb[1], t),
      lerp(fromRgb[2], toRgb[2], t),
    ]
    fill(blendRgb)
    rect(x + i, yRgb, 10, 100)

    colorMode(HSB)
    let blendHsb = [
      lerp(fromHsb[0], toHsb[0], t),
      lerp(fromHsb[1], toHsb[1], t),
      lerp(fromHsb[2], toHsb[2], t),
    ]
    fill(blendHsb)
    rect(x + i, yHsb, 10, 100)
  }
}
