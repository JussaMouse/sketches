// lookup table of binomial terms
// let lut = [
//   [1], // n=0
//   [1, 1], // n=1
//   [1, 2, 1], // n=2
//   [1, 3, 3, 1], // n=3
//   [1, 4, 6, 4, 1], // n=4
//   [1, 5, 10, 10, 5, 1], // n=5
//   [1, 6, 15, 20, 15, 6, 1], // n=6
// ]

// returns the value retrieved from lut[n][k]
// for order n and term k (n and k are 0 indexed)
// function binomial(n, k) {
//   while (n >= lut.length) {
//     s = lut.length
//     nextRow = [] // nextRow = new array((size = s + 1))
//     nextRow[0] = 1
//     for (i = 1, prev = s - 1; i < s; i++) {
//       nextRow[i] = lut[prev][i - 1] + lut[prev][i]
//     }
//     nextRow[s] = 1
//     lut.push(nextRow)
//   }
//   return lut[n][k]
// }

// for general polynomials:
//               n   /n\
// bezier(n,t) = ∑  |   |  .  (1-t)^(n-i).t^i  .  w_i
//              i=0  \i/
//                   ---      ---------------     ---
//               binomial term       |           weight
//                             polynomial term
// function bezier(n, t) {
//   let sum = 0
//   for (i = 0; i <= n; i++) {
//     sum += (binomial(n, i) * (1 - t)) ^ ((n - i) * t) ^ i
//   }
//   return sum
// }
//
// however, we just need the n=2 (quadratic)
// and n=3 (cubic) cases, so we optimize:

// the weights correspond to the points a, b, c, d
