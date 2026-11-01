// Bigboy: mini acorazado. Compacto, ancho y macizo, con placas blindadas y cañones delanteros.
// Aguanta golpes más que ataca: casco grande y bajo, torreta alta y cañones cortos.
// Morro en +X, Y arriba, Z lateral. Simétrico en Z.
// Los motores de datos/naves.json (x -40, z ±8) son el extremo trasero de los cilindros de abajo.

// Cara plana entre cuatro vértices: dos triángulos
const quad = (a, b, c, d, color) => [
  { type: 'tri', v: [a, b, c], color },
  { type: 'tri', v: [a, c, d], color },
];

// Proa roma y blindada: de 14 x 30 en la base (x 28) a 8 x 20 en el frente (x 38)
const bow = [
  ...quad([28, 7, -15], [28, 7, 15], [38, 4, 10], [38, 4, -10], '#2e3d55'),     // arriba
  ...quad([28, -7, 15], [28, -7, -15], [38, -4, -10], [38, -4, 10], '#2e3d55'), // abajo
  ...quad([28, -7, 15], [28, 7, 15], [38, 4, 10], [38, -4, 10], '#2e3d55'),     // lateral +Z
  ...quad([28, 7, -15], [28, -7, -15], [38, -4, -10], [38, 4, -10], '#2e3d55'), // lateral -Z
];

module.exports = [
  // Casco principal: ancho y macizo, 56 x 14 x 30
  { type: 'box', pos: [0, 0, 0], size: [56, 14, 30], color: '#3c4f6b' },
  ...bow,
  // Torreta de mando: bloque alto en el centro del casco
  { type: 'box', pos: [-4, 11, 0], size: [24, 8, 14], color: '#2e3d55' },
  // Visor de la torreta, delante
  { type: 'box', pos: [10, 11, 0], size: [4, 3, 10], color: '#5ad1ff' },
  // Placas blindadas laterales, más oscuras que el casco
  { type: 'box', pos: [0, -2, 16], size: [40, 8, 2], color: '#2a3446' },
  { type: 'box', pos: [0, -2, -16], size: [40, 8, 2], color: '#2a3446' },
  // Banda roja sobre el casco, a lo largo
  { type: 'box', pos: [4, 7.3, 0], size: [36, 0.6, 3], color: '#c8412b' },
  // Cañones delanteros: un bloque y su cañón a cada lado de la proa
  { type: 'box', pos: [30, 0, 19], size: [10, 4, 4], color: '#8fa3bf' },
  { type: 'box', pos: [30, 0, -19], size: [10, 4, 4], color: '#8fa3bf' },
  { type: 'box', pos: [40, 0, 19], size: [8, 1.5, 1.5], color: '#5ad1ff' },
  { type: 'box', pos: [40, 0, -19], size: [8, 1.5, 1.5], color: '#5ad1ff' },
  // Bloque inferior de popa, como un contrapeso
  { type: 'box', pos: [-6, -9, 0], size: [26, 4, 14], color: '#2a3446' },
  // Motores: dos cilindros en el eje X, de x -40 a x -28, a cada lado de la popa
  { type: 'cyl', pos: [-34, 0, 8], axis: 'x', len: 12, r: 5, color: '#d9534f' },
  { type: 'cyl', pos: [-34, 0, -8], axis: 'x', len: 12, r: 5, color: '#d9534f' },
];
