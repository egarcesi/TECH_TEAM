
// Para las imagenes con transicion del inicio
let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

$(document).ready(function() {
    var slides = $('#layerslider .ls-slide');
    var currentIndex = 0;
    var slideInterval = 4500;  // Intervalo de cambio en milisegundos (4.5 segundos)

    function showSlide(index) {
        slides.removeClass('active').eq(index).addClass('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Navegación automática
    setInterval(nextSlide, slideInterval);

    // Navegación manual
    $('.ls-nav-next').on('click', nextSlide);
    $('.ls-nav-prev').on('click', prevSlide);

    // Inicializar el slider
    showSlide(currentIndex);
});


// LINEA DEL TIEMPO

function toggleDetails(button) {
    // Obtener el contenedor de detalles
    const details = button.parentElement.nextElementSibling;
  
    // Mostrar u ocultar el contenedor
    if (details.style.display === "block") {
      details.style.display = "none";
      button.textContent = "+"; // Cambiar el texto del botón
    } else {
      details.style.display = "block";
      button.textContent = "-"; // Cambiar el texto del botón
    }
  }


// SUSCRIPCION BOLETIN

document.getElementById('newsletterForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    if (!email) {
        alert("Por favor, ingresa un correo válido.");
        return;
    }

    const scriptURL = "https://script.google.com/macros/s/AKfycbxMla_S2-i8M528z2JJ-qM_Y42V0OukDo9U9wqVkQElAPLHAKwRi6YP4bx4hjJuLJMx/exec";

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded' // Asegura que el formato sea correcto
            },
            body: new URLSearchParams({ email: email }) // Convierte los datos al formato esperado
        });

        const result = await response.json();
        if (result.success) {
            alert(result.message);
        } else {
            alert("Error: " + result.message);
        }
    } catch (error) {
        console.error("Error al enviar datos:", error);
        alert("Ocurrió un problema. Por favor, intenta nuevamente.");
    }
});

// SECCION HERO
  
  document.getElementById('cta2').addEventListener('click', () => {
    // Redirige a la sección de proyectos destacados
    window.location.href = "#section-projects";
  });



// FORMULARIO DE CONTACTENOS

document.getElementById('form-contacto').addEventListener('submit', (e) => {
  e.preventDefault(); // Evita el envío por defecto
  alert('¡Gracias! Hemos recibido tu mensaje.');
  e.target.reset(); // Limpia el formulario después de enviar
});




