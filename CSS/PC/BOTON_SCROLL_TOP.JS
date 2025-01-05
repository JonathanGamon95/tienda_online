const BOTON_INICIO = document.getElementById("button_to_scroll_top");



// vuelve al inicio
const inicio = 0;
const scroll_0 = (valor) => {
    window.scrollTo({
        top: valor,
        behavior: 'smooth'
    });
};


BOTON_INICIO.addEventListener("click", () => scroll_0(inicio));