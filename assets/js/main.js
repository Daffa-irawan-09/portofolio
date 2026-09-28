document.addEventListener("DOMContentLoaded", function () {
  // Navbar scroll state
  var nav = document.querySelector(".nav");
  var onScroll = function () {
    if (window.scrollY > 12) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile menu toggle
  var toggle = document.querySelector(".nav-toggle");
  var mobileMenu = document.querySelector(".mobile-menu");
  if (toggle && mobileMenu) {
    toggle.addEventListener("click", function () {
      toggle.classList.toggle("is-open");
      mobileMenu.classList.toggle("is-open");
      document.body.style.overflow = mobileMenu.classList.contains("is-open") ? "hidden" : "";
    });
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.classList.remove("is-open");
        mobileMenu.classList.remove("is-open");
        document.body.style.overflow = "";
      });
    });
  }

  // AOS init
  if (window.AOS) {
    AOS.init({
      duration: 600,
      easing: "ease-out-quad",
      once: true,
      offset: 60,
    });
  }

  // Contact form — Formspree integration
  var form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      
      var formData = new FormData(form);
      var formAction = form.getAttribute("action");
      
      fetch(formAction, {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      })
      .then(function(response) {
        if (response.ok) {
          var success = document.querySelector("#form-success");
          if (success) {
            success.classList.add("is-visible");
          }
          form.reset();
          // Hide success message after 5 seconds
          setTimeout(function() {
            if (success) {
              success.classList.remove("is-visible");
            }
          }, 5000);
        }
      })
      .catch(function(error) {
        console.error("Form submission error:", error);
      });
    });
  }

  // Certificate show handler (modal)
  var certShowLinks = document.querySelectorAll(".cert-show");
  var certModal = document.querySelector("#certModal");
  var certModalImage = document.querySelector(".cert-modal-image");
  var certModalClose = document.querySelector(".cert-modal-close");
  var certModalOverlay = document.querySelector(".cert-modal-overlay");

  if (certModal) {
    certShowLinks.forEach(function(link) {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        var imageSrc = this.getAttribute("data-image");
        certModalImage.src = imageSrc;
        certModal.classList.add("is-open");
        document.body.style.overflow = "hidden";
      });
    });

    // Close modal
    function closeModal() {
      certModal.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    if (certModalClose) {
      certModalClose.addEventListener("click", closeModal);
    }
    if (certModalOverlay) {
      certModalOverlay.addEventListener("click", closeModal);
    }

    // Close modal with Escape key
    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape" && certModal.classList.contains("is-open")) {
        closeModal();
      }
    });
  }
});
