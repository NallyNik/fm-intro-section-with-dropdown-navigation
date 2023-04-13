const btn = document.getElementById('mobile-menu');
const menu = document.getElementById('menu');
const body = document.getElementById('body');
const menuItem = document.querySelectorAll('.menu-item');

//menu hamburguer mobile
btn.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');

    if (isOpen) {
        menu.classList.remove('open');
        btn.style.background = 'url("assets/images/icon-menu.svg") no-repeat';
        body.classList.remove('gray-bg');
    } else {
        menu.classList.add('open');
        btn.style.background = 'url("assets/images/icon-close-menu.svg") no-repeat';
        body.classList.add('gray-bg');
    }
})

//submenu mobile, menu desktop
menuItem.forEach(menu => {
    menu.addEventListener('click', () => {
        menuItem.forEach(m => {
        if (m !== menu) {
          m.nextElementSibling.classList.remove('open'); //content
          m.classList.remove('open'); //arrow transform
        }
      });
      menu.nextElementSibling.classList.toggle('open');
      menu.classList.toggle('open');
    });
  });