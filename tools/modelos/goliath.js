// Goliath: la nave gorda. Una media luna de metal que abraza la proa y lleva muchos cañones láser en su borde.
// Casco largo y macizo detrás de la media luna. Morro en +X, Y arriba, Z lateral. Simétrico en Z.
// Los motores de datos/naves.json (x -52, z ±6) son el extremo trasero de los cilindros de abajo.

const R_OUT = 40, R_IN = 32, N = 14, ARC = 80 * Math.PI / 180;
const angle = i => -ARC + 2 * ARC * i / N;
const at = (r, t, dy) => [r * Math.cos(t), dy, r * Math.sin(t)];

// Cara plana entre cuatro vértices: dos triángulos
const quad = (a, b, c, d, color) => [
  { type: 'tri', v: [a, b, c], color },
  { type: 'tri', v: [a, c, d], color },
];

// Media luna: dos caras (arriba y abajo) y los dos bordes, en tramos de la misma curva
const crescent = [];
for (let k = 0; k < N; k++) {
  const t0 = angle(k), t1 = angle(k + 1);
  crescent.push(...quad(at(R_OUT, t0, 1.5), at(R_OUT, t1, 1.5), at(R_IN, t1, 1.5), at(R_IN, t0, 1.5), '#3c4f6b'));
  crescent.push(...quad(at(R_OUT, t0, -1.5), at(R_IN, t0, -1.5), at(R_IN, t1, -1.5), at(R_OUT, t1, -1.5), '#2a3446'));
  // Borde exterior plateado, para el filo
  crescent.push(...quad(at(R_OUT, t0, 1.5), at(R_OUT, t1, 1.5), at(R_OUT, t1, -1.5), at(R_OUT, t0, -1.5), '#8fa3bf'));
  // Borde interior oscuro
  crescent.push(...quad(at(R_IN, t0, 1.5), at(R_IN, t0, -1.5), at(R_IN, t1, -1.5), at(R_IN, t1, 1.5), '#2a3446'));
}

// Cañones láser: uno cada dos tramos, sobre el borde exterior
const cannons = [];
for (let k = 0; k < N; k += 2) {
  const tm = (angle(k) + angle(k + 1)) / 2;
  const [x, , z] = at(R_OUT + 2, tm, 0);
  cannons.push({ type: 'box', pos: [x, 1.5, z], size: [4, 2, 2], color: '#5ad1ff' });
}

module.exports = [
  // Casco largo y macizo, detrás de la media luna
  { type: 'box', pos: [-10, 0, 0], size: [60, 10, 16], color: '#3c4f6b' },
  // Cabina: ranura roja sobre el casco, bajo la media luna
  { type: 'box', pos: [10, 6, 0], size: [14, 2, 6], color: '#ff5c5c' },
  // Cresta dorsal: espina alta y afilada
  { type: 'tri', v: [[-10, 5, 0], [-30, 18, 0], [-34, 5, 0]], color: '#c8412b' },
  ...crescent,
  ...cannons,
  // Motores: dos cilindros en el eje X, de x -52 a x -40, a cada lado de la popa
  { type: 'cyl', pos: [-46, 0, 6], axis: 'x', len: 12, r: 4.5, color: '#d9534f' },
  { type: 'cyl', pos: [-46, 0, -6], axis: 'x', len: 12, r: 4.5, color: '#d9534f' },
];
