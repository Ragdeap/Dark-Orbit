// Streuner: el alienígena más básico. Nave pequeña y roja, con placas oscuras y dos vainas laterales.
// El rojo es el motivo que lo identifica: domina el casco, las vainas y la espina dorsal.
// Escala: la mitad que una nave del jugador, porque su radio en el juego es de 16 px.
// Morro en +X, Y arriba, Z lateral. Simétrico en Z.

// Cara plana entre cuatro vértices: dos triángulos
const quad = (a, b, c, d, color) => [
  { type: 'tri', v: [a, b, c], color },
  { type: 'tri', v: [a, c, d], color },
];

// Morro: de 8 x 14 en la base (x 14) a 3 x 5 en la punta (x 22)
const nose = [
  ...quad([14, 4, -7], [14, 4, 7], [22, 1.5, 2.5], [22, 1.5, -2.5], '#c8412b'),     // arriba
  ...quad([14, -4, 7], [14, -4, -7], [22, -1.5, -2.5], [22, -1.5, 2.5], '#c8412b'), // abajo
  ...quad([14, -4, 7], [14, 4, 7], [22, 1.5, 2.5], [22, -1.5, 2.5], '#c8412b'),     // lateral +Z
  ...quad([14, 4, -7], [14, -4, -7], [22, -1.5, -2.5], [22, 1.5, -2.5], '#c8412b'), // lateral -Z
];

module.exports = [
  // Casco rojo oscuro, 28 x 8 x 14
  { type: 'box', pos: [0, 0, 0], size: [28, 8, 14], color: '#7a1f1f' },
  ...nose,
  // Placa oscura sobre el casco
  { type: 'box', pos: [-2, 5, 0], size: [16, 2, 8], color: '#2a1a1a' },
  // Vainas rojas a cada lado, la seña de identidad del Streuner
  { type: 'box', pos: [-2, -1, 10], size: [20, 5, 5], color: '#e0553f' },
  { type: 'box', pos: [-2, -1, -10], size: [20, 5, 5], color: '#e0553f' },
  // Alas bajas y oscuras, con el borde rojo
  ...quad([6, 0, 7], [-6, 0, 22], [-14, 0, 22], [-10, 0, 7], '#3a1212'),
  ...quad([6, 0, -7], [-10, 0, -7], [-14, 0, -22], [-6, 0, -22], '#3a1212'),
  // Espina dorsal roja
  { type: 'tri', v: [[2, 4, 0], [-10, 13, 0], [-12, 4, 0]], color: '#e0553f' },
  // Toberas pequeñas en la popa
  { type: 'cyl', pos: [-17, 0, 5], axis: 'x', len: 6, r: 2.5, color: '#ff6b35' },
  { type: 'cyl', pos: [-17, 0, -5], axis: 'x', len: 6, r: 2.5, color: '#ff6b35' },
];
