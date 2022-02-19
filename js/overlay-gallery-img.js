//Import datos de las imagenes para agregar
import { PACK_IMAGENES, NOMBRE_IMAGEN_DESCARGAR, agregarBloquesImg } from './rutas_imagenes.js';

//COMPONENTES HTML
let overlayGalleryImg = document.getElementById('container-overlay-gallery'),
    imgGalleryFlex = document.getElementById('container-gallery-cards'),
    centralImg = document.getElementById('img-overlay'),
    footerCarrusel = document.getElementById('overlay-footer'),
    botonCerrar = document.getElementById('overlay-button-close'),
    botonDescarga = document.getElementById('button-download'),
    overlayResult1 = document.getElementById('overlay_result1'),
    overlayResult2 = document.getElementById('overlay_result2'),
    botonesGalleryFlex = document.getElementById('container-button-gallery-1'),
    botonRight = document.getElementById('button-right'),
    botonLeft = document.getElementById('button-left'),
    overlayFooterPlus = document.getElementById('overlay-footer-plus'),
    overlayFooterPlusLeft = document.getElementById('overlay-footer-plus-left'),
    selectGalleryFlex = document.getElementById('select-images'),
    galleryResult2 = document.getElementById('gallery_result2'),
    loadDragonList = document.querySelectorAll('.overlay-load-img'),
    loadDragonCenter = document.getElementById('overlay-load-center');

//VARIABLES GLOBALES
let contadorImagenesFlex = 0, // Variable que llena el numero de img FLEX
    botonSaveGallery = botonesGalleryFlex.children[0], //Botón seleccionado en gallery flex
    idImagenGallery = 0, //contador para saber el id de la imagen en la galería flex
    imagenId = 0, //Id que indica que imagen-small está seleccionada
    nombreImagen = NOMBRE_IMAGEN_DESCARGAR,
    listSelect = selectGalleryFlex.children[0], //Guarda la seleccion menu-lista
    nodosImg = [];

//FUNCIONES
function selecImgFooter(indexImgFooter) {
    footerCarrusel.children[indexImgFooter].classList.add('overlay-footer--selected');
}

function removeSelectedFooter(indexImgFooter) {
    footerCarrusel.children[indexImgFooter].classList.remove('overlay-footer--selected');
}

function imgDownload(rutaImg, nameImg) {
    botonDescarga.href = rutaImg;
    botonDescarga.download = nameImg;
}

function changeNameImg() {
    return (nombreImagen + (parseInt(imagenId, 10) + 1));
}

function cargaImgFlexGallery() {
    overlayResult2.innerText = PACK_IMAGENES[botonSaveGallery.id][0].length;
    galleryResult2.innerText = PACK_IMAGENES[botonSaveGallery.id][0].length;
    contadorImagenesFlex = 0;
    idImagenGallery = 0;
    nodosImg = [];
    //Carga Imagenes en Galería Flex
    imgGalleryFlex.childNodes.forEach(containerImg => {
        containerImg.childNodes.forEach(nodo => {
            if (nodo.nodeName === 'IMG') {
                nodo.src = PACK_IMAGENES[botonSaveGallery.id][1][contadorImagenesFlex];
                nodo.id = 'glc-' + idImagenGallery;
                contadorImagenesFlex++;
                idImagenGallery++;
                nodosImg.push(nodo);
            }
        });
    });
    loadDragonOff(nodosImg.length);
}

function cargaCarruselOverlay() {
    let imgCarruselOverlay = agregarBloquesImg(PACK_IMAGENES[botonSaveGallery.id][1]);
    imgCarruselOverlay.forEach(rutaCarruselSmall => {
        footerCarrusel.appendChild(rutaCarruselSmall);
    })
}

function eliminarCarruselOverlay() {
    while (footerCarrusel.firstChild) {
        footerCarrusel.removeChild(footerCarrusel.firstChild);
    }
}

function actionButtonGallery(event) {
    if (event.target.nodeName === 'BUTTON') {
        botonSaveGallery.classList.remove('button--active');
        event.target.classList.add('button--active');
        botonSaveGallery = event.target;
        loadDragonOn();
        cargaImgFlexGallery();
    }
}

function abrirOverlay(event) {
    if (event.target.nodeName === 'IMG') {
        let indexIdImg = event.target.id.split('-', 2);
        imagenId = indexIdImg[1];//id de la imagen seleccionada
        overlayResult1.innerText = (parseInt(imagenId, 10) + 1);
        centralImg.src = PACK_IMAGENES[botonSaveGallery.id][0][imagenId];
        overlayGalleryImg.classList.toggle('overlay--hidden');
        loadDragonCenterOn();
        centralImg.onload = loadDragonCenterOff;
        cargaCarruselOverlay();
        selecImgFooter(imagenId);
        imgDownload(centralImg.src, changeNameImg());
        moverCarrusel();
    }
}

function cerrarOverlay() {
    centralImg.src = '';
    eliminarCarruselOverlay();
    overlayGalleryImg.classList.toggle('overlay--hidden');
    loadDragonCenterOff();
}

function moverCarrusel() {
    let totalWidthCarrusel = 0,
        continuarSumar = true,
        marginElementoImg = -15; // No tengo idea por qué este numero pero funciona
    footerCarrusel.childNodes.forEach(elemento => {
        if (elemento.nodeName === 'IMG') {
            if (continuarSumar) totalWidthCarrusel += (elemento.width + marginElementoImg);
            if (elemento.classList.item(0)) {
                totalWidthCarrusel -= (elemento.width - marginElementoImg);
                continuarSumar = false;
            }
        }
    });
    if (totalWidthCarrusel < 0) totalWidthCarrusel -= totalWidthCarrusel; //fix nomovecarrusel
    footerCarrusel.style.transform = `translateX(-${totalWidthCarrusel}px)`;
}

function paginationCounter(retroceder) {
    if (retroceder) {
        overlayResult1.innerText = imagenId >= 0
            ? ((imagenId + 2) - 1) : PACK_IMAGENES[botonSaveGallery.id][0].length;
    } else {
        overlayResult1.innerText = imagenId < (PACK_IMAGENES[botonSaveGallery.id][0].length)
            ? (imagenId + 1) : 1;
    }
}

function cambiarImagenCentral(event) {
    const NOMBRE_ELEMENTO = event.target.localName;
    if (NOMBRE_ELEMENTO === "img") {
        removeSelectedFooter(imagenId);
        imagenId = event.target.id;
        centralImg.src = PACK_IMAGENES[botonSaveGallery.id][0][imagenId];
        loadDragonCenterOn();
        centralImg.onload = loadDragonCenterOff;
        selecImgFooter(imagenId);
        imgDownload(centralImg.src, changeNameImg());
        overlayResult1.innerText = (parseInt(imagenId, 10) + 1);
        moverCarrusel();
    }
}

function avanzarImagen() {
    let indexNextImg = imagenId < (PACK_IMAGENES[botonSaveGallery.id][0].length - 1)
        ? (parseInt(imagenId, 10) + 1) : 0;
    removeSelectedFooter(imagenId);
    imagenId = indexNextImg;
    selecImgFooter(imagenId);
    centralImg.src = PACK_IMAGENES[botonSaveGallery.id][0][imagenId];
    loadDragonCenterOn();
    centralImg.onload = loadDragonCenterOff;
    imgDownload(centralImg.src, changeNameImg());
    paginationCounter(false);
    moverCarrusel();
}

function retrocederImagen() {
    let indexBackImg = imagenId > 0
        ? (parseInt(imagenId, 10) - 1) : PACK_IMAGENES[botonSaveGallery.id][0].length - 1;
    removeSelectedFooter(imagenId);
    imagenId = indexBackImg;
    selecImgFooter(imagenId);
    centralImg.src = PACK_IMAGENES[botonSaveGallery.id][0][imagenId];
    loadDragonCenterOn();
    centralImg.onload = loadDragonCenterOff;
    imgDownload(centralImg.src, changeNameImg());
    paginationCounter(true);
    moverCarrusel();
}

function selectOptionGallery(event) {
    if (event.target.nodeName === 'LI') {
        listSelect.classList.remove('button--active');
        listSelect = event.target;
        event.target.classList.add('button--active');
        let selectValue = event.target.value;
        botonSaveGallery = botonesGalleryFlex.children[selectValue];
        cargaImgFlexGallery();
    }
}

//Eventos
imgGalleryFlex.addEventListener('click', abrirOverlay);
botonCerrar.addEventListener('click', cerrarOverlay);
botonesGalleryFlex.addEventListener('click', actionButtonGallery);
footerCarrusel.addEventListener('click', cambiarImagenCentral);
botonRight.addEventListener('click', avanzarImagen);
botonLeft.addEventListener('click', retrocederImagen);
overlayFooterPlus.addEventListener('click', avanzarImagen);
overlayFooterPlusLeft.addEventListener('click', retrocederImagen);
selectGalleryFlex.addEventListener('click', selectOptionGallery);
selectGalleryFlex.addEventListener('touchstart', selectOptionGallery);

//CARGA DE BLOQUES
loadDragonOn();
cargaImgFlexGallery();
listSelect.classList.add('button--active');

//LOAD DRAGON
//Oculta el overlay load-dragon cuando el componente target ha terminado de cargar
function loadDragonOn() {
    loadDragonList.forEach(loadDragon => {
        loadDragon.style.zIndex = '998';
        loadDragon.style.opacity = '1';
        loadDragon.style.visibility = 'visible';
    });
}
function loadDragonOff(nodos) {
    if (nodos <= 0) return
    let imgFlexHtml = nodosImg[nodos - 1];
    imgFlexHtml.onload = () => {
        loadDragonList[nodos - 1].style.zIndex = '-1';
        loadDragonList[nodos - 1].style.opacity = '0';
        loadDragonList[nodos - 1].style.visibility = 'hidden';
    }
    return loadDragonOff(nodos - 1);
}
function loadDragonOffAll() {
    loadDragonList.forEach(loadDragon => {
        loadDragon.style.zIndex = '-1';
        loadDragon.style.opacity = '0';
        loadDragon.style.visibility = 'hidden';
    });
}
function loadDragonCenterOn() {
    loadDragonCenter.style.zIndex = '998';
    loadDragonCenter.style.opacity = '1';
    loadDragonCenter.style.visibility = 'visible';
}
function loadDragonCenterOff() {
    loadDragonCenter.style.zIndex = '-1';
    loadDragonCenter.style.opacity = '0';
    loadDragonCenter.style.visibility = 'hidden';
}