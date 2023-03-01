// an array of 100x100 arrays
// that are frames of the 2d noise animation
let frames = []

function setup() {
  createCanvas(500, 500, WEBGL)
  angleMode(DEGREES)
  noiseDetail(8, 0.65)
}

function draw() {
  background(255, 250, 245)
  orbitControl(4, 4)

  strokeWeight(3)
  stroke('red')
  line(0, 0, 0, 20, 0, 0)
  stroke('green')
  line(0, 0, 0, 0, 20, 0)
  stroke('blue')
  line(0, 0, 0, 0, 0, 20)
}

//   let r0 = 50
//   for (let theta = 0; theta < 360; theta++) {
//     for (let r1 = 0; r1 < 10; r1++) {
//       for (let phi = 0; phi < 360; phi++) {
//         let x = (r0 + r1 * cos(phi)) * sin(theta)
//         let y = r1 * sin(phi)
//         let z = (r0 + r1 * cos(phi)) * cos(theta)

//       }
//     }
//   }
// }

// make a torus in 3d noise space
// this means we need r0, r1, theta and phi (see torus.js)
// or https://www.youtube.com/watch?v=iNA4yH7DAN8
