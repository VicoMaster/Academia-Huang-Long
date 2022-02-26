import { avance } from './banner-auto-manual.js';

let expireTime = setInterval(hiddenLoadDragon, 1000);
let conteo = 0; //Cuando el conteo llegue a 6 cancela el logo de carga
window.location.href = "#Inicio"; // Fix para las referencias
window.onload = () => {
    let pantalla_carga = document.getElementById('overlay-load');
    pantalla_carga.style.visibility = 'hidden';
    pantalla_carga.style.opacity = '0';
    setInterval(avance, 4000);
}

function hiddenLoadDragon() {
    conteo++
    if (conteo > 6) {
        pantalla_carga = document.getElementById('overlay-load');
        pantalla_carga.style.visibility = 'hidden';
        pantalla_carga.style.opacity = '0';
        clearInterval(expireTime);
    }
}