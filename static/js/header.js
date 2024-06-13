document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector("nav");
    const hamburger = document.querySelector(".hamburger");
    const closeBtn = document.querySelector(".close");
    const dropdowns = document.querySelectorAll('.dropdown');
    const overlay = document.querySelector('.page-overlay');

    function openMenu() {
      nav.classList.add('show');
      overlay.classList.add('is-visible');
      hamburger.style.display = 'none'; // Hide the hamburger when menu is open
    }

    function closeMenu() {
      nav.classList.remove('show');
      overlay.classList.remove('is-visible');
      hamburger.style.display = 'block'; // Show the hamburger when menu is closed
    }

    hamburger.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    /* Dropdown phone */
    dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('a');
      const svg = link.querySelector('svg');
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const megaMenu = dropdown.querySelector('.mega-menu');
        megaMenu.classList.toggle('open');
        svg.classList.toggle('rotate');
      });
    });

    // Ensure menu is closed when resizing the window
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        if (nav.classList.contains('show')) {
          closeMenu();
        }
        hamburger.style.display = 'none'; // Hide the hamburger for larger screens
      } else {
        if (!nav.classList.contains('show')) {
          hamburger.style.display = 'block'; // Show the hamburger for smaller screens only if menu is not open
        }
      }
    });
  });