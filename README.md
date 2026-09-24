# Currículum Vitae — Licoa Salazar

Este repositorio contiene la versión profesional del Currículum Vitae de **Licoa Salazar** en dos formatos complementarios:
1. **Versión Web Interactiva**: Diseñada para compartirse como portafolio mediante un enlace en **GitHub Pages**.
2. **Versión PDF Formal A4**: Documento de **exactamente 2 páginas** calibrado milimétricamente para evitar saltos de línea huérfanos o desbordamientos, listo para imprimir o enviar a reclutadores y clientes.

---

## 🎨 Paleta de Colores de Marca

El diseño implementa la identidad visual oficial:

| Color | Hexadecimal | RGB | Aplicación Principal |
| :--- | :--- | :--- | :--- |
| **Oiler Navy** | `#19244E` | `rgb(25, 36, 78)` | Textos principales, títulos formales, fondos del modo oscuro. |
| **Brilliant Blue** | `#253C96` | `rgb(37, 60, 150)` | Subtítulos, divisores de sección, enlaces e íconos. |
| **Sunset Orange** | `#F36B2E` | `rgb(243, 107, 46)` | Botones de llamada a la acción (CTA), viñetas y acentos destacados. |
| **Mango** | `#F59A1E` | `rgb(245, 154, 30)` | Métricas de alto impacto, badges secundarios y gradientes cálidos. |
| **Ocean Water** | `#C4E7E5` | `rgb(196, 231, 229)` | Fondos suaves en tablas de competencias y detalles sutiles. |

---

## 📂 Estructura de Archivos

```
CV Licoa Salazar/
├── index.html                   # Versión Web interactiva (para GitHub Pages)
├── cv-print.html                # Plantilla de impresión calibrada para PDF A4 (2 páginas fijas)
├── Licoa_Salazar_CV.pdf         # Archivo PDF final listo para enviar (2 páginas exactas)
├── css/
│   ├── style.css                # Estilos modernos para la web (animaciones, modo claro/oscuro)
│   └── print.css                # Reglas estrictas de paginación A4 para PDF
├── js/
│   └── main.js                  # Lógica interactiva (contadores, copiado rápido, cambio de tema)
├── Paleta de Colores.jpg        # Archivo original de referencia de la paleta
├── Licoa_Salazar_CV_V3_Depurado.pdf # Documento fuente con datos originales
└── README.md                    # Documentación y guía de despliegue
```

---

## 🚀 Cómo publicar en GitHub Pages (en 2 minutos)

Para que tu CV esté disponible en internet mediante un enlace que puedas compartir en LinkedIn, WhatsApp o correos:

### Paso 1: Inicializar y subir a GitHub
Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
git init
git add .
git commit -m "feat: Curriculum Vitae Licoa Salazar (Web y PDF)"
git branch -M main
```

Crea un repositorio en tu cuenta de GitHub (por ejemplo, `cv-licoa-salazar`) y enlázalo:

```bash
git remote add origin https://github.com/TU-USUARIO/cv-licoa-salazar.git
git push -u origin main
```

*(Reemplaza `TU-USUARIO` por tu nombre de usuario en GitHub).*

### Paso 2: Activar GitHub Pages
1. En tu repositorio en GitHub, ve a **Settings** (Configuración).
2. En el menú lateral izquierdo, haz clic en **Pages**.
3. En la sección **Build and deployment > Source**, selecciona **Deploy from a branch**.
4. En **Branch**, selecciona `main` y la carpeta `/ (root)`.
5. Haz clic en **Save** (Guardar).

En aproximadamente 1 minuto, GitHub te proporcionará el enlace público de tu CV:
`https://TU-USUARIO.github.io/cv-licoa-salazar/`

---

## 📄 Cómo regenerar o imprimir el PDF

El archivo `Licoa_Salazar_CV.pdf` ya está incluido y compilado en la carpeta del proyecto con 2 páginas exactas. Si deseas modificar algún dato y volver a generarlo:

### Opción 1: Desde el navegador (Visual y Rápido)
1. Abre `cv-print.html` en Google Chrome o Microsoft Edge.
2. Haz clic en el botón superior **"Imprimir / Guardar en PDF"** (o presiona `Ctrl + P`).
3. En la ventana de impresión configura:
   - **Destino**: *Guardar como PDF*
   - **Páginas**: *Todas*
   - **Diseño**: *Vertical*
   - **Más ajustes > Tamaño del papel**: *A4*
   - **Márgenes**: *Ninguno* (o predeterminado)
   - **Gráficos de fondo**: *Activado* (marcar la casilla para que se vean los colores de la paleta).
4. Haz clic en **Guardar**.

### Opción 2: Línea de comandos (Automático con Chrome)
```powershell
& "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --disable-gpu --virtual-time-budget=5000 --run-all-compositor-stages-before-draw --no-pdf-header-footer --print-to-pdf="Licoa_Salazar_CV.pdf" "cv-print.html"
```

---

## 💼 Contenido Destacado del Perfil

- **Marketing & Paid Media**: Meta Ads, Estrategia de Contenidos, Copywriting y Gestión de Cuentas.
- **Proyectos Tecnológicos & Digitalización**: React + Vite + TypeScript, integración de Supabase, Firebase / Firestore, flujos de trabajo con GitHub y desarrollo de soluciones digitales para operaciones internas.
- **Ecosistema CRM & ERP**: Odoo 18, Kommo, Stel Order, Auvo (2Workers) y Ditik.
- **Métricas Documentadas (Últimos 6 Meses)**:
  - **5.741** conversaciones comerciales iniciadas.
  - **2,19 M+** visualizaciones de campañas documentadas.
  - **US$2.399+** de inversión gestionada.
  - Costo por conversación mínimo récord de **US$0,29**.
- **Mercados atendidos**: Venezuela, Costa Rica y Colombia.
