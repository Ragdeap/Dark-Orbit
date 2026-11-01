// Leonov: la nave más fuerte de los mapas bajos. Amenazante: casco oscuro y macizo, con líneas afiladas
// (morro en aguja, alas en punta, aletas y cresta dorsal). Menos alargada que la Piranha.
// Morro en +X, Y arriba, Z lateral. Simétrico en Z.
// Los motores de datos/naves.json (x -39, z ±5) son el extremo trasero de los cilindros de abajo.

// Cara plana entre cuatro vértices: dos triángulos
const quad = (a, b, c, d, color) => [
  { type: 'tri', v: [a, b, c], color },
  { type: 'tri', v: [a, c, d], color },
];

// Morro en aguja: de 6 x 18 en la base (x 28) a casi un punto en la punta (x 44)
const nose = [
  ...quad([28, 3, -9], [28, 3, 9], [44, 0.8, 1.2], [44, 0.8, -1.2], '#8fa3bf'),     // arriba
  ...quad([28, -3, 9], [28, -3, -9], [44, -0.8, -1.2], [44, -0.8, 1.2], '#8fa3bf'), // abajo
  ...quad([28, -3, 9], [28, 3, 9], [44, 0.8, 1.2], [44, -0.8, 1.2], '#8fa3bf'),     // lateral +Z
  ...quad([28, 3, -9], [28, -3, -9], [44, -0.8, -1.2], [44, 0.8, -1.2], '#8fa3bf'), // lateral -Z
];

module.exports = [
  // Casco macizo y oscuro: 56 x 6 x 18
  { type: 'box', pos: [0, 0, 0], size: [56, 6, 18], color: '#2a3446' },
  ...nose,
  // Cabina: ranura roja y estrecha, en la parte delantera del casco
  { type: 'box', pos: [18, 4, 0], size: [12, 2, 4], color: '#ff5c5c' },
  // Alas afiladas que se abren hacia atrás, con puntas en espina
  ...quad([18, 3, 9], [-4, 3, 30], [-30, 3, 30], [-22, 3, 9], '#3c4f6b'),
  ...quad([18, 3, -9], [-22, 3, -9], [-30, 3, -30], [-4, 3, -30], '#3c4f6b'),
  { type: 'tri', v: [[-30, 3, 30], [-22, 3, 9], [-40, 3, 26]], color: '#c8412b' },
  { type: 'tri', v: [[-30, 3, -30], [-40, 3, -26], [-22, 3, -9]], color: '#c8412b' },
  // Hojas delanteras: dos aletas finas que salen del morro hacia fuera
  { type: 'tri', v: [[8, 1, 9], [38, 1, 22], [22, 1, 9]], color: '#3c4f6b' },
  { type: 'tri', v: [[8, 1, -9], [22, 1, -9], [38, 1, -22]], color: '#3c4f6b' },
  // Cresta dorsal: espina alta y afilada, con dos más pequeñas a los lados
  { type: 'tri', v: [[8, 3, 0], [-16, 17, 0], [-22, 3, 0]], color: '#c8412b' },
  { type: 'tri', v: [[8, 3, 4], [-12, 10, 6], [-22, 3, 4]], color: '#c8412b' },
  { type: 'tri', v: [[8, 3, -4], [-22, 3, -4], [-12, 10, -6]], color: '#c8412b' },
  // Motores: dos cilindros en el eje X, de x -39 a x -29, a cada lado de la popa
  { type: 'cyl', pos: [-34, 0, 5], axis: 'x', len: 10, r: 4, color: '#d9534f' },
  { type: 'cyl', pos: [-34, 0, -5], axis: 'x', len: 10, r: 4, color: '#d9534f' },
];
