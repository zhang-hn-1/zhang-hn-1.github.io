'use strict';

// Preserve bookmarks from the former single-page site after splitting sections.
function followLegacyFragment() {
  let id;
  try { id = decodeURIComponent(window.location.hash.slice(1)); }
  catch { return; }
  if (!id || document.getElementById(id)) return;
  let page;
  if (id === 'publications' || id.startsWith('paper-')) page = 'publications';
  else if (id === 'research' || id.startsWith('project-')) page = 'projects';
  else if (['innovation', 'patents', 'education'].includes(id)) page = 'experience';
  else if (id === 'honors') page = 'awards';
  else if (['service', 'contact'].includes(id)) page = 'services';
  else if (['about', 'interests', 'news', 'name'].includes(id)) page = 'home';
  else return;
  const chinese = document.documentElement.lang === 'zh-CN';
  const file = page === 'home' ? (chinese ? 'zh-cn.html' : 'index.html')
    : `${page}${chinese ? '-zh' : ''}.html`;
  if (page !== document.body.dataset.page) {
    window.location.replace(`./${file}#${encodeURIComponent(id)}`);
  }
}
followLegacyFragment();
window.addEventListener('hashchange', followLegacyFragment);
window.addEventListener('pageshow', followLegacyFragment);
