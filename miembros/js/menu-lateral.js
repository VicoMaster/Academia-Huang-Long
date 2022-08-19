let botonHamburguesa = document.getElementById('button-hamburguer'),
    menuLateral = document.getElementById('menu-lateral'),
    botonCerrarMenu = document.getElementById('button-close-menu'),
    botonMenuLateral = document.getElementById('boton-lateral-menu'),
    enlacesMenuLateral = document.querySelectorAll('.close-lateral-menu');

function toggleClass() {
    menuLateral.classList.toggle('menu-lateral--hidden');
}


const url = window.location;

if (url.pathname.search('miembros') != -1) {
    botonCerrarMenu.addEventListener('click', toggleClass);
    botonMenuLateral.addEventListener('click', toggleClass);
    enlacesMenuLateral.forEach(enlace => {
        enlace.addEventListener('click', toggleClass);
    })
} else {
    botonHamburguesa.addEventListener('click', toggleClass);
    botonCerrarMenu.addEventListener('click', toggleClass);
    botonMenuLateral.addEventListener('click', toggleClass);
    enlacesMenuLateral.forEach(enlace => {
        enlace.addEventListener('click', toggleClass);
    })
}
