window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        document.querySelector('.go-top-container').classList.add('show');
        document.querySelector('.container-button-whatsapp').classList.add('show-whatsapp');
        document.getElementById('boton-lateral-menu').classList.remove('menu-lateral--hidden');
    } else {
        document.querySelector('.go-top-container').classList.remove('show');
        document.querySelector('.container-button-whatsapp').classList.remove('show-whatsapp');
        document.getElementById('boton-lateral-menu').classList.add('menu-lateral--hidden');
    }
}

document.querySelector('.go-top-container').addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})