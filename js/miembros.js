const $HEADER_CARNET = document.getElementById('header-carnet');
const $CONTAINER_DROP = document.getElementById('contenedor-drop');
const $CARNET = document.getElementById('carnet');
const $CONSULTAR = document.getElementById('button_consultar');
const $INPUT_MEMBER = document.getElementById('input_member');

$HEADER_CARNET.addEventListener('click', () => {
    $CONTAINER_DROP.children[0].classList.toggle('rotate180');
    $CARNET.classList.toggle('carnet--position-top')
});

$CONSULTAR.addEventListener('click', () => {
    $INPUT_MEMBER.textContent = '';
    $INPUT_MEMBER.value = '';
    $INPUT_MEMBER.setAttribute('value', '');
    $CONTAINER_DROP.children[0].classList.toggle('rotate180');
    $CARNET.classList.toggle('carnet--position-top')
});