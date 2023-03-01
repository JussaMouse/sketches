// make sure index.html HEAD has <script src="https://unpkg.com/p5.createloop@0.2.12/dist/p5.createloop.js"></script>

function setup() {
  createCanvas(800, 600)
  FPS = 30
  frameRate(FPS)
  createLoop({ duration: 50, gif: true })
}
