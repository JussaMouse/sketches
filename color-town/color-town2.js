let c = [
  '#003D69',
  '#E3FFFF',
  '#FF4A74',
  '#750082',
  '#02CC78',
  '#093332',
  '#224E5E',
  '#93ADB5',
  '#B0ADC4',
  '#062A57',
  '#80B2E8',
  '#AAF0D9',
  '#0F1A30',
  '#709C88',
  '#F3FA70',
  '#F5A676',
  '#9DD1B5',
  '#2E2359',
  '#0E4542',
  '#0BDEB4',
  '#151716',
  '#03472F',
  '#366E8F',
  '#A9C0D9',
  '#577367',
  '#73364A',
  '#CC2D55',
  '#63B7F2',
  '#0289B3',
  '#B2CFB2',
  '#5A5094',
  '#FF8599',
  '#780848',
  '#CC3B4C',
  '#211C19',
  '#FF1741',
  '#A89B6A',
  '#E3BA5B',
  '#5E5851',
  '#3D1717',
  '#E8C1C6',
  '#690002',
  '#8A8569',
  '#EDCBA4',
  '#FFB700',
  '#E3D68A',
  '#6E3423',
  '#660507',
  '#FA4F00',
  '#D65527',
  '#71707D',
  '#FF4A74',
  '#52DED7',
  '#700D21',
  '#AB8F74',
  '#48616B',
  '#85526F',
  '#F7D8CD',
  '#F5D1C4',
  '#E887AE',
  '#542918',
  '#676D75',
  '#F2AA83',
  '#90D4A3',
  '#6E4E4C',
  '#451016',
  '#5E556B',
  '#2F302C',
  '#739C97',
  '#F2E6D3',
]

let c0 = chroma(c[0])
let c1 = chroma(c[20])

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255)
  colorMode(RGB, 255, 255, 255, 1)

  strokeWeight(3)
  line(0, 150, width, 150)

  let a = 0.55
  let bc = chroma.scale([c0, c1]).mode('lab')
  for (let i = 0; i < 9; i++) {
    fill([...bc(i / 8).rgb(), a])
    rect(100 + 100 * i, 100, 100, 100)
  }
}
