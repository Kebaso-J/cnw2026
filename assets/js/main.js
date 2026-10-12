// // Mobile menu
// const toggle = document.querySelector('.nav__toggle');
// const links = document.getElementById('nav-links');
// toggle.addEventListener('click', () => {
//   const open = links.classList.toggle('is-open');
//   toggle.setAttribute('aria-expanded', String(open));
// });
// links.addEventListener('click', e => {
//   if (e.target.tagName === 'A') { links.classList.remove('is-open'); toggle.setAttribute('aria-expanded','false'); }
// });

// // Highlight current section in the nav
// const anchors = [...links.querySelectorAll('a[href^="#"]:not(.nav__cta)')];
// const map = new Map(anchors.map(a => [a.getAttribute('href').slice(1), a]));
// const io = new IntersectionObserver(entries => {
//   entries.forEach(en => {
//     if (en.isIntersecting && map.has(en.target.id)) {
//       anchors.forEach(a => a.classList.remove('is-active'));
//       map.get(en.target.id).classList.add('is-active');
//     }
//   });
// }, { rootMargin: '-45% 0px -50% 0px' });
// map.forEach((_, id) => { const el = document.getElementById(id); if (el) io.observe(el); });

// Mobile menu
const toggle = document.querySelector('.nav__toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
});
links.addEventListener('click', e => {
  if (e.target.tagName === 'A') { links.classList.remove('is-open'); toggle.setAttribute('aria-expanded','false'); }
});

// Highlight current section in the nav
const anchors = [...links.querySelectorAll('a[href^="#"]:not(.nav__cta)')];
const map = new Map(anchors.map(a => [a.getAttribute('href').slice(1), a]));
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting && map.has(en.target.id)) {
      anchors.forEach(a => a.classList.remove('is-active'));
      map.get(en.target.id).classList.add('is-active');
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
map.forEach((_, id) => { const el = document.getElementById(id); if (el) io.observe(el); });

// Day tabs (Past edition). Without JS every day simply shows in sequence.
document.querySelectorAll('[data-tabs]').forEach(root => {
  const tabs = [...root.querySelectorAll('[role="tab"]')];
  const panels = tabs.map(t => document.getElementById(t.getAttribute('aria-controls')));
  const select = i => {
    tabs.forEach((t, n) => {
      const on = n === i;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      panels[n].hidden = !on;
    });
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(i));
    t.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const j = (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
        select(j); tabs[j].focus();
      }
    });
  });
  select(0);
});
