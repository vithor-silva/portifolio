document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    const tecnologiasSection = document.getElementById('tecnologias');
    const irTecnologiasButton = document.getElementById('irtecnologias');

    menuIcon.addEventListener('click', function () {
        menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    });

    irTecnologiasButton.addEventListener('click', function () {
        // Exiba a seção de tecnologias quando o botão for clicado
        tecnologiasSection.style.display = 'block';
    });
});
