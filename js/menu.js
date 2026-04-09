// Attach directly — script is loaded at end of body so DOM is ready
var btn = document.getElementById('mobile-menu-icon');
var nav = document.querySelector('.nav');

if (btn) {
  btn.addEventListener('click', function () {
    if (nav) nav.classList.toggle('active');
    btn.classList.toggle('open');
  });
}

// Move (clone) Login button into mobile menu when on small screens
(function moveLoginToMenu() {
  var menu = document.querySelector('.menu');
  var login = document.querySelector('.login-btn');
  if (!menu || !login) return;

  // avoid duplicating
  if (document.querySelector('.mobile-login-item')) return;

  var mq = window.matchMedia('(max-width: 768px)');
  function insert() {
    if (!mq.matches) return;
    var clone = login.cloneNode(true);
    clone.classList.remove('btn');
    clone.classList.add('mobile-login-link');
    var li = document.createElement('li');
    li.className = 'menu-item mobile-login-item';
    li.appendChild(clone);
    menu.appendChild(li);
  }

  insert();
  // Also watch resize to insert when user resizes to mobile
  mq.addEventListener && mq.addEventListener('change', function(e){ if(e.matches) insert(); });
})();

