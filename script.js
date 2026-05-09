/* ============================================================
   PORTFOLIO SCRIPT — Syed Muhammad Taha
   - Animated canvas background (binary rain, blue themed)
   - Typed text effect
   - Navbar scroll behavior
   - Hamburger mobile menu
   - Scroll-reveal animations (IntersectionObserver)
============================================================ */

// ── 1. CANVAS BINARY RAIN ──────────────────────────────────
(function () {
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');

  let cols, drops;
  const FONT_SIZE = 14;
  const CHARS = '01アイウエオカキクケコ10';

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    cols  = Math.floor(canvas.width / FONT_SIZE);
    drops = new Array(cols).fill(1);
  }

  function draw() {
    ctx.fillStyle = 'rgba(5, 13, 26, 0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `${FONT_SIZE}px 'Space Mono', monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = CHARS[Math.floor(Math.random() * CHARS.length)];
      const opacity = Math.random() * 0.6 + 0.1;

      // Alternate between blue shades
      if (i % 3 === 0) {
        ctx.fillStyle = `rgba(0, 229, 255, ${opacity})`;    // cyan
      } else if (i % 3 === 1) {
        ctx.fillStyle = `rgba(26, 108, 247, ${opacity})`;   // blue
      } else {
        ctx.fillStyle = `rgba(77, 163, 255, ${opacity * 0.6})`;  // light blue
      }

      ctx.fillText(char, i * FONT_SIZE, drops[i] * FONT_SIZE);

      if (drops[i] * FONT_SIZE > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  resize();
  window.addEventListener('resize', resize);
  setInterval(draw, 50);
})();


// ── 2. TYPED EFFECT ───────────────────────────────────────
(function () {
  const el = document.getElementById('typed');
  if (!el) return;

  const phrases = [
    'Machine Learning Engineer',
    'Python Developer',
    'Odoo Developer',
    'NLP Specialist',
    'Deep Learning Enthusiast',
  ];

  let phraseIdx = 0;
  let charIdx   = 0;
  let deleting  = false;
  const TYPING_SPEED = 80;
  const DELETE_SPEED = 40;
  const PAUSE        = 1800;

  function type() {
    const current = phrases[phraseIdx];

    if (deleting) {
      el.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(type, 400);
        return;
      }
      setTimeout(type, DELETE_SPEED);
    } else {
      el.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(type, PAUSE);
        return;
      }
      setTimeout(type, TYPING_SPEED);
    }
  }

  setTimeout(type, 800);
})();


// ── 3. NAVBAR SCROLL ──────────────────────────────────────
(function () {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
})();


// ── 4. HAMBURGER MENU ─────────────────────────────────────
(function () {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  const links = document.querySelectorAll('.mobile-link');

  function close() {
    btn.classList.remove('open');
    menu.classList.remove('open');
  }

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
  });

  links.forEach(l => l.addEventListener('click', close));
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) close();
  });
})();


// ── 5. SCROLL-REVEAL (IntersectionObserver) ───────────────
(function () {
  const items = document.querySelectorAll('.timeline-item, .project-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        // Stagger delay based on sibling index
        const siblings = [...entry.target.parentElement.children];
        const i = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${i * 0.08}s`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(el => observer.observe(el));
})();


// ── 6. SMOOTH ACTIVE NAV LINK ─────────────────────────────
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.style.color = '');
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.style.color = 'var(--cyan)';
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => io.observe(s));
})();
