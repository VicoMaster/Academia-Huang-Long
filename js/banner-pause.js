/*
Script para detener las animaciones del banner mediante el botón pausa.
Dev: Andrés Rivera
Version: 1.0 (20-11-2021)
*/

//Obtenemos los componentes
const banner_background = document.getElementById('Inicio');
const banner_text_box = document.querySelectorAll('.text-bar');
const banner_icons = document.querySelectorAll('.icon-circle');
const button_pause = document.getElementById('icon-pause');

let pulsador = true;

//Agregamos el evento clic al boton pause
button_pause.addEventListener('click', function (event) {
    if (pulsador) {
        banner_background.style.animationPlayState = 'paused';
        banner_text_box.forEach(text_box => {
            text_box.style.animationPlayState = 'paused';
        });
        banner_icons.forEach(icon => {
            icon.style.animationPlayState = 'paused';
        });
        button_pause.style.borderBottom = '3px solid #e3ba08';
        pulsador = false;
    } else {
        banner_background.style.animationPlayState = 'running';
        banner_text_box.forEach(text_box => {
            text_box.style.animationPlayState = 'running';
        });
        banner_icons.forEach(icon => {
            icon.style.animationPlayState = 'running';
        });
        button_pause.style.borderBottom = 'none';
        pulsador = true;
    }
});
