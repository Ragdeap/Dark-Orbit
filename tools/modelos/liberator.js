// Liberator: nave de soporte básica. Más sólida que la Phoenix, pero no agresiva: casco ancho y rectangular,
// morro romo y alas cortas y anchas. Morro en +X, Y arriba, Z lateral. Simétrico en Z.
// Los motores de datos/naves.json (x -28, z ±5) son el extremo trasero de los cilindros de abajo.

// Cara plana entre cuatro vértices: dos triángulos
const quad = (a, b, c, d, color) => [
  { type: 'tri', v: [a, b, c], color },
  { type: 'tri', v: [a, c, d], color },
];

// Morro romo: de 9 x 22 en la base (x 20) a 5 x 12 en el frente (x 30)
const nose = [
  ...quad([20, 4.5, -11], [20, 4.5, 11], [30, 2.5, 6], [30, 2.5, -6], '#8fa3bf'),     // arriba
  ...quad([20, -4.5, 11], [20, -4.5, -11], [30, -2.5, -6], [30, -2.5, 6], '#8fa3bf'), // abajo
  ...quad([20, -4.5, 11], [20, 4.5, 11], [30, 2.5, 6], [30, -2.5, 6], '#8fa3bf'),     // lateral +Z
  ...quad([20, 4.5, -11], [20, -4.5, -11], [30, -2.5, -6], [30, 2.5, -6], '#8fa3bf'), // lateral -Z
  ...quad([30, 2.5, 6], [30, -2.5, 6], [30, -2.5, -6], [30, 2.5, -6], '#8fa3bf'),     // frente
];

module.exports = [
  // Casco: ancho y bajo, 40 x 9 x 22
  { type: 'box', pos: [0, 0, 0], size: [40, 9, 22], color: '#3c4f6b' },
  ...nose,
  // Cabina: cúpula ancha sobre el morro
  { type: 'box', pos: [14, 5.5, 0], size: [10, 2, 8], color: '#5ad1ff' },
  // Franjas claras a los lados del casco
  { type: 'box', pos: [0, 0, 11.5], size: [30, 4, 1], color: '#8fa3bf' },
  { type: 'box', pos: [0, 0, -11.5], size: [30, 4, 1], color: '#8fa3bf' },
  // Alas cortas y anchas, con el borde de salida recto
  ...quad([12, 4.5, 11], [-6, 4.5, 34], [-22, 4.5, 34], [-20, 4.5, 11], '#2e3d55'),
  ...quad([12, 4.5, -11], [-20, 4.5, -11], [-22, 4.5, -34], [-6, 4.5, -34], '#2e3d55'),
  // Puntas de ala en rojo
  { type: 'box', pos: [-14, 4.5, 34], size: [12, 1, 2], color: '#c8412b' },
  { type: 'box', pos: [-14, 4.5, -34], size: [12, 1, 2], color: '#c8412b' },
  // Aleta dorsal baja
  { type: 'tri', v: [[4, 4.5, 0], [-14, 12, 0], [-14, 4.5, 0]], color: '#c8412b' },
  // Motores: dos cilindros en el eje X, de x -28 a x -20, a cada lado de la popa
  { type: 'cyl', pos: [-24, 0, 5], axis: 'x', len: 8, r: 3.5, color: '#d9534f' },
  { type: 'cyl', pos: [-24, 0, -5], axis: 'x', len: 8, r: 3.5, color: '#d9534f' },
];
