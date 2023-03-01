function main() {
  talkingToHal = [
    "164782",
    "0e4643",
    "12292f",
    "670506",
    "fc0f26",
    "fe4a75",
    "3e0403",
    "0d0907",
  ]
  cockpit2 = [
    "754c41",
    "0289b2",
    "123135",
    "cd2e57",
    "abf0d9",
    "eecca5",
    "41000a",
    "151716",
  ]
  trippy = [
    "760083",
    "9e5292",
    "034830",
    "041e1e",
    "0bdeb3",
    "4c7da6",
    "c88128",
    "1f022c",
  ]

  a = talkingToHal.concat(cockpit2).concat(trippy)
  let pallette = []
  console.log(typeof a)
  for (let i = 0; i < 24; i++) {
    pallette[i] = hexToRgb(a[i])
  }
  const p = [pallette.slice(0, 8), pallette.slice(8, 16), pallette.slice(16)]

  console.log(p)
}

function hexToRgb(hex) {
  // Split the hexadecimal string into its red, green, and blue components
  const red = hex.substr(0, 2)
  const green = hex.substr(2, 2)
  const blue = hex.substr(4, 2)

  // Convert each component from hexadecimal to decimal
  const redDec = parseInt(red, 16)
  const greenDec = parseInt(green, 16)
  const blueDec = parseInt(blue, 16)

  // Return the array of red, green, and blue values
  return [redDec, greenDec, blueDec]
}

main()
