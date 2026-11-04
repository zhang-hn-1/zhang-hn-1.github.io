'use strict';

// Each language has a complete static HTML page; no storage or script is needed to select it.
// Keep the contents navigation aligned with the section being read.
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('.side-nav a')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href')));
  const visibleSections = new Set();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) visibleSections.add(entry.target.id);
      else visibleSections.delete(entry.target.id);
    });
    const active = sections.find(section => visibleSections.has(section.id));
    if (!active) return;
    links.forEach(link => {
      if (link.getAttribute('href') === `#${active.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-8% 0px -45% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}
