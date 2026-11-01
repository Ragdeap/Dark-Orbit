// Piranha: caza alargado, agresivo, plano y muy aerodinámico. Alas en flecha muy atrasadas y puntas afiladas.
// Morro en +X, Y arriba, Z lateral. Simétrico en Z.
// Los motores de datos/naves.json (x -38, z ±3) son el extremo trasero de los cilindros de abajo.

// Cara plana entre cuatro vértices: dos triángulos
const quad = (a, b, c, d, color) => [
  { type: 'tri', v: [a, b, c], color },
  { type: 'tri', v: [a, c, d], color },
];

// Morro: aguja de sección cuadrada, de 6 x 8 en la base (x 30) a casi un punto en la punta (x 48)
const nose = [
  ...quad([30, 3, -4], [30, 3, 4], [48, 0.8, 0.8], [48, 0.8, -0.8], '#8fa3bf'),     // arriba
  ...quad([30, -3, 4], [30, -3, -4], [48, -0.8, -0.8], [48, -0.8, 0.8], '#8fa3bf'), // abajo
  ...quad([30, -3, 4], [30, 3, 4], [48, 0.8, 0.8], [48, -0.8, 0.8], '#8fa3bf'),     // lateral +Z
  ...quad([30, 3, -4], [30, -3, -4], [48, -0.8, -0.8], [48, 0.8, -0.8], '#8fa3bf'), // lateral -Z
];

module.exports = [
  // Fuselaje: plano y largo, 60 x 6 x 8
  { type: 'box', pos: [0, 0, 0], size: [60, 6, 8], color: '#3c4f6b' },
  ...nose,
  // Cabina: cúpula plana y estrecha, detrás del morro
  { type: 'box', pos: [16, 4, 0], size: [12, 2, 4], color: '#5ad1ff' },
  // Alas en flecha muy atrasada, una a cada lado, casi en el plano del fuselaje
  ...quad([22, 1.5, 4], [-22, 1.5, 32], [-30, 1.5, 4], [-6, 1.5, 4], '#2e3d55'),
  ...quad([22, 1.5, -4], [-6, 1.5, -4], [-30, 1.5, -4], [-22, 1.5, -32], '#2e3d55'),
  // Puntas de ala en rojo
  { type: 'tri', v: [[-22, 1.5, 32], [-30, 1.5, 4], [-26, 1.5, 28]], color: '#c8412b' },
  { type: 'tri', v: [[-22, 1.5, -32], [-26, 1.5, -28], [-30, 1.5, -4]], color: '#c8412b' },
  // Estabilizadores verticales gemelos, inclinados hacia fuera
  ...quad([-8, 3, 6], [-26, 13, 13], [-32, 3, 8], [-18, 3, 6], '#2e3d55'),
  ...quad([-8, 3, -6], [-18, 3, -6], [-32, 3, -8], [-26, 13, -13], '#2e3d55'),
  // Motores: dos cilindros en el eje X, de x -38 a x -30, a cada lado de la popa
  { type: 'cyl', pos: [-34, 0, 3], axis: 'x', len: 8, r: 2.5, color: '#d9534f' },
  { type: 'cyl', pos: [-34, 0, -3], axis: 'x', len: 8, r: 2.5, color: '#d9534f' },
];
