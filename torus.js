// spherical to p5 cartesian (x is right, y id down, z is out of the screen)
//
//
//                                  ______.<--p = (x, y, z)
//            __________________  /______/|\____________________ x
//          o`--,--.....  r0    /  r1-->/ |<-\-------- p_y = r1*sin(phi)
//         /|  /        ``````-|---___./)_!   | _______________ p_z = (r0+r1*cos(phi))*cos(theta)
//        /_|/                  \   phi^  ^p'/
//       /  | ^theta              \______/_/
//      /   |                           /
//     /    |                          /
//    /     |                         /
//   /      |                      p_x = (r0 + r1*cos(phi))*sin(theta)
//  /       |
// z        |
//          |
//          |          p' is point p projected onto the x,z plane
//          |          radius to p' = r0 + r1*cos(phi)
//          |
//          |
//          |
//          |
//          y
//
//
//
//
