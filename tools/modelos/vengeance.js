// Vengeance: caza letal y rápido. Fuselaje largo y estrecho, con cuatro alas en X inspiradas en las alas X.
// Morro en +X, Y arriba, Z lateral. Simétrico en Z.
// Los motores de datos/naves.json (x -42, z ±3) son el extremo trasero de los cilindros de abajo.

// Cara plana entre cuatro vértices: dos triángulos
const quad = (a, b, c, d, color) => [
  { type: 'tri', v: [a, b, c], color },
  { type: 'tri', v: [a, c, d], color },
];

// Morro en aguja: de 6 x 7 en la base (x 32) a casi un punto en la punta (x 46)
const nose = [
  ...quad([32, 3, -3.5], [32, 3, 3.5], [46, 0.8, 0.8], [46, 0.8, -0.8], '#8fa3bf'),     // arriba
  ...quad([32, -3, 3.5], [32, -3, -3.5], [46, -0.8, -0.8], [46, -0.8, 0.8], '#8fa3bf'), // abajo
  ...quad([32, -3, 3.5], [32, 3, 3.5], [46, 0.8, 0.8], [46, -0.8, 0.8], '#8fa3bf'),     // lateral +Z
  ...quad([32, 3, -3.5], [32, -3, -3.5], [46, -0.8, -0.8], [46, 0.8, -0.8], '#8fa3bf'), // lateral -Z
];

// Cuatro alas en X: cada una sale del eje del fuselaje y se abre en diagonal hacia su punta
const wing = (sy, sz) => [
  ...quad([10, 0, 0], [-4, 20 * sy, 20 * sz], [-22, 20 * sy, 20 * sz], [-14, 0, 0], '#2e3d55'),
  // Punta de ala en rojo
  { type: 'box', pos: [-13, 20 * sy, 20 * sz], size: [10, 1.5, 1.5], color: '#c8412b' },
];

module.exports = [
  // Fuselaje largo y estrecho, 64 x 6 x 7
  { type: 'box', pos: [0, 0, 0], size: [64, 6, 7], color: '#3c4f6b' },
  ...nose,
  // Cabina: ranura roja, alargada hacia delante
  { type: 'box', pos: [14, 4, 0], size: [12, 2, 4], color: '#ff5c5c' },
  // Espina dorsal oscura, detrás de la cabina
  { type: 'tri', v: [[-6, 3, 0], [-26, 12, 0], [-30, 3, 0]], color: '#c8412b' },
  ...wing(1, 1), ...wing(1, -1), ...wing(-1, 1), ...wing(-1, -1),
  // Motores: dos cilindros en el eje X, de x -42 a x -32, en la popa
  { type: 'cyl', pos: [-37, 0, 3], axis: 'x', len: 10, r: 3, color: '#d9534f' },
  { type: 'cyl', pos: [-37, 0, -3], axis: 'x', len: 10, r: 3, color: '#d9534f' },
];
