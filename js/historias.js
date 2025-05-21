document.addEventListener("DOMContentLoaded", () => {
    // SECCIÓN PROYECTOS DESTACADOS
  
    // Selecciona todos los botones "Ver más"
    const viewMoreButtons = document.querySelectorAll('.view-more');
  
    // Añade un evento click a cada botón
    viewMoreButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Oculta todos los detalles de los proyectos
        document.querySelectorAll('.project-details').forEach(detail => {
          detail.style.display = 'none';
        });
  
        // Muestra los detalles del proyecto correspondiente
        const projectId = button.getAttribute('data-project');
        const projectDetails = document.getElementById(`project-${projectId}`);
  
        // Verifica si el contenedor ya está visible
        if (projectDetails.style.display === 'block') {
          projectDetails.style.display = 'none';
        } else {
          projectDetails.style.display = 'block';
        }
      });
    });
  
    // SECCIÓN GALERÍA
  
    // Seleccionar elementos
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const caption = document.getElementById("caption");
    const closeModal = document.getElementById("close");
  
    // Abrir modal al hacer clic en la imagen
    document.querySelectorAll(".gallery-container img").forEach(img => {
      img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        caption.textContent = img.alt;
      });
    });
  
    // Cerrar modal al hacer clic en el botón de cerrar
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Cerrar modal al hacer clic fuera de la imagen
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  