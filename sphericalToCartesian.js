//    3d
//                              z
//                              |
//                              |
//                              |           *   (r, theta, phi)
//                              |          /|
//                              |         / |
//                              |     r /   |
//                              |_     /    |
//                              | \  /      |
//                     theta ---|- \/       |
//                              | /         |
//                              |/__________|_________________ y
//                             / \          |
//                           /     \        |
//                         /  \___/  \      |
//                       /      |      \    |
//                     /       phi       \  |
//                   /                     \|
//                 x
//
//    theta = latitude [0,180] with theta = 0 at the north pole
//    phi = longitude [0,360] with phi = 0 on the x axis, and phi = 90 at positive y
//
//    x = r * sin(theta) * cos(phi)
//    y = r * sin(theta) * sin(phi)
//    z = r * cos(theta)
