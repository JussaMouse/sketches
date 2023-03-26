let c = {
  R: [
    '#FF1741', // 35 brite red
    '#E887AE', // 59 lit pink
    '#690002', // 41 deep red
    '#451016', // 65 drk red
    '#3D1717', // 39 drk ochre
    '#F7D8CD', // 57 cream
    '#E8C1C6', // 40 cream pink
  ],
  O: [
    '#FA4F00', // 48 brite orng
    '#F2AA83', // 62 cream orng
    '#F5A676', // 15 lit brn orng
    '#D65527', // 49 deep orng
  ],
  Y: [
    '#F3FA70', // 14 brite pastel yello
    '#FFB700', // 44 marrigold
    '#E3BA5B', // 37 cream yello
    '#E3D68A', // 45 lit gray yello
    '#A89B6A', // 36 tan
    '#8A8569', // 42 mid gray yello
  ],
  G: [
    '#0BDEB4', // 19 hot teal
    '#02CC78', // 4 brite teal
    '#AAF0D9', // 11 hot teal
    '#E3FFFF', // 1 white teal
    '#9DD1B5', // 16 lit
    '#709C88', // 13 mid gray teal
    '#0E4542', // 18 drk teal
    '#224E5E', // 6 drk teal
    '#093332', // 5 drk teal
    '#03472F', // 21 drk grn
    '#B2CFB2', // 29 lit gray grn
    '#739C97', // 68 mid gray teal
    '#577367', // 24 mid gray grn
  ],
  B: [
    '#52DED7', // 52 hot aqua
    '#80B2E8', // 10 sky blu
    '#63B7F2', // 27 bby blu
    '#0289B3', // 28 lit blu
    '#366E8F', // 22 mid gray blu
    '#003D69', // 0 deep blue
    '#062A57', // 9 drk blu
    '#A9C0D9', // 23 lit gray blu
    '#93ADB5', // 7 lite gray teal
    '#48616B', // 55 drk blu gray
    '#0F1A30', // 12 blk blu
  ],
  V: [
    '#750082', // 3 deep purp
    '#5A5094', // 30 mid gray purp
    '#2E2359', // 17 deep purp
    '#B0ADC4', // 8 lite gray purp
    '#5E556B', // 66 mid gray purp
  ],
  M: [
    '#FF4A74', // 51 brite salmon
    '#CC2D55', // 26 brite salmon
    '#CC3B4C', // 33 brite salmon
    '#780848', // 32 deep mgnta
    '#85526F', // 56 mid gray mgnta
  ],
  mono: [
    'white', // 58
    '#71707D', // 50 mid gray
    '#676D75', // 61 mid gray
    '#5E5851', // 38 mid gray
    '#2F302C', // 67 blk gray
  ],
  dull: [
    '#F2E6D3', // 69 yello cream
    '#EDCBA4', // 43 cream
    '#AB8F74', // 54 khaki
    '#6E4E4C', // 64 mid gray brn
    '#6E3423', // 46 deep orng brn
    '#542918', // 60 deep brn
  ],
}
function setup() {
  createCanvas(windowWidth, windowHeight * 2)

  noStroke()
  textSize(16)

  let dx = 0
  for (group of Object.keys(c)) {
    dx += 100
    fill(0)
    text(`${group}`, dx + 30, 100)
    for (let i = 0; i < c[group].length; i++) {
      fill(c[group][i])
      rect(dx, 200 + i * 100, 100)
    }
  }
}
