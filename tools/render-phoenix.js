// Genera los 32 frames 2,5D de la nave Phoenix a partir de primitivas geométricas.
// Uso: node tools/render-phoenix.js [--tilt 35] [--out sprites/naves/phoenix]
// Cámara ortográfica con inclinación hacia el suelo, luz fija desde arriba-izquierda y z-buffer.
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const ROOT = path.join(__dirname, '..');

// Lienzo y pivote (centro de giro) medidos desde la esquina superior izquierda
const W = 176, H = 128;
const PIVOT_X = 88, PIVOT_Y = 49.5;
const FRAMES = 32, STEP = 360 / FRAMES;   // 11,25° por frame
const SS = 4;                              // muestras por píxel y eje (antialias)

function arg(name, def) {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : def;
}
const TILT_DEG = Number(arg('--tilt', 35));
const TILT = TILT_DEG * Math.PI / 180;
const OUT = path.join(ROOT, arg('--out', 'sprites/naves/phoenix'));

// Base de la cámara: R = derecha en pantalla, U = arriba en pantalla, C = hacia la cámara
const CE = Math.cos(TILT), SE = Math.sin(TILT);
const R = [1, 0, 0];
const U = [0, CE, SE];
const C = [0, SE, -CE];

const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = a => { const l = Math.hypot(a[0], a[1], a[2]); return [a[0] / l, a[1] / l, a[2] / l]; };
const hexRgb = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
const AX = { x: 0, y: 1, z: 2 };

// Luz fija desde arriba-izquierda, la misma para todos los frames
const LIGHT = norm([0, 1, 2].map(i => -0.6 * R[i] + 0.8 * U[i] + 0.3 * C[i]));

// Modelo: primitivas en unidades de mundo. Morro en +X, Y arriba, Z lateral. Simétrico en Z.
const MODEL = [
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

function boxFaces(p, s, color) {
  const h = s.map(v => v / 2);
  const faces = [];
  for (let a = 0; a < 3; a++) {
    const b = (a + 1) % 3, c = (a + 2) % 3;
    for (const sg of [-1, 1]) {
      const corner = (u, v) => {
        const q = [0, 0, 0];
        q[a] = p[a] + sg * h[a];
        q[b] = p[b] + u * h[b];
        q[c] = p[c] + v * h[c];
        return q;
      };
      faces.push({ verts: [corner(-1, -1), corner(1, -1), corner(1, 1), corner(-1, 1)], color });
    }
  }
  return faces;
}

function cylFaces(p, axis, r, len, color) {
  const a = AX[axis], b = (a + 1) % 3, c = (a + 2) % 3, N = 12, half = len / 2;
  const ring = (s, i) => {
    const t = (i % N) / N * Math.PI * 2;
    const q = [0, 0, 0];
    q[a] = p[a] + s * half;
    q[b] = p[b] + r * Math.cos(t);
    q[c] = p[c] + r * Math.sin(t);
    return q;
  };
  const faces = [];
  for (let i = 0; i < N; i++) faces.push({ verts: [ring(-1, i), ring(-1, i + 1), ring(1, i + 1), ring(1, i)], color });
  faces.push({ verts: Array.from({ length: N }, (_, i) => ring(-1, i)), color });
  faces.push({ verts: Array.from({ length: N }, (_, i) => ring(1, i)), color });
  return faces;
}

function primitiveFaces(p) {
  if (p.type === 'tri') return [{ verts: p.v, color: p.color }];
  if (p.type === 'box') return boxFaces(p.pos, p.size, p.color);
  if (p.type === 'cyl') return cylFaces(p.pos, p.axis, p.r, p.len, p.color);
  throw new Error('primitiva desconocida: ' + p.type);
}

// Gira la nave alrededor del eje vertical que pasa por el pivote. El morro (+X local) apunta a phi
function toWorld(p, phi) {
  const cp = Math.cos(phi), sp = Math.sin(phi);
  return [p[0] * cp - p[2] * sp, p[1], p[0] * sp + p[2] * cp];
}

// Ortográfica: pantalla = (P·R, P·U); P·C es la profundidad hacia la cámara
const project = P => ({ sx: dot(P, R), sy: dot(P, U), w: dot(P, C) });

function renderFrame(phi) {
  const faces = MODEL.flatMap(primitiveFaces).map(f => {
    const verts = f.verts.map(v => toWorld(v, phi));
    let n = norm(cross(sub(verts[1], verts[0]), sub(verts[2], verts[0])));
    // Caras de dos lados: se ilumina la que mira a la cámara
    if (dot(n, C) < 0) n = n.map(v => -v);
    const k = 0.45 + 0.55 * Math.max(0, dot(n, LIGHT));
    return {
      verts, n,
      d: dot(n, verts[0]),
      nu: dot(n, U),
      nc: dot(n, C),
      rgb: hexRgb(f.color).map(c => c * k),
    };
  }).filter(f => Math.abs(f.nc) > 1e-6);

  const BW = W * SS, BH = H * SS;
  const zbuf = new Float64Array(BW * BH).fill(-Infinity);
  const colBuf = new Float32Array(BW * BH * 3);

  for (const f of faces) {
    const pts = f.verts.map(P => {
      const p = project(P);
      return { x: PIVOT_X + p.sx, y: PIVOT_Y - p.sy };
    });
    // Polígonos convexos: el punto está dentro si queda al mismo lado de todas las aristas
    let area = 0;
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i], b = pts[(i + 1) % pts.length];
      area += a.x * b.y - b.x * a.y;
    }
    const sgn = Math.sign(area);
    if (!sgn) continue;
    const minX = Math.max(0, Math.floor(Math.min(...pts.map(p => p.x)) * SS));
    const maxX = Math.min(BW - 1, Math.ceil(Math.max(...pts.map(p => p.x)) * SS));
    const minY = Math.max(0, Math.floor(Math.min(...pts.map(p => p.y)) * SS));
    const maxY = Math.min(BH - 1, Math.ceil(Math.max(...pts.map(p => p.y)) * SS));

    for (let j = minY; j <= maxY; j++) {
      for (let i = minX; i <= maxX; i++) {
        const x = (i + 0.5) / SS, y = (j + 0.5) / SS;
        let inside = true;
        for (let e = 0; e < pts.length && inside; e++) {
          const a = pts[e], b = pts[(e + 1) % pts.length];
          const cr = (b.x - a.x) * (y - a.y) - (b.y - a.y) * (x - a.x);
          if (cr * sgn < 0) inside = false;
        }
        if (!inside) continue;
        // Profundidad de la cara en este píxel: resuelve P = sx·R + sy·U + w·C sobre el plano de la cara
        const sx = x - PIVOT_X, sy = PIVOT_Y - y;
        const w = (f.d - f.n[0] * sx - f.nu * sy) / f.nc;
        const idx = j * BW + i;
        if (w > zbuf[idx]) {
          zbuf[idx] = w;
          colBuf[idx * 3] = f.rgb[0];
          colBuf[idx * 3 + 1] = f.rgb[1];
          colBuf[idx * 3 + 2] = f.rgb[2];
        }
      }
    }
  }

  // Reducción a 1x: color medio de las muestras cubiertas y alfa por cobertura
  const out = Buffer.alloc(W * H * 4);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      let r = 0, g = 0, b = 0, cnt = 0;
      for (let j = 0; j < SS; j++) {
        for (let i = 0; i < SS; i++) {
          const idx = (y * SS + j) * BW + (x * SS + i);
          if (zbuf[idx] === -Infinity) continue;
          r += colBuf[idx * 3]; g += colBuf[idx * 3 + 1]; b += colBuf[idx * 3 + 2];
          cnt++;
        }
      }
      if (!cnt) continue;
      const o = (y * W + x) * 4;
      out[o] = Math.round(r / cnt);
      out[o + 1] = Math.round(g / cnt);
      out[o + 2] = Math.round(b / cnt);
      out[o + 3] = Math.round(255 * cnt / (SS * SS));
    }
  }
  return out;
}

// PNG RGBA de 8 bits, sin dependencias externas
const CRC_TABLE = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
function crc32(buf) {
  let c = 0xffffffff;
  for (const byte of buf) c = CRC_TABLE[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function pngChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}
function encodePNG(rgba) {
  const stride = W * 4;
  const raw = Buffer.alloc((stride + 1) * H);   // el byte de filtro de cada fila queda a 0
  for (let y = 0; y < H; y++) rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(W, 0);
  ihdr.writeUInt32BE(H, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    pngChunk('IHDR', ihdr),
    pngChunk('IDAT', zlib.deflateSync(raw)),
    pngChunk('IEND', Buffer.alloc(0)),
  ]);
}

// ---------- Generación ----------
fs.mkdirSync(OUT, { recursive: true });
const frames = [];
const report = [];
for (let k = 0; k < FRAMES; k++) {
  const angle = k * STEP;
  // Frame 000: morro a la izquierda. Cada frame siguiente gira en sentido horario en pantalla
  const phi = (180 - angle) * Math.PI / 180;
  const rgba = renderFrame(phi);
  const file = `frame_${String(k).padStart(3, '0')}.png`;
  fs.writeFileSync(path.join(OUT, file), encodePNG(rgba));
  frames.push({ file, index: k, angleDeg: angle });

  // Comprobación: píxeles ocupados dentro del lienzo, con margen
  let minX = W, maxX = -1, minY = H, maxY = -1;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (rgba[(y * W + x) * 4 + 3] === 0) continue;
      minX = Math.min(minX, x); maxX = Math.max(maxX, x);
      minY = Math.min(minY, y); maxY = Math.max(maxY, y);
    }
  }
  report.push({ file, bbox: [minX, minY, maxX, maxY] });
}

// Comprobación de tamaño y pivote
const problems = [];
for (const f of frames) {
  const buf = fs.readFileSync(path.join(OUT, f.file));
  const w = buf.readUInt32BE(16), h = buf.readUInt32BE(20);
  if (w !== W || h !== H) problems.push(`${f.file}: tamaño ${w}x${h}`);
}
// El eje de giro es el origen del mundo: su proyección debe caer en el pivote en cualquier frame
for (let k = 0; k < FRAMES; k++) {
  const phi = (180 - k * STEP) * Math.PI / 180;
  const o = project(toWorld([0, 0, 0], phi));
  const px = PIVOT_X + o.sx, py = PIVOT_Y - o.sy;
  if (Math.abs(px - PIVOT_X) > 1e-9 || Math.abs(py - PIVOT_Y) > 1e-9) problems.push(`frame ${k}: pivote en ${px},${py}`);
}
for (const r of report) {
  const [x0, y0, x1, y1] = r.bbox;
  if (x0 < 2 || y0 < 2 || x1 > W - 3 || y1 > H - 3) problems.push(`${r.file}: la nave toca el borde (${r.bbox})`);
}

fs.writeFileSync(path.join(OUT, 'frames.json'), JSON.stringify({
  canvas: { width: W, height: H },
  pivot: { x: PIVOT_X, y: PIVOT_Y },
  unitsPerPixel: 1,
  tiltDeg: TILT_DEG,
  frameCount: FRAMES,
  frames,
}, null, 2) + '\n');

console.log(`Frames: ${frames.length} en ${path.relative(ROOT, OUT)}`);
console.log(problems.length ? 'PROBLEMAS:\n  ' + problems.join('\n  ') : 'Comprobaciones: tamaño ' + W + 'x' + H + ' en todos los frames, pivote fijo, nave dentro del lienzo.');
