// Referencias a los elementos
const menu = document.getElementById('menu');
const menuBtn = document.getElementById('boton_menu');
const closeBtn = document.getElementById('closeBtn');

// Mostrar el menú
menuBtn.addEventListener('click', () => {
    menu.classList.add('active');
});

// Cerrar el menú
closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
});