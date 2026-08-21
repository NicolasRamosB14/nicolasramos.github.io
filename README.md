# nicolasramos.github.io

Portafolio personal de **Nicolás Ramos Bolaños** — Analista de Datos / Data Engineer Junior.

🔗 https://nicolasramosb14.github.io/nicolasramos.github.io/

## Contenido

| Página | Descripción |
|---|---|
| `index.html` | Portafolio: posicionamiento, stack, experiencia, proyectos y formación |
| `case-study.html` | Caso de estudio técnico de la plataforma de datos: arquitectura, decisiones de ingeniería y problemas resueltos |

## Stack del sitio

HTML, CSS y JavaScript planos, sin framework ni paso de compilación: se publica tal cual en GitHub
Pages.

| Archivo | Función |
|---|---|
| `styles.css` | Estilos. Sistema de tokens en `:root` y componentes que sólo consumen esos tokens |
| `i18n.js` | Sistema de idiomas ES/EN. Diccionario único y sustitución por atributos `data-i18n` |
| `script.js` | Interacción de la sección oculta |
| `Images/` | Iconos, badges e imágenes |

### Sobre los estilos

`styles.css` está organizado en capas y conviene mantener ese orden: tokens → base → contenedor →
motivos → componentes → responsive.

Los tokens de `:root` están agrupados **por función, no por sección**: `--surface-*`, `--text-*` y
tres acentos con un trabajo asignado cada uno — `--signal` para títulos y lo actual, `--action` para
lo que se pulsa, `--data` para código y etiquetas técnicas. Cambiar el color de acento del sitio es
editar una línea. **Ningún valor hex vive fuera de `:root`**; las únicas excepciones son las capas
semitransparentes de un solo uso, que se escriben en `rgba` junto a su uso.

Los tamaños de letra salen de la escala fluida `--step--1` … `--step-4`, construida con `clamp()`. Por
eso apenas hay media queries: sólo tres puntos de corte, agrupados al final del archivo, y únicamente
para cambios de disposición reales. Si hace falta ajustar un tamaño, se ajusta el paso de la escala,
no se añade una media query.

La identidad visual se apoya en cinco motivos reutilizables, todos en la sección 4: encabezados
numerados con `counter()`, chaflán mediante `--clip`, textura de fondo, glitch (clase `.glitch`, que
necesita `data-text` en el elemento) y marcador de esquina.

### Sobre el bilingüismo

El sitio se sirve en español o inglés desde un mismo HTML. La alternativa —duplicar las páginas en
`/en/`— obliga a editar dos archivos por cada cambio de texto, y en la práctica acaban divergiendo.
Las cadenas viven centralizadas en `i18n.js`; el idioma se elige por preferencia guardada y, si no la
hay, por el idioma del navegador.

Para añadir texto traducible:

```html
<p data-i18n="mi.clave">Texto de respaldo en español</p>
```

y añadir `"mi.clave"` a los bloques `es` y `en` de `i18n.js`. Ambos bloques deben tener exactamente
las mismas claves.

## Desarrollo local

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## CV

Los PDF del repositorio (`CV-Nicolas-Ramos-ES.pdf` y `CV-Nicolas-Ramos-EN.pdf`) se generan desde las
fuentes LaTeX, que se mantienen fuera de este repositorio.
