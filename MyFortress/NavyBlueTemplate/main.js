/* ─────────────────────────────────────────
   My Fortress Gold | main.js
───────────────────────────────────────── */

(function () {

  /* ── Mark JS as active (enables reveal animations) ── */
  document.documentElement.classList.add('js-loaded');

  /* ── HAMBURGER MENU ── */
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobileNav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── SCROLL REVEAL ── */
  var reveals = document.querySelectorAll('.reveal');

  /* Reveal anything currently in or near the viewport */
  function revealVisible() {
    reveals.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100) {
        el.classList.add('visible');
      }
    });
  }

  /* IntersectionObserver for elements below the fold */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px 60px 0px' });

    reveals.forEach(function (el) { io.observe(el); });
  } else {
    /* No IO support — show everything */
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  /* Run immediately and after short delays to catch anything missed */
  revealVisible();
  setTimeout(revealVisible, 150);
  setTimeout(revealVisible, 500);

  window.addEventListener('scroll', revealVisible, { passive: true });

  /* ── NEWSLETTER SUBSCRIBE ── */
  var btn = document.querySelector('.newsletter-btn');
  if (btn) {
    btn.addEventListener('click', function () {
      var inp = document.querySelector('.newsletter-input');
      if (inp && inp.value.indexOf('@') > -1) {
        this.textContent = 'Subscribed!';
        this.style.background = '#27ae60';
        inp.value = '';
      }
    });
  }

})();
