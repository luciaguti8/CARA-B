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
  
    // Cargar una imagen de fondo
    fabric.Image.fromURL('https://picsum.photos/800/600m', function(img) {
        img.set({
            selectable: false,
            evented: false
        });
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
            scaleX: canvas.width / img.width,
            scaleY: canvas.height / img.height
        });
    });
  
    // Agregar texto al canvas
    document.getElementById('addText').addEventListener('click', function() {
        const text = new fabric.IText('Texto editable', {
            left: 100,
            top: 100,
            fontFamily: 'Arial',
            fill: '#000000',
            fontSize: 24
        });
        canvas.add(text);
        canvas.setActiveObject(text);
    });
  
    // Agregar imagen al canvas
    document.getElementById('addImage').addEventListener('click', function() {
        document.getElementById('imageLoader').click();
    });
  
    // Manejar la carga de la imagen
    document.getElementById('imageLoader').addEventListener('change', function(e) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imgObj = new Image();
            imgObj.src = event.target.result;
            imgObj.onload = function() {
                const img = new fabric.Image(imgObj);
                img.set({
                    left: 150,
                    top: 150,
                    scaleX: 0.5,
                    scaleY: 0.5
                });
                canvas.add(img);
                canvas.setActiveObject(img);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    });
  
    // Guardar el póster como imagen
document.getElementById('savePoster').addEventListener('click', function() {
    const dataURL = canvas.toDataURL({
        format: 'png',
        quality: 0.8
        });
       // Crear un enlace para descargar la imagen
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'mi-poster.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
