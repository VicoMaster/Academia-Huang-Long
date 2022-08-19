/** 
 * Developer: Andrés F. Rivera 
 * Description: Script para agregar imagenes al carrusel
 * Observations: No se necesita poner algun nombre en especial
 * Comments: Tamaño imgs [Small: 640*480] [Medium/High: 1920*1440] aproximadamente
 * Comments: El orden de las imagenes para cada arreglo debe respetarse [1-small = 1]
 **/

//En el archivo ligthbox.js se agrega un contador al final de este nombre
const NOMBRE_IMAGEN_DESCARGAR = 'Imagen-Gallery-';

const LA_ACADEMIA = [
    "img/img-gallery/la-academia/001.jpg",
    "img/img-gallery/la-academia/002.jpg",
    "img/img-gallery/la-academia/003.jpg",
    "img/img-gallery/la-academia/004.jpg",
    "img/img-gallery/la-academia/005.jpg",
    "img/img-gallery/la-academia/006.jpg",
    "img/img-gallery/la-academia/007.jpg",
    "img/img-gallery/la-academia/008.jpg",
    "img/img-gallery/la-academia/009.jpg",
    "img/img-gallery/la-academia/010.jpg",
    "img/img-gallery/la-academia/011.jpg",
    "img/img-gallery/la-academia/012.jpg",
    "img/img-gallery/la-academia/013.jpg",
    "img/img-gallery/la-academia/014.jpg",
    "img/img-gallery/la-academia/015.jpg",
    "img/img-gallery/la-academia/016.jpg",
    "img/img-gallery/la-academia/017.jpg"
];

const LA_ACADEMIA_SMALL = [
    "img/img-gallery/la-academia/001-small.jpg",
    "img/img-gallery/la-academia/002-small.jpg",
    "img/img-gallery/la-academia/003-small.jpg",
    "img/img-gallery/la-academia/004-small.jpg",
    "img/img-gallery/la-academia/005-small.jpg",
    "img/img-gallery/la-academia/006-small.jpg",
    "img/img-gallery/la-academia/007-small.jpg",
    "img/img-gallery/la-academia/008-small.jpg",
    "img/img-gallery/la-academia/009-small.jpg",
    "img/img-gallery/la-academia/010-small.jpg",
    "img/img-gallery/la-academia/011-small.jpg",
    "img/img-gallery/la-academia/012-small.jpg",
    "img/img-gallery/la-academia/013-small.jpg",
    "img/img-gallery/la-academia/014-small.jpg",
    "img/img-gallery/la-academia/015-small.jpg",
    "img/img-gallery/la-academia/016-small.jpg",
    "img/img-gallery/la-academia/017-small.jpg"
];

const NUESTRO_SIFU = [
    "img/img-gallery/nuestro-sifu/001.jpg",
    "img/img-gallery/nuestro-sifu/002.jpg",
    "img/img-gallery/nuestro-sifu/003.jpg",
    "img/img-gallery/nuestro-sifu/004.jpg",
    "img/img-gallery/nuestro-sifu/005.jpg",
    "img/img-gallery/nuestro-sifu/006.jpg",
    "img/img-gallery/nuestro-sifu/007.jpg",
    "img/img-gallery/nuestro-sifu/008.jpg",
    "img/img-gallery/nuestro-sifu/009.jpg",
    "img/img-gallery/nuestro-sifu/010.jpg",
    "img/img-gallery/nuestro-sifu/011.jpg",
    "img/img-gallery/nuestro-sifu/012.jpg",
    "img/img-gallery/nuestro-sifu/013.jpg",
    "img/img-gallery/nuestro-sifu/014.jpg",
    "img/img-gallery/nuestro-sifu/015.jpg",
    "img/img-gallery/nuestro-sifu/016.jpg",
    "img/img-gallery/nuestro-sifu/017.jpg",
    "img/img-gallery/nuestro-sifu/018.jpg",
    "img/img-gallery/nuestro-sifu/019.jpg",
    "img/img-gallery/nuestro-sifu/020.jpg",
    "img/img-gallery/nuestro-sifu/021.jpg",
    "img/img-gallery/nuestro-sifu/022.jpg",
    "img/img-gallery/nuestro-sifu/023.jpg",
    "img/img-gallery/nuestro-sifu/024.jpg",
    "img/img-gallery/nuestro-sifu/025.jpg",
    "img/img-gallery/nuestro-sifu/026.jpg"
];

const NUESTRO_SIFU_SMALL = [
    "img/img-gallery/nuestro-sifu/001-small.jpg",
    "img/img-gallery/nuestro-sifu/002-small.jpg",
    "img/img-gallery/nuestro-sifu/003-small.jpg",
    "img/img-gallery/nuestro-sifu/004-small.jpg",
    "img/img-gallery/nuestro-sifu/005-small.jpg",
    "img/img-gallery/nuestro-sifu/006-small.jpg",
    "img/img-gallery/nuestro-sifu/007-small.jpg",
    "img/img-gallery/nuestro-sifu/008-small.jpg",
    "img/img-gallery/nuestro-sifu/009-small.jpg",
    "img/img-gallery/nuestro-sifu/010-small.jpg",
    "img/img-gallery/nuestro-sifu/011-small.jpg",
    "img/img-gallery/nuestro-sifu/012-small.jpg",
    "img/img-gallery/nuestro-sifu/013-small.jpg",
    "img/img-gallery/nuestro-sifu/014-small.jpg",
    "img/img-gallery/nuestro-sifu/015-small.jpg",
    "img/img-gallery/nuestro-sifu/016-small.jpg",
    "img/img-gallery/nuestro-sifu/017-small.jpg",
    "img/img-gallery/nuestro-sifu/018-small.jpg",
    "img/img-gallery/nuestro-sifu/019-small.jpg",
    "img/img-gallery/nuestro-sifu/020-small.jpg",
    "img/img-gallery/nuestro-sifu/021-small.jpg",
    "img/img-gallery/nuestro-sifu/022-small.jpg",
    "img/img-gallery/nuestro-sifu/023-small.jpg",
    "img/img-gallery/nuestro-sifu/024-small.jpg",
    "img/img-gallery/nuestro-sifu/025-small.jpg",
    "img/img-gallery/nuestro-sifu/026-small.jpg"
];

const MAESTROS_PRACTICANTES = [
    "img/img-gallery/maestros-practicantes/001.jpg",
    "img/img-gallery/maestros-practicantes/002.jpg",
    "img/img-gallery/maestros-practicantes/003.jpg",
    "img/img-gallery/maestros-practicantes/004.jpg",
    "img/img-gallery/maestros-practicantes/005.jpg",
    "img/img-gallery/maestros-practicantes/006.jpg",
    "img/img-gallery/maestros-practicantes/007.jpg",
    "img/img-gallery/maestros-practicantes/008.jpg",
    "img/img-gallery/maestros-practicantes/009.jpg",
    "img/img-gallery/maestros-practicantes/010.jpg",
    "img/img-gallery/maestros-practicantes/011.jpg",
    "img/img-gallery/maestros-practicantes/012.jpg",
    "img/img-gallery/maestros-practicantes/013.jpg",
    "img/img-gallery/maestros-practicantes/014.jpg",
    "img/img-gallery/maestros-practicantes/015.jpg",
    "img/img-gallery/maestros-practicantes/016.jpg",
    "img/img-gallery/maestros-practicantes/017.jpg",
    "img/img-gallery/maestros-practicantes/018.jpg",
    "img/img-gallery/maestros-practicantes/019.jpg",
    "img/img-gallery/maestros-practicantes/020.jpg",
    "img/img-gallery/maestros-practicantes/021.jpg",
    "img/img-gallery/maestros-practicantes/022.jpg",
    "img/img-gallery/maestros-practicantes/023.jpg",
    "img/img-gallery/maestros-practicantes/024.jpg",
    "img/img-gallery/maestros-practicantes/025.jpg",
    "img/img-gallery/maestros-practicantes/026.jpg",
    "img/img-gallery/maestros-practicantes/027.jpg",
    "img/img-gallery/maestros-practicantes/028.jpg",
    "img/img-gallery/maestros-practicantes/029.jpg",
    "img/img-gallery/maestros-practicantes/030.jpg",
    "img/img-gallery/maestros-practicantes/031.jpg",
    "img/img-gallery/maestros-practicantes/032.jpg",
    "img/img-gallery/maestros-practicantes/033.jpg",
    "img/img-gallery/maestros-practicantes/034.jpg",
    "img/img-gallery/maestros-practicantes/035.jpg",
    "img/img-gallery/maestros-practicantes/036.jpg",
    "img/img-gallery/maestros-practicantes/037.jpg"
];

const MAESTROS_PRACTICANTES_SMALL = [
    "img/img-gallery/maestros-practicantes/001-small.jpg",
    "img/img-gallery/maestros-practicantes/002-small.jpg",
    "img/img-gallery/maestros-practicantes/003-small.jpg",
    "img/img-gallery/maestros-practicantes/004-small.jpg",
    "img/img-gallery/maestros-practicantes/005-small.jpg",
    "img/img-gallery/maestros-practicantes/006-small.jpg",
    "img/img-gallery/maestros-practicantes/007-small.jpg",
    "img/img-gallery/maestros-practicantes/008-small.jpg",
    "img/img-gallery/maestros-practicantes/009-small.jpg",
    "img/img-gallery/maestros-practicantes/010-small.jpg",
    "img/img-gallery/maestros-practicantes/011-small.jpg",
    "img/img-gallery/maestros-practicantes/012-small.jpg",
    "img/img-gallery/maestros-practicantes/013-small.jpg",
    "img/img-gallery/maestros-practicantes/014-small.jpg",
    "img/img-gallery/maestros-practicantes/015-small.jpg",
    "img/img-gallery/maestros-practicantes/016-small.jpg",
    "img/img-gallery/maestros-practicantes/017-small.jpg",
    "img/img-gallery/maestros-practicantes/018-small.jpg",
    "img/img-gallery/maestros-practicantes/019-small.jpg",
    "img/img-gallery/maestros-practicantes/020-small.jpg",
    "img/img-gallery/maestros-practicantes/021-small.jpg",
    "img/img-gallery/maestros-practicantes/022-small.jpg",
    "img/img-gallery/maestros-practicantes/023-small.jpg",
    "img/img-gallery/maestros-practicantes/024-small.jpg",
    "img/img-gallery/maestros-practicantes/025-small.jpg",
    "img/img-gallery/maestros-practicantes/026-small.jpg",
    "img/img-gallery/maestros-practicantes/027-small.jpg",
    "img/img-gallery/maestros-practicantes/028-small.jpg",
    "img/img-gallery/maestros-practicantes/029-small.jpg",
    "img/img-gallery/maestros-practicantes/030-small.jpg",
    "img/img-gallery/maestros-practicantes/031-small.jpg",
    "img/img-gallery/maestros-practicantes/032-small.jpg",
    "img/img-gallery/maestros-practicantes/033-small.jpg",
    "img/img-gallery/maestros-practicantes/034-small.jpg",
    "img/img-gallery/maestros-practicantes/035-small.jpg",
    "img/img-gallery/maestros-practicantes/036-small.jpg",
    "img/img-gallery/maestros-practicantes/037-small.jpg"
];


const IWCO_CO = [
    "img/img-gallery/iwco-co/001.jpg",
    "img/img-gallery/iwco-co/002.jpg",
    "img/img-gallery/iwco-co/003.jpg",
    "img/img-gallery/iwco-co/004.jpg",
    "img/img-gallery/iwco-co/005.jpg",
    "img/img-gallery/iwco-co/006.jpg",
    "img/img-gallery/iwco-co/007.jpg",
    "img/img-gallery/iwco-co/008.jpg",
    "img/img-gallery/iwco-co/009.jpg",
    "img/img-gallery/iwco-co/010.jpg",
    "img/img-gallery/iwco-co/011.jpg",
    "img/img-gallery/iwco-co/012.jpg",
    "img/img-gallery/iwco-co/013.jpg",
    "img/img-gallery/iwco-co/014.jpg",
    "img/img-gallery/iwco-co/015.jpg",
    "img/img-gallery/iwco-co/016.jpg",
    "img/img-gallery/iwco-co/017.jpg",
    "img/img-gallery/iwco-co/018.jpg",
    "img/img-gallery/iwco-co/019.jpg",
    "img/img-gallery/iwco-co/020.jpg",
    "img/img-gallery/iwco-co/021.jpg",
    "img/img-gallery/iwco-co/022.jpg",
    "img/img-gallery/iwco-co/023.jpg",
    "img/img-gallery/iwco-co/024.jpg",
    "img/img-gallery/iwco-co/025.jpg",
    "img/img-gallery/iwco-co/026.jpg",
    "img/img-gallery/iwco-co/027.jpg",
    "img/img-gallery/iwco-co/028.jpg",
    "img/img-gallery/iwco-co/029.jpg",
    "img/img-gallery/iwco-co/030.jpg",
    "img/img-gallery/iwco-co/031.jpg",
    "img/img-gallery/iwco-co/032.jpg",
    "img/img-gallery/iwco-co/033.jpg",
    "img/img-gallery/iwco-co/034.jpg",
    "img/img-gallery/iwco-co/035.jpg",
    "img/img-gallery/iwco-co/036.jpg"
];
const IWCO_CO_SMALL = [
    "img/img-gallery/iwco-co/001-small.jpg",
    "img/img-gallery/iwco-co/002-small.jpg",
    "img/img-gallery/iwco-co/003-small.jpg",
    "img/img-gallery/iwco-co/004-small.jpg",
    "img/img-gallery/iwco-co/005-small.jpg",
    "img/img-gallery/iwco-co/006-small.jpg",
    "img/img-gallery/iwco-co/007-small.jpg",
    "img/img-gallery/iwco-co/008-small.jpg",
    "img/img-gallery/iwco-co/009-small.jpg",
    "img/img-gallery/iwco-co/010-small.jpg",
    "img/img-gallery/iwco-co/011-small.jpg",
    "img/img-gallery/iwco-co/012-small.jpg",
    "img/img-gallery/iwco-co/013-small.jpg",
    "img/img-gallery/iwco-co/014-small.jpg",
    "img/img-gallery/iwco-co/015-small.jpg",
    "img/img-gallery/iwco-co/016-small.jpg",
    "img/img-gallery/iwco-co/017-small.jpg",
    "img/img-gallery/iwco-co/018-small.jpg",
    "img/img-gallery/iwco-co/019-small.jpg",
    "img/img-gallery/iwco-co/020-small.jpg",
    "img/img-gallery/iwco-co/021-small.jpg",
    "img/img-gallery/iwco-co/022-small.jpg",
    "img/img-gallery/iwco-co/023-small.jpg",
    "img/img-gallery/iwco-co/024-small.jpg",
    "img/img-gallery/iwco-co/025-small.jpg",
    "img/img-gallery/iwco-co/026-small.jpg",
    "img/img-gallery/iwco-co/027-small.jpg",
    "img/img-gallery/iwco-co/028-small.jpg",
    "img/img-gallery/iwco-co/029-small.jpg",
    "img/img-gallery/iwco-co/030-small.jpg",
    "img/img-gallery/iwco-co/031-small.jpg",
    "img/img-gallery/iwco-co/032-small.jpg",
    "img/img-gallery/iwco-co/033-small.jpg",
    "img/img-gallery/iwco-co/034-small.jpg",
    "img/img-gallery/iwco-co/035-small.jpg",
    "img/img-gallery/iwco-co/036-small.jpg"
];


const PACK_IMAGENES = {
    'btn-0': [LA_ACADEMIA, LA_ACADEMIA_SMALL],
    'btn-1': [NUESTRO_SIFU, NUESTRO_SIFU_SMALL],
    'btn-2': [MAESTROS_PRACTICANTES, MAESTROS_PRACTICANTES_SMALL],
    'btn-3': [IWCO_CO, IWCO_CO_SMALL]
};

//Devuelve un arreglo de imagenes con las rutas de argumento
function agregarBloquesImg(rutasImg) {
    let arrayImg = [],
        indiceAlt = 1,
        id = 0;
    rutasImg.forEach(ruta => {
        let atributoAlt = `Imagen de Gallería ${indiceAlt}`,
            img = document.createElement('img');
        img.src = ruta;
        img.alt = atributoAlt;
        img.id = id;
        arrayImg.push(img);
        indiceAlt++;
        id++;
    });
    return arrayImg;
}

export { PACK_IMAGENES, NOMBRE_IMAGEN_DESCARGAR, agregarBloquesImg };