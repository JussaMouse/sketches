let dataIn

function preload() {
  dataIn = loadJSON('./allP.json')
}

function setup() {
  colorMode(HSB)
  createCanvas(500, 500)
  background(30, 4, 100)

  let palHsb = dataIn['duskTillDawn'].hsb

  let fromHsb = color(palHsb[0])
  let toHsb = color(palHsb[1])

  let x = 100

  let yHsb = 300
  for (let i = 0; i < 290; i++) {
    let t = map(i, 0, 289, 0, 1)
    noStroke()
    fill(lerpColor(fromHsb, toHsb, t))
    rect(x + i, yHsb, 10, 100)
  }
}
