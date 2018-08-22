document.getElementById("nav-toggle").onclick = navToggle;

function navToggle() {
  var toggleBtn = document.getElementById('nav-toggle');
  var navView = document.getElementById('nav-list');
  var toggleBtnClass = toggleBtn.getAttribute('class');
  if(toggleBtnClass == 'sp-menu-btn close') {
    toggleBtn.classList.remove('close');
    navView.classList.remove('close');
    toggleBtn.classList.add('open');
    navView.classList.add('open');
  }
  else {
    toggleBtn.classList.remove('open');
    navView.classList.remove('open');
    toggleBtn.classList.add('close');
    navView.classList.add('close');
  }
}
