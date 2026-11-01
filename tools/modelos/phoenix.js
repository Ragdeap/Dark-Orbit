// Phoenix: nave de entrenamiento y tutorial. Cápsula de sección cuadrada, compacta, sin curvas.
// Morro en +X, Y arriba, Z lateral. Simétrico en Z.
// El motor de datos/naves.json (x -40, z 0) es el extremo trasero del cilindro de abajo.

// Cara plana entre dos aristas: dos triángulos
const quad = (a, b, c, d, color) => [
  { type: 'tri', v: [a, b, c], color },
  { type: 'tri', v: [a, c, d], color },
];

// Morro: tronco de pirámide cuadrada, de 22 x 22 en la base (x 26) a 8 x 8 en la punta (x 38)
const nose = [
  ...quad([26, 11, -11], [26, 11, 11], [38, 4, 4], [38, 4, -4], '#ffd166'),     // arriba
  ...quad([26, -11, 11], [26, -11, -11], [38, -4, -4], [38, -4, 4], '#ffd166'), // abajo
  ...quad([26, -11, 11], [26, 11, 11], [38, 4, 4], [38, -4, 4], '#ffd166'),     // lateral +Z
  ...quad([26, 11, -11], [26, -11, -11], [38, -4, -4], [38, 4, -4], '#ffd166'), // lateral -Z
  ...quad([38, 4, 4], [38, -4, 4], [38, -4, -4], [38, 4, -4], '#ffd166'),       // punta
];

module.exports = [
  // Cuerpo: cápsula de sección cuadrada, 52 x 22 x 22
  { type: 'box', pos: [0, 0, 0], size: [52, 22, 22], color: '#8fa3bf' },
  ...nose,
  // Cabina: placa plana sobre el cuerpo, delante
  { type: 'box', pos: [12, 12, 0], size: [14, 2, 10], color: '#5ad1ff' },
  // Franjas rojas a los lados del cuerpo
  { type: 'box', pos: [0, 0, 11.5], size: [40, 6, 1], color: '#c8412b' },
  { type: 'box', pos: [0, 0, -11.5], size: [40, 6, 1], color: '#c8412b' },
  // Alas cortas y planas, una a cada lado, en la parte trasera
  { type: 'box', pos: [-8, 0, 16], size: [20, 2, 10], color: '#3c4f6b' },
  { type: 'box', pos: [-8, 0, -16], size: [20, 2, 10], color: '#3c4f6b' },
  // Puntas de ala en rojo
  { type: 'box', pos: [-17, 0, 16], size: [3, 2, 10], color: '#c8412b' },
  { type: 'box', pos: [-17, 0, -16], size: [3, 2, 10], color: '#c8412b' },
  // Aleta de cola
  { type: 'tri', v: [[-16, 11, 0], [-26, 22, 0], [-26, 11, 0]], color: '#c8412b' },
  // Tubo de escape: cilindro en el eje X, de x -40 a x -26, centrado en la cola
  { type: 'cyl', pos: [-33, 0, 0], axis: 'x', len: 14, r: 6, color: '#d9534f' },
];
