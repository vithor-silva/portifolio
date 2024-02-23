document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const menu = document.querySelector('.menu');

  menuIcon.addEventListener('click', function () {
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
      menuIcon.innerHTML = '&#9776;';
    } else {
      menu.style.display = 'flex';
      menuIcon.innerHTML = '&#10006;';
    }
  });
});
