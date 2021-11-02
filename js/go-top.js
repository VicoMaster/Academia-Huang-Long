window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container').classList.add('show');
        document.querySelector('.container-button-whatsapp').classList.add('show-whatsapp');
    } else {
        document.querySelector('.go-top-container').classList.remove('show');
        document.querySelector('.container-button-whatsapp').classList.remove('show-whatsapp');
    }
}

document.querySelector('.go-top-container').addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})