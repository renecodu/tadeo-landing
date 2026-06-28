# 📘 Manual TDAH — "El manual que el psicólogo no te da"

Contenido del infoproducto (front-end de la solución TDAH). Producto en Hotmart: **Padres TDAH** (ID 7665867).

## Estructura de la carpeta

```
manual/
  estilo.css                       ← diseño compartido (editar para cambiar el look de TODO)
  README.md                        ← este índice

  cap-00-intro.md / .html          Introducción (carta de René)
  cap-01-crisis.md / .html         Cap 1 · Crisis           → plantilla "Crisis 30 seg"
  cap-02-rutinas.md / .html        Cap 2 · Rutinas          → plantilla tablero visual
  cap-03-colegio.md / .html        Cap 3 · Colegio          → plantilla correo + guion reunión
  cap-04-medicacion.md / .html     Cap 4 · Medicación       → diario de seguimiento
  cap-05-especialistas.md / .html  Cap 5 · Especialistas    → 7 preguntas + checklist
  cap-06-hermanos-familia.md/.html Cap 6 · Hermanos/familia → scripts
  cap-07-tu-primero.md / .html     Cap 7 · Tú primero       → lista de permisos
  cap-08-siguiente-paso.md/.html   Cap 8 · Siguiente paso   → integra todo + Tadeo (upsell)
```

Cada capítulo tiene **2 archivos**:
- `.md` → el **contenido** (texto puro, fácil de editar)
- `.html` → la versión **diseñada** (genera el PDF; mejorar con Claude Design aquí)

## Las 7 plantillas prometidas en la landing

Van integradas dentro de los capítulos (no en archivos sueltos):
1. Crisis 30 segundos → Cap 1
2. Tablero de rutina visual → Cap 2
3. Correo al colegio → Cap 3
4. Guion de reunión difícil → Cap 3
5. Diario de seguimiento (medicación) → Cap 4
6. 7 preguntas + checklist al especialista → Cap 5
7. Lista de permisos al padre/madre → Cap 7

## Cómo generar el PDF

Cada `.html` usa `estilo.css`. Para producir el PDF se renderiza el HTML (ej. con Chromium/Playwright → `page.pdf`) en A4. Al mejorar el diseño en `estilo.css` o en los `.html`, se regenera el PDF.

## ⚠️ Pendientes antes de lanzar
- [ ] Integrar las **historias reales de René** en los recuadros 📌 de cada capítulo.
- [ ] Grabar los **8 audios** (uno por capítulo, narrados por René).
- [ ] Poner el **link real de Tadeo** en el CTA del Cap 8.
- [ ] Revisar/mejorar diseño con Claude Design.
- [ ] Confirmar que el producto Hotmart 7665867 sea **pago único** (no suscripción).
- [ ] Unir todos los capítulos en **un solo PDF** para entrega.
