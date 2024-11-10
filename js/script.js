AOS.init({
    offset: 50,
    anchorPlacement: 'top-bottom',
});

$(document).ready(function(){
    // nav 
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 150; 

    window.addEventListener('scroll', function() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (Math.abs(scrollTop - lastScrollTop) <= scrollThreshold) {
            return; 
        }
        if (scrollTop > lastScrollTop) {
            navbar.classList.add('hide');
            navbar.classList.remove('show');
        } else {
            navbar.classList.remove('hide');
            navbar.classList.add('show');
        }
        lastScrollTop = scrollTop;
    });

    // typed.js INDEX
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

    // form footer
    $('#submit').click(function() {
        let name = $('#user_name').val();
        let email = $('#user_email').val();
        var message = "";
        if (name == "" || email == "" ) {
            message = "Debes completar tu nombre y correo para poder suscribirte a nuestra Newsletter";
        } else if (!validateEmail(email)) {
            message = "Por favor, inserta una dirección de correo válida";
        } else {
            message = "¡Muchas gracias por contactar con nosotros! Recibirás una respuesta lo antes posible";
        }
        $("#modal-text").html(message);
        $("#thanks-modal").css('display', 'block');
        return false;
    });
    $('.close').click(function(){
        $("#thanks-modal").css('display', 'none');
    });
    const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    // hover datos y estadisticas MODA
    updateImages();
    $(window).resize(updateImages);
});
// poster fabric.js MODA
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('canvas-container');
    const canvas = new fabric.Canvas('posterCanvas');

    canvas.setWidth(container.clientWidth);
    canvas.setHeight(container.clientHeight);

    // cargar una imagen de fondo
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
    const anchoPantalla = window.innerWidth;
    let bolsaImg;
    if(anchoPantalla >=992) {
        bolsaImg = './media/Poster/Bolsa.png'
    }else {
        bolsaImg = './media/Poster/Bolsa-vertical.png'
    }

    // loop imágenes
    const rutaBase = './media/Poster/'; 
    const cantidadImagenes = 8;
    var imageIndex = 1;

    // agregar imagen al canvas
    document.getElementById('addImage').addEventListener('click', function() {
        const nombreArchivo = `canva_0${imageIndex}.png`;
        const rutaImagen = rutaBase + nombreArchivo;
        fabric.Image.fromURL(rutaImagen, function(img) {
        img.set({
            left: canvas.width/2 - (img.width/2)*0.2,
            top: canvas.height/2 - (img.height/2)*0.2,
            scaleX: 0.2,
            scaleY: 0.2
        });
        canvas.add(img);
        imageIndex ++;
        const boton = document.getElementById("addImage")
        if (imageIndex == 9) {
            boton.classList.add("btn-disabled"); 
            boton.classList.remove("btn-addimg");
            boton.disabled = true;
        } else {
            boton.classList.remove("btn-disabled");
            boton.classList.add("btn-addimg");
            boton.disabled = false;
        }
        });
    });
    fabric.Image.fromURL(bolsaImg, function(img) {
        img.set({
            left: 0,
            top: 0,
            scaleX: canvas.width / img.width,
            scaleY: canvas.height / img.height,
            selectable: false,
            evented: false
        });
        canvas.add(img);
        canvas.imgBolsa = img;
    });
    canvas.on('object:added', () => {
        if (canvas.imgBolsa) {
            canvas.bringToFront(canvas.imgBolsa);
        }
    });
    // agregar texto al canvas
    document.getElementById('addText').addEventListener('click', function() {
        const text = new fabric.IText('Texto editable', {
            left: 100,
            top: 100,
            fontFamily: 'Arial',
            fontWeight: '900',
            fill: '#FADADE',
            fontSize: 24
        });
        canvas.add(text);
        canvas.setActiveObject(text);
    });
});

// carrusel casos archivados MODA
document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            992: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
        },
    });
});

// hover cameron russel MODA
function hoverCameron() {
    if (window.innerWidth > 992) {
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
    }   
}
hoverCameron();
window.addEventListener('resize', hoverCameron);

//   carrusel casos historicos MODA
document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".myHorizontalSwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        mousewheel: {
            invert: false,
            releaseOnEdges: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
        },
    });
});
// carrusel anonimos MODA
document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".swiper-anonimos", {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
        },
    });
});
// hover datos y estadisticas MODA
const images = [
    { id: "#image1", hover: "AlexanderWang", },
    { id: "#image2", hover: "BruceWeber", },
    { id: "#image3", hover: "DavidHamilton", },
    { id: "#image4", hover: "JeanLucBrunel", },
    { id: "#image5", hover: "JohnGalliano", },
    { id: "#image6", hover: "KarlLagerfeld", },
    { id: "#image7", hover: "MarioTestino", },
    { id: "#image8", hover: "PatrickDemarchelier", },
    { id: "#image9", hover: "TerryRichardson", },
];
function updateImages() {
    if (window.innerWidth < 992) {
        images.forEach(image => {
            $(image.id).attr("src", `media/GDE_MaltratadoresHover/${image.hover}Hover.JPG`);
        });
        images.forEach(image => {
            $(image.id).off("mouseenter mouseleave");
        });
    } else {
        images.forEach(image => {
            $(image.id).attr("src", `media/GDE_Maltratadores/${image.hover}.jpg`);
            $(image.id).hover(
                function() {
                    $(this).attr("src", `media/GDE_MaltratadoresHover/${image.hover}Hover.JPG`);
                },
                function() {
                    $(this).attr("src", `media/GDE_Maltratadores/${image.hover}.jpg`);
                }
            );
        });
    }
}