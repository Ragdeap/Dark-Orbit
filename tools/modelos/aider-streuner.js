// Aider Streuner: asistente gris y compacto, pero alto. Casco de metal oscuro, un bloque dorsal alto,
// acentos naranjas a los lados y una baliza verde, el color de su rayo de curación.
// Escala: la misma que el Streuner, porque su radio en el juego es de 15 px.
// Morro en +X, Y arriba, Z lateral. Simétrico en Z.

// Cara plana entre cuatro vértices: dos triángulos
const quad = (a, b, c, d, color) => [
  { type: 'tri', v: [a, b, c], color },
  { type: 'tri', v: [a, c, d], color },
];

// Morro: de 14 x 16 en la base (x 11) a 8 x 8 en el frente (x 18)
const nose = [
  ...quad([11, 7, -8], [11, 7, 8], [18, 4, 4], [18, 4, -4], '#5c6474'),     // arriba
  ...quad([11, -7, 8], [11, -7, -8], [18, -4, -4], [18, -4, 4], '#5c6474'), // abajo
  ...quad([11, -7, 8], [11, 7, 8], [18, 4, 4], [18, -4, 4], '#5c6474'),     // lateral +Z
  ...quad([11, 7, -8], [11, -7, -8], [18, -4, -4], [18, 4, -4], '#5c6474'), // lateral -Z
];

module.exports = [
  // Casco gris, 22 x 14 x 16
  { type: 'box', pos: [0, 0, 0], size: [22, 14, 16], color: '#4a5160' },
  ...nose,
  // Bloque dorsal alto: da la sensación de altura
  { type: 'box', pos: [-2, 12, 0], size: [14, 8, 12], color: '#3a3f4a' },
  // Baliza verde sobre el bloque dorsal
  { type: 'box', pos: [4, 17, 0], size: [3, 2, 3], color: '#6fd3a0' },
  // Acentos naranjas a los lados del casco
  { type: 'box', pos: [0, 0, 8.5], size: [14, 3, 1], color: '#ff9f1a' },
  { type: 'box', pos: [0, 0, -8.5], size: [14, 3, 1], color: '#ff9f1a' },
  // Vainas laterales, grises y bajas
  { type: 'box', pos: [-2, -2, 11], size: [16, 6, 4], color: '#3a3f4a' },
  { type: 'box', pos: [-2, -2, -11], size: [16, 6, 4], color: '#3a3f4a' },
  // Alas cortas
  ...quad([4, 0, 8], [-4, 0, 18], [-12, 0, 18], [-8, 0, 8], '#3a3f4a'),
  ...quad([4, 0, -8], [-8, 0, -8], [-12, 0, -18], [-4, 0, -18], '#3a3f4a'),
  // Toberas naranjas en la popa
  { type: 'cyl', pos: [-16, 0, 4], axis: 'x', len: 4, r: 3, color: '#ff9f1a' },
  { type: 'cyl', pos: [-16, 0, -4], axis: 'x', len: 4, r: 3, color: '#ff9f1a' },
];
