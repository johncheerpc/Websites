/* ─────────────────────────────────────────
   My Fortress | main.js
───────────────────────────────────────── */

(function () {

  /* ─── HAMBURGER MENU ─── */
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobileNav');

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

  /* ─── SCROLL REVEAL ─── */
  var reveals = document.querySelectorAll('.reveal');

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  reveals.forEach(function (el) { io.observe(el); });

  // Immediately show hero and stats on load
  setTimeout(function () {
    document.querySelectorAll('.hero .reveal, .stats-band .reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }, 80);

  /* ─── NEWSLETTER SUBSCRIBE ─── */
  var subBtn = document.getElementById('subBtn');
  if (subBtn) {
    subBtn.addEventListener('click', function () {
      var inp = document.querySelector('.newsletter-input');
      if (inp && inp.value.indexOf('@') > -1) {
        this.textContent = 'Subscribed!';
        this.style.background = '#27ae60';
        inp.value = '';
      }
    });
  }

})();
