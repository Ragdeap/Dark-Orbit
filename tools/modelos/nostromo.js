// Nostromo: modelo con el que se generaron los frames de sprites/naves/nostromo (antes eran los de la Phoenix).
// Morro en +X, Y arriba, Z lateral. Simétrico en Z.
module.exports = [
  // Fuselaje
  { type: 'box', pos: [-4, 0, 0], size: [48, 8, 10], color: '#8fa3bf' },
  // Morro: pirámide de cuatro triángulos
  { type: 'tri', v: [[34, 0, 0], [20, -4, -5], [20, 4, -5]], color: '#ffd166' },
  { type: 'tri', v: [[34, 0, 0], [20, 4, -5], [20, 4, 5]], color: '#ffd166' },
  { type: 'tri', v: [[34, 0, 0], [20, 4, 5], [20, -4, 5]], color: '#ffd166' },
  { type: 'tri', v: [[34, 0, 0], [20, -4, 5], [20, -4, -5]], color: '#ffd166' },
  // Cabina
  { type: 'box', pos: [6, 6, 0], size: [14, 4, 6], color: '#5ad1ff' },
  // Alas en flecha: placas finas, una a cada lado
  { type: 'tri', v: [[8, 1, 5], [-16, 1, 34], [-24, 1, 5]], color: '#3c4f6b' },
  { type: 'tri', v: [[8, -1, 5], [-24, -1, 5], [-16, -1, 34]], color: '#3c4f6b' },
  { type: 'tri', v: [[8, 1, -5], [-24, 1, -5], [-16, 1, -34]], color: '#3c4f6b' },
  { type: 'tri', v: [[8, -1, -5], [-16, -1, -34], [-24, -1, -5]], color: '#3c4f6b' },
  // Puntas de ala en rojo
  { type: 'box', pos: [-16, 1, 34], size: [6, 2, 3], color: '#c8412b' },
  { type: 'box', pos: [-16, 1, -34], size: [6, 2, 3], color: '#c8412b' },
  // Aleta de cola
  { type: 'tri', v: [[-18, 4, 0], [-32, 13, 0], [-26, 4, 0]], color: '#c8412b' },
  // Motores: cilindros en el eje X, a cada lado de la cola
  { type: 'cyl', pos: [-34, 0, 9], axis: 'x', len: 14, r: 3.5, color: '#d9534f' },
  { type: 'cyl', pos: [-34, 0, -9], axis: 'x', len: 14, r: 3.5, color: '#d9534f' },
];
