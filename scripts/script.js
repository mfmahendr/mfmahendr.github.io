document.addEventListener('DOMContentLoaded', () => {
    //   menu hover (semantic vs. metaphor)
  const menuContainer = document.querySelector('.main-menu');
  if (menuContainer) {
    menuContainer.addEventListener('mouseenter', handleMenuHover, true);
    menuContainer.addEventListener('mouseleave', handleMenuHover, true);
  }

  function handleMenuHover(e) {
    const link = e.target.closest('.menu-item > a');
    if (!link) return;

    const semantic = link.querySelector('span:first-child');
    const metaphor = link.querySelector('span.metaphor');

    if (e.type === 'mouseenter') {
      semantic.style.display = 'none';
      metaphor.classList.replace('text-sm', 'text-lg');
    } else {
      semantic.style.display = 'flex';
      metaphor.classList.replace('text-lg', 'text-sm');
    }
  }

  // Smooth scroll
  document.body.addEventListener('click', e => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href'))
            ?.scrollIntoView({ behavior: 'smooth' });
  });

  // intersection-Observer animasi scroll 
  const ioOptions = { threshold: 0.1 };
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('animate'));
  }, ioOptions);

  document.querySelectorAll('section').forEach(sec => sectionObserver.observe(sec));

  // Sticky nav, after hero
  const nav = document.getElementById('main-nav');
  const hero = document.querySelector('header');
  if (nav && hero) {
    const navObserver = new IntersectionObserver(
      ([entry]) => nav.classList.toggle('nav-visible', !entry.isIntersecting),
      { threshold: 0.1, rootMargin: '-50px 0px 0px 0px' }
    );
    navObserver.observe(hero);
  }

  // Mobile menu toggle
  const menuToggleBtn = document.querySelector('[data-toggle="mobile-menu"]');
  const mobileMenu    = document.querySelector('[data-menu="mobile"]');
  if (menuToggleBtn && mobileMenu) {
    menuToggleBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  }
});
