const mainNavItems = [
  { label: 'Beranda', shortLabel: 'Beranda', homeHref: '#home', pageHref: 'index.html#home' },
  { label: 'Tentang BIYA', shortLabel: 'Tentang', homeHref: '#tentang-biya', pageHref: 'index.html#tentang-biya' },
  { label: 'Produk', shortLabel: 'Produk', homeHref: '#produk', pageHref: 'index.html#produk' },
  { label: 'Kontak', shortLabel: 'Kontak', homeHref: '#kontak', pageHref: 'index.html#kontak' },
];

const mainNavContainers = document.querySelectorAll('[data-nav="main"]');
mainNavContainers.forEach((container) => {
  const isHomeContext = container.dataset.navContext === 'home';
  container.innerHTML = mainNavItems.map((item) => {
    const href = isHomeContext ? item.homeHref : item.pageHref;
    return `<a href="${href}" data-mobile-label="${item.shortLabel}">${item.label}</a>`;
  }).join('') + '<a class="nav-cta" href="#TODO-ACCOUNT-CENTER-LINK">Masuk Account Center</a>';
});

const menuToggle = document.querySelector('.menu-toggle');

const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
    menuToggle.textContent = isOpen ? '×' : '☰';
  });
  navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Buka menu');
    menuToggle.textContent = '☰';
  }));
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links > a:not(.nav-cta)').forEach((link) => {
  const href = link.getAttribute('href') || '';
  if (href === currentPage || href === `${currentPage}${window.location.hash}`) link.classList.add('active');
  if (currentPage === 'index.html' && href.startsWith('#') && (!window.location.hash || href === window.location.hash)) {
    if (href === '#home' || href === window.location.hash) link.classList.add('active');
  }
});

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}

const demoForm = document.querySelector('#demo-form');
if (demoForm) {
  demoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = demoForm.querySelector('button[type="submit"]');
    button.textContent = 'Terima kasih — kami akan menghubungi kamu';
    button.disabled = true;
  });
}
