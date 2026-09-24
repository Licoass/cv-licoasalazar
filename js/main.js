/* ==========================================================================
   CURRÍCULUM VITAE - LICOSA SALAZAR (INTERACTIVE LOGIC)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initCopyButtons();
  initMetricCounters();
});

/* Control de Tema (Claro / Oscuro) */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const currentTheme = localStorage.getItem('theme') || 'light';

  root.setAttribute('data-theme', currentTheme);
  updateThemeIcon(toggleBtn, currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const theme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      updateThemeIcon(toggleBtn, theme);
    });
  }
}

function updateThemeIcon(btn, theme) {
  if (!btn) return;
  if (theme === 'dark') {
    btn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
    btn.setAttribute('title', 'Cambiar a modo claro');
    btn.setAttribute('aria-label', 'Cambiar a modo claro');
  } else {
    btn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    btn.setAttribute('title', 'Cambiar a modo oscuro');
    btn.setAttribute('aria-label', 'Cambiar a modo oscuro');
  }
}

/* Copiado Rápido al Portapapeles */
function initCopyButtons() {
  const copyElements = document.querySelectorAll('[data-copy]');
  copyElements.forEach(elem => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = elem.getAttribute('data-copy');
      const label = elem.getAttribute('data-label') || 'Información';
      
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`✓ ${label} copiado al portapapeles: ${textToCopy}`);
      }).catch(err => {
        console.error('Error al copiar: ', err);
      });
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/* Animación sutil de números en métricas */
function initMetricCounters() {
  const metrics = document.querySelectorAll('.metric-value[data-target]');
  if (!metrics.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target'));
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
        
        animateCount(el, 0, target, 1500, prefix, suffix, decimals);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  metrics.forEach(metric => observer.observe(metric));
}

function formatNumberEs(val, decimals) {
  if (decimals > 0) {
    return val.toFixed(decimals).replace('.', ',');
  }
  return Math.round(val).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function animateCount(elem, start, end, duration, prefix, suffix, decimals) {
  const startTime = performance.now();
  
  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Easing out cubic
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const current = start + (end - start) * easeProgress;
    
    elem.textContent = `${prefix}${formatNumberEs(current, decimals)}${suffix}`;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      elem.textContent = `${prefix}${formatNumberEs(end, decimals)}${suffix}`;
    }
  }
  
  requestAnimationFrame(update);
}
