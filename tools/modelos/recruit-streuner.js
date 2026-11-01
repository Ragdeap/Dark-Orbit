// Recruit Streuner: variante más agresiva del Streuner. Rojo casi en todo el casco, con alas desplegadas
// y puntas afiladas, y un brillo naranja en la cabina y las toberas.
// Escala: la misma que el Streuner, porque su radio en el juego es de 18 px.
// Morro en +X, Y arriba, Z lateral. Simétrico en Z.

// Cara plana entre cuatro vértices: dos triángulos
const quad = (a, b, c, d, color) => [
  { type: 'tri', v: [a, b, c], color },
  { type: 'tri', v: [a, c, d], color },
];

// Morro: de 8 x 14 en la base (x 14) a 3 x 5 en la punta (x 24)
const nose = [
  ...quad([14, 4, -7], [14, 4, 7], [24, 1.5, 2.5], [24, 1.5, -2.5], '#e0553f'),     // arriba
  ...quad([14, -4, 7], [14, -4, -7], [24, -1.5, -2.5], [24, -1.5, 2.5], '#e0553f'), // abajo
  ...quad([14, -4, 7], [14, 4, 7], [24, 1.5, 2.5], [24, -1.5, 2.5], '#e0553f'),     // lateral +Z
  ...quad([14, 4, -7], [14, -4, -7], [24, -1.5, -2.5], [24, 1.5, -2.5], '#e0553f'), // lateral -Z
];

module.exports = [
  // Casco rojo, 28 x 8 x 14
  { type: 'box', pos: [0, 0, 0], size: [28, 8, 14], color: '#8a2a22' },
  ...nose,
  // Cabina: brillo naranja, en el centro del casco
  { type: 'box', pos: [8, 4.5, 0], size: [8, 2, 5], color: '#ff9f1a' },
  // Franjas claras a los lados del casco
  { type: 'box', pos: [0, 0, 7.5], size: [22, 3, 1], color: '#ff5c5c' },
  { type: 'box', pos: [0, 0, -7.5], size: [22, 3, 1], color: '#ff5c5c' },
  // Alas desplegadas hacia atrás, con el borde rojo y puntas afiladas
  ...quad([8, 0, 7], [-4, 0, 30], [-18, 0, 30], [-10, 0, 7], '#c8412b'),
  ...quad([8, 0, -7], [-10, 0, -7], [-18, 0, -30], [-4, 0, -30], '#c8412b'),
  { type: 'tri', v: [[-4, 0, 30], [-18, 0, 30], [-14, 0, 38]], color: '#ff5c5c' },
  { type: 'tri', v: [[-4, 0, -30], [-14, 0, -38], [-18, 0, -30]], color: '#ff5c5c' },
  // Espina dorsal alta
  { type: 'tri', v: [[4, 4, 0], [-12, 14, 0], [-14, 4, 0]], color: '#e0553f' },
  // Toberas encendidas en la popa
  { type: 'cyl', pos: [-17, 0, 4.5], axis: 'x', len: 6, r: 3, color: '#ff9f1a' },
  { type: 'cyl', pos: [-17, 0, -4.5], axis: 'x', len: 6, r: 3, color: '#ff9f1a' },
];
