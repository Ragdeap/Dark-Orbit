// Boss Lordakia: el mismo diseño que el Lordakia, pero más grande y de un azul más profundo y oscuro.
// Esfera de anillos de latitud con el núcleo algo más claro en el polo superior, y ocho tentáculos radiales
// que se estrechan hacia la punta.
// Escala: su radio en el juego es de 26 px, unas 1,45 veces el del Lordakia. Todas las medidas van por K.
// Morro en +X, Y arriba, Z lateral. Simétrico en Z.

const K = 1.45;

// Cara plana entre cuatro vértices: dos triángulos
const quad = (a, b, c, d, color) => [
  { type: 'tri', v: [a, b, c], color },
  { type: 'tri', v: [a, c, d], color },
];

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const scale = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const unit = a => scale(a, 1 / Math.hypot(a[0], a[1], a[2]));

// Anillo de N puntos alrededor del punto c, de radio r, en el plano perpendicular a la dirección d
const ring = (c, d, r, N) => {
  const u = unit(cross(d, Math.abs(d[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0]));
  const v = cross(d, u);
  return Array.from({ length: N }, (_, i) => {
    const t = i / N * Math.PI * 2;
    return add(c, add(scale(u, r * Math.cos(t)), scale(v, r * Math.sin(t))));
  });
};

// Tubo que se estrecha de r0 (en a) a r1 (en b): una franja de caras entre dos anillos
const tube = (a, b, r0, r1, color, N = 5) => {
  const d = unit(sub(b, a));
  const ra = ring(a, d, r0, N), rb = ring(b, d, r1, N);
  return ra.flatMap((p, i) => {
    const j = (i + 1) % N;
    return quad(p, ra[j], rb[j], rb[i], color);
  });
};

// Esfera: anillos de latitud de radio R. Cada franja entre dos anillos tiene su color, de abajo arriba
const R = 26, N = 16;
const LATS = [-70, -40, -10, 20, 50, 80];
const BAND = ['#0b2a4a', '#133f6b', '#1d5a8c', '#133f6b', '#0f3556'];
const latRing = deg => {
  const f = deg * Math.PI / 180;
  return Array.from({ length: N }, (_, i) => {
    const t = i / N * Math.PI * 2;
    return [R * Math.cos(f) * Math.cos(t), R * Math.sin(f), R * Math.cos(f) * Math.sin(t)];
  });
};
const sphere = () => {
  const rings = LATS.map(latRing);
  const faces = [];
  for (let k = 0; k + 1 < rings.length; k++) {
    const a = rings[k], b = rings[k + 1];
    for (let i = 0; i < N; i++) {
      const j = (i + 1) % N;
      faces.push(...quad(a[i], a[j], b[j], b[i], BAND[k]));
    }
  }
  // Casquetes: el polo superior es el núcleo, algo más claro; el inferior, el más oscuro
  const top = [0, R, 0], bottom = [0, -R, 0];
  const first = rings[0], last = rings[rings.length - 1];
  for (let i = 0; i < N; i++) {
    const j = (i + 1) % N;
    faces.push({ type: 'tri', v: [bottom, first[j], first[i]], color: BAND[0] });
    faces.push({ type: 'tri', v: [top, last[i], last[j]], color: '#2a6fa8' });
  }
  return faces;
};

// Tentáculos: ocho, radiales y ligeramente caídos, de azul profundo con la punta un poco más clara
const TENTACLES = Array.from({ length: 8 }, (_, i) => {
  const t = i / 8 * Math.PI * 2;
  const dir = [Math.cos(t), 0, Math.sin(t)];
  const base = [0, 0, 0];
  const mid = add(base, add(scale(dir, 24 * K), [0, -1 * K, 0]));
  const tip = add(base, add(scale(dir, 44 * K), [0, -3 * K, 0]));
  return [
    ...tube(base, mid, 2.6 * K, 1.8 * K, '#1b4f80'),
    ...tube(mid, tip, 1.8 * K, 0.8 * K, '#3a78b0'),
  ];
});

module.exports = [
  ...sphere(),
  ...TENTACLES.flat(),
];
