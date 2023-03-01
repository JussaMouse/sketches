// from https://forum.processing.org/two/discussion/27456/hi-i-am-new-in-p5-js-can-someone-help-to-make-this-work

function Pent(stroke_val, radius, max_rotation_speed) {
  this.stk = stroke_val
  this.rad = radius
  this.ro = 0
  this.dro = max_rotation_speed
  this.draw = function () {
    stroke(128)
    fill(this.stk)

    this.ro += (1 / 2000) * this.dro /* * ( map(mouseX,0,width,-1,1))*/

    var angle = TWO_PI / 7

    rotate(this.ro * n)
    n += 0.0001 * reverser
    if (n === 0.5 || n === -0.5) reverser *= -1
    beginShape()
    for (var a = 0; a <= 3 * TWO_PI; a += 3 * angle) {
      var sx = cos(a) * this.rad
      var sy = sin(a) * this.rad
      vertex(sx, sy)
    }
    endShape(CLOSE)
  }
}
var n = -1
var reverser = 1
var pents = []
function setup() {
  createCanvas(windowWidth, windowHeight)
  colorMode(HSB, 255)
  for (var i = 0; i < 18; i++)
    pents.push(
      new Pent(color((120 + 10 * i) % 255, 28 * i, 255), 500 - 25 * i, 20 - i)
    )
  smooth()
}
function draw() {
  background(20)
  translate(windowWidth / 2, windowHeight / 2)
  for (var i = 0; i < pents.length; i++) pents[i].draw()
  console.log(this.ro)
}
