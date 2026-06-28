const { chromium } = require('playwright-core');
const fs = require('fs');
const M = process.env.MANUAL;
const order = ['portada','cap-00-intro','cap-01-crisis','cap-02-rutinas','cap-03-colegio','cap-04-medicacion','cap-05-especialistas','cap-06-hermanos-familia','cap-07-tu-primero','cap-08-siguiente-paso','guia-rapida'];
const css = fs.readFileSync(M + '/estilo.css','utf8');
// Extrae el <body> de cada archivo
let secciones = order.map(name => {
  const html = fs.readFileSync(M + '/' + name + '.html','utf8');
  const m = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return '<section class="hoja">' + (m ? m[1] : '') + '</section>';
}).join('\n');
// Recupera estilos <style> extra embebidos en algunos capítulos (tablas, scripts, etc.)
let extraStyles = order.map(name => {
  const html = fs.readFileSync(M + '/' + name + '.html','utf8');
  const sm = html.match(/<style>([\s\S]*?)<\/style>/i);
  return sm ? sm[1] : '';
}).join('\n');
const doc = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><style>${css}\n${extraStyles}\n.hoja{page-break-after:always;} .hoja:last-child{page-break-after:auto;}</style></head><body>${secciones}</body></html>`;
fs.writeFileSync('manual-completo.html', doc);
(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME });
  const p = await b.newPage();
  await p.goto('file://' + process.cwd() + '/manual-completo.html', { waitUntil: 'load' });
  await p.pdf({ path: 'Manual-Padres-TDAH-COMPLETO.pdf', format: 'A4', printBackground: true, margin:{top:'0',bottom:'0',left:'0',right:'0'} });
  await b.close(); console.log('PDF completo generado');
})().catch(e=>{console.error(e.message);process.exit(1)});
