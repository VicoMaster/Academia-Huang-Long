let expireTime = setInterval(hiddenLoadDragon,1000);
let conteo = 0; //Cuando el conteo llegue a 6 cancela el logo de carga

window.onload = () => {
    pantalla_carga = document.getElementById('overlay-load');
    pantalla_carga.style.visibility = 'hidden';
    pantalla_carga.style.opacity = '0';
}

function hiddenLoadDragon(){
    conteo++
    if(conteo > 6){
        pantalla_carga = document.getElementById('overlay-load');
        pantalla_carga.style.visibility = 'hidden';
        pantalla_carga.style.opacity = '0';  
        clearInterval(expireTime);
    }
    console.log("CONTEO: ",conteo);
}