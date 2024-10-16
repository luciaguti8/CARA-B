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