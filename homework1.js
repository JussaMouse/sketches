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
const palNum = Math.floor(Math.random()*3)
const numColors = pal[palNum].length

let tick = 0
let pressTime = 0
let flip = false

function setup() {
  frameRate(12)

  createCanvas(800, 600)
  background(pal[palNum][0])

  push()
    for(let i = 1; i < numColors; i++){
      fill(pal[palNum][i])
      rect(width*0.9,0,width*0.1,height/numColors)
      translate(0,height/numColors)
    }
    fill(255)
    rect(width*0.9,0,width*0.1,height/numColors)
    fill(30)
    textFont("Courier")
    textSize(18)
    text('flip', width*0.92, height/(2*numColors))
  pop()

  fill(pal[palNum][1])
}

function draw() {


  if (!mouseIsPressed) {
    pressTime = 0
  }

  translate(mouseX, mouseY)

  if (mouseIsPressed) {
    if (mouseX<width*0.9)  mark(pal[palNum])

    if (mouseX>width*0.9) {
      let a = 0
      for (let i=0;i<numColors-1; i++) {
        if (mouseY>a&&mouseY<a+height/numColors) {
          stroke(...pal[palNum][i+1],255-pressTime*4)
        }
        a+=(height/numColors)
      }


      if (mouseY>(numColors-1)*height/numColors) {
        flip=!flip
      }

    }





    pressTime++

  }

  function mark(pallette) {
    let dx = 15
    let dy = 15

    noFill()
    ellipseMode(CENTER)

    if (pressTime < dx){
      line(0,0,0,flip ? -dy + pressTime : dy - pressTime)
      line(0,0,flip ? -dx + pressTime : dx - pressTime,0)
    }


  }

  // function wackyBrush(pallette) {
  //   let dx = sin(frameCount*0.1)*10 + pressLength*0.5
  //   let dy = cos(frameCount*0.1)*10 + pressLength*0.5
  //   const numGuys = 5
  //   const numColors = pallette.length
  //   for (let i = 0; i < numGuys; i++) {
  //     stroke(...pallette[i+3%3], 255)

  //     fill(...pallette[i+3%3], 255)

  //     line(0,0,dx,dy)
  //     // dx = sin(frameCount)*10
  //     // dy = cos(frameCount)*10
  //   }
  // }
  tick += 0.01
}



