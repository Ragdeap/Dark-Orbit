// Servidor local de Dark Orbit: sirve el juego y guarda la partida en data/save.json.
// Sólo escucha en 127.0.0.1, así que únicamente se puede entrar desde este equipo.
// Uso: node server.js            (abre el navegador)
//      node server.js --no-open  (no lo abre)
const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const HOST = '127.0.0.1';
const PORT = 3000;
const ROOT = __dirname;
const GAME = path.join(ROOT, 'dark-orbit.html');
const RANKS_DIR = path.join(ROOT, 'rangos');
const COMPANIES_DIR = path.join(ROOT, 'empresas');
const SOUNDS_DIR = path.join(ROOT, 'sonidos');
const DATA_DIR = path.join(ROOT, 'data');
const SAVE_FILE = path.join(DATA_DIR, 'save.json');
const MAX_BODY = 1024 * 1024;

// Sólo se sirven el juego, los iconos de rango, los logos de empresa y los sonidos; nada más del proyecto
function staticFile(pathname) {
  if (pathname === '/') return GAME;
  const file = path.normalize(path.join(ROOT, decodeURIComponent(pathname)));
  if (file === GAME) return GAME;
  const dir = path.dirname(file), ext = path.extname(file);
  if ((dir === RANKS_DIR || dir === COMPANIES_DIR) && ext === '.svg') return file;
  if (dir === SOUNDS_DIR && ext === '.opus') return file;
  return null;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', chunk => {
      size += chunk.length;
      if (size > MAX_BODY) { reject(new Error('demasiado grande')); req.destroy(); return; }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  const { pathname } = new URL(req.url, `http://${HOST}`);

  if (pathname === '/api/save' && req.method === 'GET') {
    fs.readFile(SAVE_FILE, 'utf8', (err, text) => {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(err ? 'null' : text);
    });
    return;
  }

  if (pathname === '/api/save' && req.method === 'PUT') {
    try {
      const body = await readBody(req);
      JSON.parse(body);   // se rechaza lo que no sea JSON válido
      fs.mkdirSync(DATA_DIR, { recursive: true });
      // Se escribe en un temporal y se renombra, para no dejar un guardado a medias si se corta la escritura
      fs.writeFileSync(SAVE_FILE + '.tmp', body);
      fs.renameSync(SAVE_FILE + '.tmp', SAVE_FILE);
      res.writeHead(204);
      res.end();
    } catch (err) {
      res.writeHead(400);
      res.end();
    }
    return;
  }

  const file = staticFile(pathname);
  if (!file || req.method !== 'GET') {
    res.writeHead(404);
    res.end();
    return;
  }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end(); return; }
    const type = { '.svg': 'image/svg+xml', '.opus': 'audio/ogg' }[path.extname(file)] || 'text/html; charset=utf-8';
    res.writeHead(200, { 'Content-Type': type });
    res.end(data);
  });
});

server.on('error', err => {
  console.error(err.code === 'EADDRINUSE' ? `El puerto ${PORT} ya está en uso.` : err.message);
  process.exit(1);
});

server.listen(PORT, HOST, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`Dark Orbit en ${url} (Ctrl+C para parar)`);
  if (process.argv.includes('--no-open')) return;
  const open = process.platform === 'win32' ? `start "" ${url}`
    : process.platform === 'darwin' ? `open ${url}` : `xdg-open ${url}`;
  exec(open);
});
