document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('a.nav-link, a.btn');
    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        if (link.hash) {
          event.preventDefault();
          const target = document.querySelector(link.hash);
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });
  
    // Add button click animations
    const buttons = document.querySelectorAll('button, a.btn');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => (button.style.transform = 'scale(1)'), 100);
      });
    });
  
    // Modal animations
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      modal.addEventListener('show.bs.modal', () => {
        modal.style.animation = 'fadeIn 0.5s ease-in-out';
      });
      modal.addEventListener('hide.bs.modal', () => {
        modal.style.animation = 'fadeOut 0.5s ease-in-out';
      });
    });
  
    // Add carousel fade-in effect
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach((item, index) => {
      item.style.opacity = 0;
      item.style.transition = 'opacity 0.5s ease-in-out';
      if (index === 0) item.style.opacity = 1; // Set the first item visible
  
      const observer = new MutationObserver(() => {
        if (item.classList.contains('active')) {
          item.style.opacity = 1;
        } else {
          item.style.opacity = 0;
        }
      });
      observer.observe(item, { attributes: true });
    });
  });
  