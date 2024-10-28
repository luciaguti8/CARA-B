// Nav
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const scrollThreshold = 150; // Cambia este valor si deseas un umbral diferente

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Solo ejecutar si el scroll supera el umbral
    if (Math.abs(scrollTop - lastScrollTop) <= scrollThreshold) {
        return; // Si el desplazamiento es menor que el umbral, no hacer nada
    }

    if (scrollTop > lastScrollTop) {
        // Scroll Down
        navbar.classList.add('hide');
        navbar.classList.remove('show');
    } else {
        // Scroll Up
        navbar.classList.remove('hide');
        navbar.classList.add('show');
    }
    lastScrollTop = scrollTop;
});


// INDEX
if (document.querySelector('#quote-intro') && document.querySelector('#quote-team')) {
    var typed = new Typed('#quote-intro', {
        strings: ['Prepárate para ver el mundo con nuevos ojos...', 'Prepárate para descubrir su "CARA B".'],
        typeSpeed: 70,
        loop: true,
    });
    var typed = new Typed('#quote-team', {
        strings: ['"CARA B" se compromete a abrir los ojos del mundo...', 'Y mostrar la verdad incómoda que yace debajo de la superficie de nuestro día a día.'],
        typeSpeed: 70,
        loop: true,
    });
};

// CARROUSEL EJEMPLARES
function openModal(imageUrl) {
    document.getElementById('modalImage').src = imageUrl;
    var imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
}

// POSTER 
// Espera a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el canvas de Fabric.js
    const canvas = new fabric.Canvas('posterCanvas');
    // Crea un rectángulo y agrégalo al lienzo
    const rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: "blue",
        width: 60,
        height: 70,
    });
    canvas.add(rect);
  
    // Cargar una imagen de fondo
    fabric.Image.fromURL('./media/Poster/Fondo.jpg', function(img) {
        img.set({
            selectable: false,
            evented: false
        });     
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
            scaleX: canvas.width / img.width,
            scaleY: canvas.height / img.height
        });
    });

    // Loop imágenes
    // Ruta base de las imágenes y cantidad de imágenes a cargar
    const rutaBase = './media/Poster/';  // Cambia esto a la ruta donde tienes las imágenes
    const cantidadImagenes = 7;

    // Cargar cada imagen usando un bucle
    for (let i = 1; i <= cantidadImagenes; i++) {
        const nombreArchivo = `canva_0${i}.png`;
        const rutaImagen = rutaBase + nombreArchivo;

        // Cargar y agregar cada imagen al lienzo
        fabric.Image.fromURL(rutaImagen, function(img) {
        // Configurar posición y tamaño de cada imagen en el canvas (ajusta según tus necesidades)
        img.set({
            left: i * 100,   // Aumenta la posición horizontal para cada imagen
            top: 50,         // Posición vertical (puedes cambiarla según necesites)
            scaleX: 0.05,     // Escala en el eje X (para hacer la imagen más pequeña)
            scaleY: 0.05      // Escala en el eje Y
        });
        // Agrega la imagen al canvas
        canvas.add(img);
        });
    }
    fabric.Image.fromURL('./media/Poster/Bolsa.png', function(img) {
        // Configurar posición y tamaño de cada imagen en el canvas (ajusta según tus necesidades)
        img.set({
            left: 0,   // Aumenta la posición horizontal para cada imagen
            top: 0,         // Posición vertical (puedes cambiarla según necesites)
            scaleX: canvas.width / img.width,
            scaleY: canvas.height / img.height,
            selectable: false,
            evented: false
        });
        // Agrega la imagen al canvas
        canvas.add(img);
    });
  
    // // Agregar texto al canvas
    // document.getElementById('addText').addEventListener('click', function() {
    //     const text = new fabric.IText('Texto editable', {
    //         left: 100,
    //         top: 100,
    //         fontFamily: 'Arial',
    //         fill: '#000000',
    //         fontSize: 24
    //     });
    //     canvas.add(text);
    //     canvas.setActiveObject(text);
    // });
  
    // // Agregar imagen al canvas
    // document.getElementById('addImage').addEventListener('click', function() {
    //     document.getElementById('imageLoader').click();
    // });
  
    // // Manejar la carga de la imagen
    // document.getElementById('imageLoader').addEventListener('change', function(e) {
    //     const reader = new FileReader();
    //     reader.onload = function(event) {
    //         const imgObj = new Image();
    //         imgObj.src = event.target.result;
    //         imgObj.onload = function() {
    //             const img = new fabric.Image(imgObj);
    //             img.set({
    //                 left: 150,
    //                 top: 150,
    //                 scaleX: 0.5,
    //                 scaleY: 0.5
    //             });
    //             canvas.add(img);
    //             canvas.setActiveObject(img);
    //         }
    //     }
    //     reader.readAsDataURL(e.target.files[0]);
    // });
  
    // Evento de guardado del botón
    document.getElementById('savePoster').addEventListener('click', function() {
        try {
            const dataURL = canvas.toDataURL({
                format: 'png'
            });

            // Crear un enlace para descargar la imagen
            const link = document.createElement('a');
            link.href = dataURL;
            link.download = 'mi-poster.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error("Error al guardar la imagen:", error);
        }
    });
  });

// HOVER CAMERON RUSSEL
document.querySelectorAll('.gallery-item').forEach((item) => {
    const hoverImage = item.querySelector('.hover-image');

    // Evento de movimiento del ratón
    item.addEventListener('mousemove', (event) => {
        const { offsetX, offsetY } = event;
        const radius = 80; // Ajusta el radio según prefieras

        // Cambiar el clip-path para crear el efecto de máscara
        hoverImage.style.clipPath = `circle(${radius}px at ${offsetX}px ${offsetY}px)`;
    });

    // Cuando el ratón sale, ocultar la máscara
    item.addEventListener('mouseleave', () => {
        hoverImage.style.clipPath = 'circle(0% at 50% 50%)';
    });
});
  // CARROUSEL HORIZONTAL
document.addEventListener('DOMContentLoaded', function() {
    // Inicialización del carrusel Swiper
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3, // Número de slides visibles
        spaceBetween: 30, // Espacio entre slides (en píxeles)
        slidesPerGroup: 3, // Número de slides que se moverán en cada navegación
        loop: true, // Habilita el loop
        loopFillGroupWithBlank: true, // Rellena el grupo con slides en blanco si es necesario
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // Ajustes responsivos
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
        },
    });
  });

  //   CARROUSEL CARDS 
document.addEventListener('DOMContentLoaded', function() {
    // Inicialización del carrusel Swiper
    var swiper = new Swiper(".myHorizontalSwiper", {
        slidesPerView: 4, // Número de slides visibles
        spaceBetween: 30, // Espacio entre slides (en píxeles)
        mousewheel: {
            invert: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // Opcional: Activar navegación con botones
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
        breakpoints: {
            // Ajustes responsivos
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            // 768: {
            //     slidesPerView: 3,
            //     spaceBetween: 20,
            // },
            // 992: {
            //     slidesPerView: 4,
            //     spaceBetween: 30,
            // },
        },
    });
});
