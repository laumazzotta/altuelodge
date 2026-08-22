(function () {
  "use strict";

  var WHATSAPP_NUMBER = "5491124005587"; // formato internacional, sin '+'

  /* ---------- Año dinámico en el footer ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Carruseles de fondo (hero, paneles solares, etc.) ---------- */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initSlideshow(selector, intervalMs) {
    var slides = document.querySelectorAll(selector);
    if (slides.length < 2 || reduceMotion) return;
    var index = 0;
    slides.forEach(function (s, i) { if (i !== 0) s.classList.remove("is-active"); });
    setInterval(function () {
      slides[index].classList.remove("is-active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("is-active");
    }, intervalMs);
  }

  initSlideshow(".hero-slide", 5000);
  initSlideshow(".solar-slide", 5000);

  /* ---------- Header sticky ---------- */
  var header = document.getElementById("siteHeader");
  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Menú mobile ---------- */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  navToggle.addEventListener("click", function () {
    var isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  mainNav.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Animaciones al hacer scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- Galería + Lightbox ---------- */
  var gallery = [
    // Interiores
    { src: "img/interior-estar.jpg", caption: "Sala de estar" },
    { src: "img/interior-living.jpg", caption: "Living comedor con vista al bosque y deck privado" },
    { src: "img/interior-cocina-full.jpg", caption: "Cocina completa" },
    { src: "img/interior-pasillo.jpg", caption: "Pasillo de acceso" },
    { src: "img/interior-dorm-principal-vanitory.jpg", caption: "Dormitorio principal con placard y TV smart" },
    { src: "img/interior-dorm-principal-ventana.jpg", caption: "Dormitorio principal con placard y TV smart" },
    { src: "img/interior-bano-principal.jpg", caption: "Baño completo" },
    { src: "img/interior-dorm-individual.jpg", caption: "Dormitorio con cama individual y cuchetas" },
    { src: "img/interior-dorm-cuchetas.jpg", caption: "Dormitorio con cama individual y cuchetas" },
    { src: "img/interior-bano-secundario-ducha.jpg", caption: "Baño completo" },
    { src: "img/interior-bano-secundario-tocador.jpg", caption: "Baño completo" },
    { src: "img/interior-cocina-pasillo.jpg", caption: "Cocina completa" },
    { src: "img/interior-comedor-mesa.jpg", caption: "Mesa de comedor con vista al bosque" },
    // Exteriores
    { src: "img/ext-balcon-sol.jpg", caption: "Deck privado con acceso al bosque" },
    { src: "img/ext-deck-nieve-lago.jpg", caption: "Deck con vista a la laguna entre los árboles" },
    { src: "img/ext-fachada-nieve.jpg", caption: "Ingreso entre los árboles" },
    { src: "img/ext-deck-deshielo.jpg", caption: "Deck de madera" },
    { src: "img/deck-wood.jpg", caption: "Deck privado con acceso al bosque" },
    { src: "img/deck-view.jpg", caption: "Deck privado con acceso al bosque" },
    { src: "img/ext-escaleras-balcones.jpg", caption: "Escaleras y balcones asomados al bosque nevado" },
    { src: "img/ext-senda-nieve.jpg", caption: "Senda nevada de acceso entre cipreses" },
    { src: "img/exterior-02.jpg", caption: "Arquitectura contemporánea con vista a la cordillera" },
    { src: "img/exterior-04.jpg", caption: "Diseño integrado al paisaje" },
    { src: "img/ext-luna.jpg", caption: "Luna llena sobre la cordillera nevada" },
    { src: "img/exterior-02.jpg", caption: "Arquitectura contemporánea con vista a la cordillera" },
    { src: "img/exterior-03.jpg", caption: "Ingreso principal en piedra y madera nativa" }
  ];

  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");
  var lightboxPrev = document.getElementById("lightboxPrev");
  var lightboxNext = document.getElementById("lightboxNext");
  var galleryItems = document.querySelectorAll(".gallery-item");
  var currentIndex = 0;
  var lastFocused = null;

  function showImage(index) {
    currentIndex = (index + gallery.length) % gallery.length;
    var item = gallery[currentIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.caption;
    lightboxCaption.textContent = item.caption;
  }

  function openLightbox(index) {
    lastFocused = document.activeElement;
    showImage(index);
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  galleryItems.forEach(function (item) {
    item.addEventListener("click", function () {
      openLightbox(parseInt(item.getAttribute("data-index"), 10));
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", function () { showImage(currentIndex - 1); });
  lightboxNext.addEventListener("click", function () { showImage(currentIndex + 1); });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showImage(currentIndex - 1);
    if (e.key === "ArrowRight") showImage(currentIndex + 1);
  });

  /* soporte swipe en touch */
  var touchStartX = null;
  lightbox.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  lightbox.addEventListener("touchend", function (e) {
    if (touchStartX === null) return;
    var delta = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 40) {
      showImage(delta > 0 ? currentIndex - 1 : currentIndex + 1);
    }
    touchStartX = null;
  }, { passive: true });

  /* ---------- Formulario de contacto -> WhatsApp ---------- */
  var contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var nombre = document.getElementById("nombre").value.trim();
    var email = document.getElementById("email").value.trim();
    var fechas = document.getElementById("fechas").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();

    var lines = [
      "Hola! Quiero consultar por Altué Lodge.",
      "Nombre: " + nombre
    ];
    if (email) lines.push("Email: " + email);
    if (fechas) lines.push("Fechas / huéspedes: " + fechas);
    lines.push("Mensaje: " + mensaje);

    var text = encodeURIComponent(lines.join("\n"));
    var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text;
    window.open(url, "_blank", "noopener");
  });
})();
