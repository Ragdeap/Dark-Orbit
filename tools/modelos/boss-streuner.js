// Boss Streuner: versión grande del Streuner. Casco gris metálico con placas oscuras y acentos ocre-amarillo
// en las alas y el lomo, como en la referencia. Dos cañones en pods laterales, a proa.
// Escala: su radio en el juego es de 26 px, unas 1,6 veces el del Streuner.
// Morro en +X, Y arriba, Z lateral. Simétrico en Z.

// Cara plana entre cuatro vértices: dos triángulos
const quad = (a, b, c, d, color) => [
  { type: 'tri', v: [a, b, c], color },
  { type: 'tri', v: [a, c, d], color },
];

// Morro afilado: de 10 x 18 en la base (x 22) a 4 x 8 en la punta (x 36)
const nose = [
  ...quad([22, 5, -9], [22, 5, 9], [36, 2, 4], [36, 2, -4], '#5a5a62'),     // arriba
  ...quad([22, -5, 9], [22, -5, -9], [36, -2, -4], [36, -2, 4], '#3e3e45'), // abajo
  ...quad([22, -5, 9], [22, 5, 9], [36, 2, 4], [36, -2, 4], '#4a4a52'),     // lateral +Z
  ...quad([22, 5, -9], [22, -5, -9], [36, -2, -4], [36, 2, -4], '#4a4a52'), // lateral -Z
];

// Ala ancha en flecha: sale del casco y se abre hacia atrás, con la punta en ocre
const wing = sz => [
  ...quad([8, 0, 10 * sz], [-8, 0, 30 * sz], [-20, 0, 30 * sz], [-14, 0, 10 * sz], '#4a4a52'),
  { type: 'box', pos: [-14, 0, 29 * sz], size: [12, 1.5, 2], color: '#b8862b' },
];

module.exports = [
  // Casco gris oscuro, 46 x 10 x 18
  { type: 'box', pos: [0, 0, 0], size: [46, 10, 18], color: '#3b3b41' },
  ...nose,
  // Placa metálica clara sobre el lomo
  { type: 'box', pos: [-2, 6, 0], size: [30, 2, 10], color: '#6d6d75' },
  // Franjas ocre a los costados del casco, el acento amarillo-marrón de la referencia
  { type: 'box', pos: [4, 0, 9.5], size: [30, 3, 1.5], color: '#b8862b' },
  { type: 'box', pos: [4, 0, -9.5], size: [30, 3, 1.5], color: '#b8862b' },
  ...wing(1), ...wing(-1),
  // Pods de cañón a cada lado, en la mitad delantera
  { type: 'box', pos: [-2, -1, 15], size: [30, 6, 6], color: '#4f4f57' },
  { type: 'box', pos: [-2, -1, -15], size: [30, 6, 6], color: '#4f4f57' },
  // Cañones que asoman por delante de cada pod
  { type: 'cyl', pos: [18, -1, 15], axis: 'x', len: 10, r: 1.8, color: '#1e1e22' },
  { type: 'cyl', pos: [18, -1, -15], axis: 'x', len: 10, r: 1.8, color: '#1e1e22' },
  // Aleta dorsal ocre oscuro
  { type: 'tri', v: [[4, 6, 0], [-14, 17, 0], [-18, 6, 0]], color: '#8a6420' },
  // Toberas grandes en la popa
  { type: 'cyl', pos: [-25, 0, 6], axis: 'x', len: 7, r: 3.5, color: '#ff8c42' },
  { type: 'cyl', pos: [-25, 0, -6], axis: 'x', len: 7, r: 3.5, color: '#ff8c42' },
];
