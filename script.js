
    // ─── Theme Toggle ────────────────────────────────────────
    const themeBtnDesktop = document.getElementById('themeBtn-desktop');
    const themeBtnMobile  = document.getElementById('themeBtn-mobile');
    const html = document.documentElement;

    function setTheme(theme) {
      html.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      const icon = theme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
      if (themeBtnDesktop) themeBtnDesktop.innerHTML = icon;
      if (themeBtnMobile)  themeBtnMobile.innerHTML  = icon;
    }

    let theme = localStorage.getItem('theme') ||
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(theme);

    [themeBtnDesktop, themeBtnMobile].forEach(btn => {
      if (btn) {
        btn.addEventListener('click', () => {
          theme = theme === 'dark' ? 'light' : 'dark';
          setTheme(theme);
        });
      }
    });

    // ─── Hamburger Menu ──────────────────────────────────────
    const hamburger = document.getElementById('hamburger');
    const navLinks   = document.getElementById('navLinks');

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
      });

      // Close menu when clicking link
      navLinks.querySelectorAll('a:not([href="#"])').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
        });
      });
    }

    // ─── Simple typing animation ─────────────────────────────
    const typingEl = document.querySelector('.typing');
    if (typingEl) {
      const words = ["Web Developer", "Front-End Creator"];
      let i = 0, j = 0, isDeleting = false;

      function type() {
        const word = words[i];
        typingEl.textContent = word.substring(0, j);

        if (!isDeleting && j < word.length) {
          j++;
          setTimeout(type, 90);
        } else if (isDeleting && j > 0) {
          j--;
          setTimeout(type, 50);
        } else {
          isDeleting = !isDeleting;
          if (!isDeleting) i = (i + 1) % words.length;
          setTimeout(type, isDeleting ? 40 : 1400);
        }
      }
      type();
    }

   
// Get elements
const modal = document.getElementById("certificateModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-modal");

// Find the button in the Machine Learning card
const viewCertBtn = document.querySelector(".certificate-card button");

// When button is clicked → open modal
viewCertBtn.addEventListener("click", function() {
  modal.style.display = "block";
  // Optional: you can change image src dynamically if needed later
  // modalImg.src = this.getAttribute("data-image") || "/image/python.jpeg";
});

// Close when clicking ×
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close when clicking outside the image
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
 // Show Syllabus Popup when page loads
    window.onload = function() {
      setTimeout(() => {
        const popup = document.getElementById('syllabusPopup');
        if (popup) {
          popup.style.display = 'flex';
        }
      }, 1200); // 1.2 second delay after page load
    };

    function closeSyllabusPopup() {
      const popup = document.getElementById('syllabusPopup');
      if (popup) popup.style.display = 'none';
    }
  
