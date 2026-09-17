(function () {
  "use strict";

  var WHATSAPP_NUMBER = "5491124005587"; // formato internacional, sin '+'

  /* ---------- Traducciones (ES / EN) ---------- */
  var I18N = {
    es: {
      meta: {
        title: "Altué Lodge | Departamento en alquiler — Cerro Campanario, Bariloche",
        description: "Altué Lodge: departamento de diseño en el Cerro Campanario, Bariloche. Vistas al lago Nahuel Huapi y al bosque patagónico, con energía solar propia. Reservá tu estadía."
      },
      skip: { link: "Saltar al contenido" },
      nav: {
        inicio: "Inicio",
        departamento: "El Departamento",
        galeria: "Galería",
        ubicacion: "Ubicación",
        nosotros: "Nosotros",
        lugares: "Lugares de Interés",
        contacto: "Contacto"
      },
      cta: { reserve: "Reservá ahora" },
      navToggle: { aria: "Abrir menú" },
      hero: {
        alt1: "Doble arcoíris sobre el bosque y el lago, visto desde el balcón",
        alt2: "Vista panorámica del lago Nahuel Huapi y la cordillera andina desde el Cerro Campanario",
        alt3: "Amanecer nublado sobre el lago Nahuel Huapi desde el Cerro Campanario",
        alt4: "Atardecer encendido sobre la cordillera visto desde Altué Lodge",
        title: "Despertar entre montañas,<br>dormir entre bosques.",
        subtitle: "Altué Lodge: un refugio de diseño patagónico con las vistas más buscadas de Bariloche, a un paso de tu puerta.",
        scrollAria: "Desplazarse hacia abajo"
      },
      about: {
        eyebrow: "El Departamento",
        title: "Tu refugio en la<br>Patagonia",
        p1: "En pleno Cerro Campanario, a metros de una de las vistas más elogiadas del mundo, Altué Lodge es el alojamiento ideal para tus vacaciones en la Patagonia Argentina. Rodeado por un bosque de cipreses, radales y maitenes, y con una vista imponente a la Laguna El Trébol y a la Cordillera, mientras en su interior conserva la calidez de los materiales patagónicos.",
        p2: "Pensado para desconectar sin resignar comodidad: ambientes luminosos, deck privado con acceso al bosque, y un entorno silencioso que solo interrumpe el viento entre los árboles.",
        feature1: "2 Dormitorios",
        feature2: "2 Baños completos",
        feature3: "4–5 Huéspedes",
        feature4: "Vista a la laguna y a los cerros",
        feature5: "Entorno de bosque nativo",
        feature6: "Deck y balcones privados",
        feature7: "Cocina completamente equipada",
        feature8: "Wifi de alta velocidad vía Starlink y fibra",
        imageAlt: "Sala de estar de Altué Lodge, con sillones, balcón privado y acceso al dormitorio"
      },
      gallery: {
        eyebrow: "Galería",
        title: "Espacios para<br>sentirte bien",
        interiorTitle: "Interiores",
        exteriorTitle: "Exteriores",
        alt0: "Sala de estar con sillones y acceso al dormitorio principal",
        alt1: "Living comedor con vista al bosque y balcón privado",
        alt2: "Cocina completa con mesada de mármol y equipamiento premium",
        alt3: "Pasillo de acceso con vista a la cocina",
        alt4: "Dormitorio principal con vestidor y espejo circular",
        alt5: "Dormitorio principal con ventana al bosque",
        alt6: "Baño principal revestido en mármol",
        alt7: "Dormitorio individual con vista al bosque",
        alt8: "Dormitorio con cama individual y cuchetas",
        alt9: "Baño secundario con ducha y ventana al bosque",
        alt10: "Baño secundario con tocador y espejo ovalado",
        alt11: "Cocina con heladera y acceso desde el pasillo",
        alt12: "Mesa de comedor con vista al bosque a través del ventanal",
        alt13: "Balcón nevado con sol filtrándose entre los árboles",
        alt14: "Deck nevado con vista al lago entre los árboles",
        alt15: "Fachada de Altué Lodge entre los árboles nevados",
        alt16: "Deck privado",
        alt17: "Galería de madera hacia el bosque",
        alt18: "Deck privado con vista al lago",
        alt19: "Escaleras y balcones asomados al bosque nevado",
        alt20: "Senda nevada de acceso entre cipreses",
        alt21: "Arquitectura contemporánea con vista a la cordillera",
        alt22: "Diseño de líneas puras integrado al paisaje",
        alt23: "Luna llena sobre la cordillera nevada, con niebla en el valle",
        alt25: "Ingreso principal en piedra y madera nativa"
      },
      location: {
        eyebrow: "Cómo llegar",
        title: "Ubicación",
        lead: "Altué Lodge se encuentra en el Cerro Campanario, a la altura del km 18 del Circuito Chico en Bariloche.",
        mapAria: "Ver mapa en pantalla completa",
        mapAlt: "Mapa del barrio con la ubicación aproximada de Altué Lodge en el Cerro Campanario"
      },
      energy: {
        alt1: "Vista aérea del techo de Altué Lodge con los paneles solares, rodeado de bosque",
        alt2: "Paneles solares en el techo, con el bosque y la cordillera nevada de fondo",
        eyebrow: "Energía sustentable",
        title: "Generación de energía propia",
        text: "La propiedad cuenta con paneles solares instalados en el techo, que garantizan generación de energía propia durante toda la estadía. Una forma de habitar la Patagonia en armonía con el entorno natural que la rodea, con mínimo impacto ambiental."
      },
      seasons: {
        eyebrow: "Las Cuatro Estaciones",
        title: "Un destino para disfrutar<br>todo el año",
        lead: "Bariloche cambia de piel a lo largo del año. Cualquiera sea tu temporada, Altué Lodge tiene una vista distinta para regalarte.",
        winterAlt: "Lago congelado y cordillera nevada vistos desde Altué Lodge en invierno",
        winterTitle: "Invierno",
        winterText: "Montañas nevadas y el lago en calma. La temporada de esquí en el Cerro Catedral, a minutos de casa, y las tardes de relax mirando el atardecer.",
        springAlt: "Doble arcoíris sobre el lago Nahuel Huapi en primavera",
        springTitle: "Primavera",
        springText: "El deshielo despierta al bosque nativo. Días que se alargan, arcoíris después de la lluvia y el aire lleno de aroma a lupinos y tulipanes.",
        summerAlt: "Cielo despejado y lago Nahuel Huapi en un día de verano",
        summerTitle: "Verano",
        summerText: "Días largos y cielo despejado. El lago en su mejor versión para navegar, disfrutar las playas, salir de trekking o simplemente desconectar.",
        autumnAlt: "Bosque con colores dorados y rojizos en otoño, con el lago de fondo",
        autumnTitle: "Otoño",
        autumnText: "El bosque se tiñe de dorados y rojizos: la luz más fotogénica del año, con el Circuito Chico en su máximo esplendor."
      },
      hosts: {
        imageAlt: "Laura y Juan, anfitriones y propietarios de Altué Lodge, en la cima del Cerro Campanario",
        eyebrow: "Quiénes somos",
        title: "Laura y Juan,<br>tus anfitriones en la montaña",
        p1: "Somos Laura y Juan, los propietarios de Altué Lodge. Diseñamos y construimos este refugio en el Cerro Campanario con una idea simple: compartir el rincón de Bariloche que más amamos, con esa vista que a nosotros tampoco deja de sorprendernos.",
        p2: "Nos vas a encontrar siempre disponibles antes y durante tu estadía, para recomendarte el mejor circuito, los restaurantes que no te podés perder o el mejor lugar para ver el atardecer. Conocemos cada rincón de estas montañas y nos encanta compartirlo.",
        feature1: "Anfitriones locales, expertos en la zona",
        feature2: "Atención personalizada, de principio a fin",
        feature3: "Siempre disponibles por WhatsApp"
      },
      places: {
        eyebrow: "Lugares de Interés",
        title: "Todo Bariloche,<br>a un paso de tu puerta",
        lead: "Altué Lodge se encuentra sobre el mítico Circuito Chico, rodeado de los paisajes más fotografiados de la Patagonia argentina.",
        p1: { distance: "A pasos del depto.", text: "La aerosilla hacia el mirador con una de las vistas más elogiadas del mundo, a metros de la puerta de casa." },
        p2: { distance: "5 min en auto", text: "El recorrido escénico más famoso de Bariloche, entre lagos, bosques y miradores infinitos." },
        p3: { distance: "8 min en auto", text: "Punto de partida de las excursiones náuticas a Isla Victoria y el Bosque de Arrayanes." },
        p4: { distance: "10 min en auto", text: "Feria de artesanos, curanto patagónico al desnivel y aire de pueblo alpino." },
        p5: { distance: "8 min en auto", text: "Una de las postales más clásicas del lago Nahuel Huapi, ideal para el atardecer." },
        p6: { distance: "20 min en auto", text: "Teleférico y bar giratorio con vistas de 360° sobre la ciudad y el lago." },
        p7: { distance: "20 min en auto", text: "El corazón histórico de la ciudad, chocolaterías y la Catedral Nuestra Señora del Nahuel Huapi." },
        p8: { title: "Ruta de la Cerveza", distance: "10–15 min en auto", text: "Cervecerías artesanales patagónicas repartidas entre el Cerro Campanario y el centro." }
      },
      contact: {
        eyebrow: "Contacto",
        title: "Reservá tu estadía<br>en Altué Lodge",
        labelNombre: "Nombre y apellido",
        placeholderNombre: "Tu nombre",
        labelEmail: "Email",
        labelFechas: "Fechas estimadas / Cantidad de huéspedes",
        placeholderFechas: "Ej: 15 al 20 de agosto, 4 personas",
        labelMensaje: "Mensaje",
        placeholderMensaje: "Contanos un poco más sobre tu estadía",
        submit: "Enviar por WhatsApp",
        hint: "Al enviar, se abrirá WhatsApp con tu mensaje ya redactado.",
        infoTitle: "Escribinos",
        quote: "“El mejor punto de partida para conocer todo lo que hace de Bariloche un lugar único.”"
      },
      footer: {
        tagline: "Refugio de diseño en el Cerro Campanario, Bariloche.",
        rights: "Todos los derechos reservados."
      },
      lightbox: {
        dialogAria: "Visor de imágenes",
        closeAria: "Cerrar",
        prevAria: "Imagen anterior",
        nextAria: "Imagen siguiente",
        zoomInAria: "Acercar",
        zoomOutAria: "Alejar",
        zoomResetAria: "Restablecer zoom"
      }
    },
    en: {
      meta: {
        title: "Altué Lodge | Apartment for Rent — Cerro Campanario, Bariloche",
        description: "Altué Lodge: a design apartment on Cerro Campanario, Bariloche. Views of Lake Nahuel Huapi and the Patagonian forest, with its own solar power. Book your stay."
      },
      skip: { link: "Skip to content" },
      nav: {
        inicio: "Home",
        departamento: "The Apartment",
        galeria: "Gallery",
        ubicacion: "Location",
        nosotros: "About Us",
        lugares: "Places of Interest",
        contacto: "Contact"
      },
      cta: { reserve: "Book now" },
      navToggle: { aria: "Open menu" },
      hero: {
        alt1: "Double rainbow over the forest and the lake, seen from the balcony",
        alt2: "Panoramic view of Lake Nahuel Huapi and the Andes mountain range from Cerro Campanario",
        alt3: "Cloudy sunrise over Lake Nahuel Huapi from Cerro Campanario",
        alt4: "Fiery sunset over the mountain range seen from Altué Lodge",
        title: "Wake up among mountains,<br>fall asleep among forests.",
        subtitle: "Altué Lodge: a Patagonian design retreat with Bariloche's most sought-after views, just steps from your door.",
        scrollAria: "Scroll down"
      },
      about: {
        eyebrow: "The Apartment",
        title: "Your refuge in<br>Patagonia",
        p1: "Right on Cerro Campanario, just steps from one of the most celebrated views in the world, Altué Lodge is the ideal place to stay for your vacation in Argentine Patagonia. Surrounded by a forest of cypress, radal and maiten trees, with a stunning view of Laguna El Trébol and the mountain range, while inside it keeps the warmth of Patagonian materials.",
        p2: "Designed to help you disconnect without giving up comfort: bright rooms, a private deck with access to the forest, and a quiet setting broken only by the wind moving through the trees.",
        feature1: "2 Bedrooms",
        feature2: "2 Full bathrooms",
        feature3: "4–5 Guests",
        feature4: "Views of the lagoon and the mountains",
        feature5: "Native forest surroundings",
        feature6: "Private deck and balconies",
        feature7: "Fully equipped kitchen",
        feature8: "High-speed wifi via Starlink and fiber",
        imageAlt: "Altué Lodge living room, with armchairs, a private balcony and access to the bedroom"
      },
      gallery: {
        eyebrow: "Gallery",
        title: "Spaces to<br>feel good",
        interiorTitle: "Interior",
        exteriorTitle: "Exterior",
        alt0: "Living room with armchairs and access to the main bedroom",
        alt1: "Living-dining room with forest views and a private balcony",
        alt2: "Full kitchen with marble countertop and premium appliances",
        alt3: "Entry hallway with a view of the kitchen",
        alt4: "Main bedroom with dressing area and round mirror",
        alt5: "Main bedroom with a window onto the forest",
        alt6: "Marble-clad main bathroom",
        alt7: "Single bedroom with forest views",
        alt8: "Bedroom with a single bed and bunk beds",
        alt9: "Second bathroom with a shower and a window onto the forest",
        alt10: "Second bathroom with vanity and oval mirror",
        alt11: "Kitchen with fridge, accessed from the hallway",
        alt12: "Dining table with forest views through the picture window",
        alt13: "Snow-covered balcony with sunlight filtering through the trees",
        alt14: "Snow-covered deck with lake views through the trees",
        alt15: "Altué Lodge facade among snow-covered trees",
        alt16: "Private deck",
        alt17: "Wooden gallery leading to the forest",
        alt18: "Private deck with lake views",
        alt19: "Stairs and balconies overlooking the snow-covered forest",
        alt20: "Snow-covered access path among cypress trees",
        alt21: "Contemporary architecture with mountain range views",
        alt22: "Clean-lined design integrated into the landscape",
        alt23: "Full moon over the snow-covered mountains, with mist in the valley",
        alt25: "Main entrance in stone and native wood"
      },
      location: {
        eyebrow: "How to get there",
        title: "Location",
        lead: "Altué Lodge is located on Cerro Campanario, at km 18 of the Circuito Chico in Bariloche.",
        mapAria: "View map in full screen",
        mapAlt: "Neighborhood map with Altué Lodge's approximate location on Cerro Campanario"
      },
      energy: {
        alt1: "Aerial view of Altué Lodge's roof with solar panels, surrounded by forest",
        alt2: "Solar panels on the roof, with the forest and snow-covered mountains in the background",
        eyebrow: "Sustainable energy",
        title: "Our own power generation",
        text: "The property has solar panels installed on the roof, guaranteeing its own power generation throughout your stay. A way of living in Patagonia in harmony with the natural surroundings, with minimal environmental impact."
      },
      seasons: {
        eyebrow: "The Four Seasons",
        title: "A destination to enjoy<br>all year round",
        lead: "Bariloche changes its face throughout the year. Whatever your season, Altué Lodge has a different view to give you.",
        winterAlt: "Frozen lake and snow-covered mountains seen from Altué Lodge in winter",
        winterTitle: "Winter",
        winterText: "Snow-covered mountains and a calm lake. Ski season at Cerro Catedral, minutes from home, and relaxed evenings watching the sunset.",
        springAlt: "Double rainbow over Lake Nahuel Huapi in spring",
        springTitle: "Spring",
        springText: "The thaw awakens the native forest. Days grow longer, rainbows follow the rain, and the air fills with the scent of lupines and tulips.",
        summerAlt: "Clear sky and Lake Nahuel Huapi on a summer day",
        summerTitle: "Summer",
        summerText: "Long days and clear skies. The lake at its best for sailing, enjoying the beaches, going trekking, or simply unwinding.",
        autumnAlt: "Forest in golden and reddish colors in autumn, with the lake in the background",
        autumnTitle: "Autumn",
        autumnText: "The forest turns gold and red: the most photogenic light of the year, with the Circuito Chico at its finest."
      },
      hosts: {
        imageAlt: "Laura and Juan, hosts and owners of Altué Lodge, at the top of Cerro Campanario",
        eyebrow: "About us",
        title: "Laura and Juan,<br>your hosts in the mountains",
        p1: "We are Laura and Juan, the owners of Altué Lodge. We designed and built this retreat on Cerro Campanario with a simple idea: to share the corner of Bariloche we love most, with a view that still amazes us too.",
        p2: "You'll find us always available before and during your stay, to recommend the best routes, the restaurants you can't miss, or the best spot to watch the sunset. We know every corner of these mountains and love sharing it.",
        feature1: "Local hosts, experts in the area",
        feature2: "Personalized attention from start to finish",
        feature3: "Always available on WhatsApp"
      },
      places: {
        eyebrow: "Places of Interest",
        title: "All of Bariloche,<br>just steps from your door",
        lead: "Altué Lodge sits on the legendary Circuito Chico, surrounded by the most photographed landscapes in Argentine Patagonia.",
        p1: { distance: "Steps from the apartment", text: "The chairlift to the viewpoint with one of the most celebrated views in the world, just meters from our door." },
        p2: { distance: "5 min by car", text: "Bariloche's most famous scenic drive, through lakes, forests and endless viewpoints." },
        p3: { distance: "8 min by car", text: "Starting point for boat excursions to Isla Victoria and the Arrayanes Forest." },
        p4: { distance: "10 min by car", text: "Craft fair, traditional Patagonian curanto, and the feel of an alpine village." },
        p5: { distance: "8 min by car", text: "One of the classic postcard views of Lake Nahuel Huapi, perfect at sunset." },
        p6: { distance: "20 min by car", text: "Cable car and revolving bar with 360° views over the city and the lake." },
        p7: { distance: "20 min by car", text: "The historic heart of the city, chocolate shops, and the Nuestra Señora del Nahuel Huapi Cathedral." },
        p8: { title: "The Beer Route", distance: "10–15 min by car", text: "Patagonian craft breweries scattered between Cerro Campanario and downtown." }
      },
      contact: {
        eyebrow: "Contact",
        title: "Book your stay<br>at Altué Lodge",
        labelNombre: "Full name",
        placeholderNombre: "Your name",
        labelEmail: "Email",
        labelFechas: "Estimated dates / Number of guests",
        placeholderFechas: "E.g.: Aug 15 to 20, 4 guests",
        labelMensaje: "Message",
        placeholderMensaje: "Tell us a bit more about your stay",
        submit: "Send via WhatsApp",
        hint: "When you submit, WhatsApp will open with your message ready to send.",
        infoTitle: "Get in touch",
        quote: "“The perfect starting point to discover everything that makes Bariloche a unique place.”"
      },
      footer: {
        tagline: "A design retreat on Cerro Campanario, Bariloche.",
        rights: "All rights reserved."
      },
      lightbox: {
        dialogAria: "Image viewer",
        closeAria: "Close",
        prevAria: "Previous image",
        nextAria: "Next image",
        zoomInAria: "Zoom in",
        zoomOutAria: "Zoom out",
        zoomResetAria: "Reset zoom"
      }
    }
  };

  var LANG_KEY = "altue-lang";
  var currentLang = "es";

  function t(key, lang) {
    var parts = key.split(".");
    var node = I18N[lang];
    for (var i = 0; i < parts.length && node; i++) node = node[parts[i]];
    return typeof node === "string" ? node : null;
  }

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = t(el.getAttribute("data-i18n"), lang);
      if (val !== null) el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var val = t(el.getAttribute("data-i18n-html"), lang);
      if (val !== null) el.innerHTML = val;
    });
    document.querySelectorAll("[data-i18n-attr-alt]").forEach(function (el) {
      var val = t(el.getAttribute("data-i18n-attr-alt"), lang);
      if (val !== null) el.setAttribute("alt", val);
    });
    document.querySelectorAll("[data-i18n-attr-placeholder]").forEach(function (el) {
      var val = t(el.getAttribute("data-i18n-attr-placeholder"), lang);
      if (val !== null) el.setAttribute("placeholder", val);
    });
    document.querySelectorAll("[data-i18n-attr-aria-label]").forEach(function (el) {
      var val = t(el.getAttribute("data-i18n-attr-aria-label"), lang);
      if (val !== null) el.setAttribute("aria-label", val);
    });
    document.querySelectorAll("[data-i18n-attr-content]").forEach(function (el) {
      var val = t(el.getAttribute("data-i18n-attr-content"), lang);
      if (val !== null) el.setAttribute("content", val);
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });

    rebuildGalleryCaptions(lang);
    if (typeof refreshOpenLightbox === "function") refreshOpenLightbox();
  }

  var langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = btn.getAttribute("data-lang");
      try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
      applyLanguage(lang);
    });
  });

  var initialLang = "es";
  try {
    var savedLang = localStorage.getItem(LANG_KEY);
    if (savedLang === "es" || savedLang === "en") initialLang = savedLang;
  } catch (e) {}

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

  /* ---------- Parallax del fondo del hero ---------- */
  var heroSection = document.querySelector(".hero");
  var heroMedia = document.querySelector(".hero-media");
  if (heroSection && heroMedia && !reduceMotion) {
    var parallaxTicking = false;
    var PARALLAX_FACTOR = 0.1;

    function updateParallax() {
      parallaxTicking = false;
      var rect = heroSection.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      var offset = rect.top * PARALLAX_FACTOR;
      heroMedia.style.transform = "translate3d(0, " + offset + "px, 0)";
    }

    function onParallaxScroll() {
      if (!parallaxTicking) {
        parallaxTicking = true;
        requestAnimationFrame(updateParallax);
      }
    }

    updateParallax();
    window.addEventListener("scroll", onParallaxScroll, { passive: true });
    window.addEventListener("resize", onParallaxScroll);
  }

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
  var GALLERY_ITEMS = [
    // Interiores
    { src: "img/interior-estar.jpg", es: "Sala de estar", en: "Living room" },
    { src: "img/interior-living.jpg", es: "Living comedor con vista al bosque y deck privado", en: "Living-dining room with forest views and a private deck" },
    { src: "img/interior-cocina-full.jpg", es: "Cocina completa", en: "Full kitchen" },
    { src: "img/interior-pasillo.jpg", es: "Pasillo de acceso", en: "Entry hallway" },
    { src: "img/interior-dorm-principal-vanitory.jpg", es: "Dormitorio principal con placard y TV smart", en: "Main bedroom with closet and smart TV" },
    { src: "img/interior-dorm-principal-ventana.jpg", es: "Dormitorio principal con placard y TV smart", en: "Main bedroom with closet and smart TV" },
    { src: "img/interior-bano-principal.jpg", es: "Baño completo", en: "Full bathroom" },
    { src: "img/interior-dorm-individual.jpg", es: "Dormitorio con cama individual y cuchetas", en: "Bedroom with a single bed and bunk beds" },
    { src: "img/interior-dorm-cuchetas.jpg", es: "Dormitorio con cama individual y cuchetas", en: "Bedroom with a single bed and bunk beds" },
    { src: "img/interior-bano-secundario-ducha.jpg", es: "Baño completo", en: "Full bathroom" },
    { src: "img/interior-bano-secundario-tocador.jpg", es: "Baño completo", en: "Full bathroom" },
    { src: "img/interior-cocina-pasillo.jpg", es: "Cocina completa", en: "Full kitchen" },
    { src: "img/interior-comedor-mesa.jpg", es: "Mesa de comedor con vista al bosque", en: "Dining table with forest views" },
    // Exteriores
    { src: "img/ext-balcon-sol.jpg", es: "Deck privado con acceso al bosque", en: "Private deck with forest access" },
    { src: "img/ext-deck-nieve-lago.jpg", es: "Deck con vista a la laguna entre los árboles", en: "Deck with lagoon views through the trees" },
    { src: "img/ext-fachada-nieve.jpg", es: "Ingreso entre los árboles", en: "Entrance among the trees" },
    { src: "img/ext-deck-deshielo.jpg", es: "Deck de madera", en: "Wooden deck" },
    { src: "img/deck-wood.jpg", es: "Deck privado con acceso al bosque", en: "Private deck with forest access" },
    { src: "img/deck-view.jpg", es: "Deck privado con acceso al bosque", en: "Private deck with forest access" },
    { src: "img/ext-escaleras-balcones.jpg", es: "Escaleras y balcones asomados al bosque nevado", en: "Stairs and balconies overlooking the snow-covered forest" },
    { src: "img/ext-senda-nieve.jpg", es: "Senda nevada de acceso entre cipreses", en: "Snow-covered access path among cypress trees" },
    { src: "img/exterior-02.jpg", es: "Arquitectura contemporánea con vista a la cordillera", en: "Contemporary architecture with mountain range views" },
    { src: "img/exterior-04.jpg", es: "Diseño integrado al paisaje", en: "Design integrated into the landscape" },
    { src: "img/ext-luna.jpg", es: "Luna llena sobre la cordillera nevada", en: "Full moon over the snow-covered mountains" },
    { src: "img/exterior-02.jpg", es: "Arquitectura contemporánea con vista a la cordillera", en: "Contemporary architecture with mountain range views" },
    { src: "img/exterior-03.jpg", es: "Ingreso principal en piedra y madera nativa", en: "Main entrance in stone and native wood" },
    { src: "img/mapa-ubicacion.svg", es: "Mapa del barrio con la ubicación aproximada de Altué Lodge", en: "Neighborhood map with Altué Lodge's approximate location" }
  ];
  var gallery = GALLERY_ITEMS.map(function (item) {
    return { src: item.src, caption: item.es };
  });
  var LOCATION_MAP_INDEX = gallery.length - 1;

  function rebuildGalleryCaptions(lang) {
    for (var i = 0; i < GALLERY_ITEMS.length; i++) {
      gallery[i].caption = GALLERY_ITEMS[i][lang] || GALLERY_ITEMS[i].es;
    }
  }

  var lightbox = document.getElementById("lightbox");
  var lightboxImgWrap = document.getElementById("lightboxImgWrap");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");
  var lightboxPrev = document.getElementById("lightboxPrev");
  var lightboxNext = document.getElementById("lightboxNext");
  var lightboxZoomControls = document.getElementById("lightboxZoomControls");
  var lightboxZoomIn = document.getElementById("lightboxZoomIn");
  var lightboxZoomOut = document.getElementById("lightboxZoomOut");
  var lightboxZoomReset = document.getElementById("lightboxZoomReset");
  var galleryItems = document.querySelectorAll(".gallery-item");
  var currentIndex = 0;
  var lastFocused = null;

  /* ---------- Zoom / pan (mapa en pantalla completa) ---------- */
  var ZOOM_MIN = 1;
  var ZOOM_MAX = 4;
  var ZOOM_STEP = 0.6;
  var zoomScale = 1;
  var zoomX = 0;
  var zoomY = 0;
  var isPanning = false;
  var panStartX = 0;
  var panStartY = 0;
  var panOriginX = 0;
  var panOriginY = 0;
  var pinchStartDist = 0;
  var pinchStartScale = 1;

  function isZoomable() {
    return currentIndex === LOCATION_MAP_INDEX;
  }

  function applyZoomTransform() {
    lightboxImg.style.transform = "translate(" + zoomX + "px, " + zoomY + "px) scale(" + zoomScale + ")";
    lightboxZoomReset.textContent = Math.round(zoomScale * 100) + "%";
    lightboxImgWrap.classList.toggle("is-zoomed", zoomScale > 1);
  }

  function clampPan() {
    if (zoomScale <= 1) { zoomX = 0; zoomY = 0; return; }
    var wrapRect = lightboxImgWrap.getBoundingClientRect();
    var maxX = (wrapRect.width * (zoomScale - 1)) / 2;
    var maxY = (wrapRect.height * (zoomScale - 1)) / 2;
    zoomX = Math.max(-maxX, Math.min(maxX, zoomX));
    zoomY = Math.max(-maxY, Math.min(maxY, zoomY));
  }

  function setZoom(scale, focusX, focusY) {
    var newScale = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, scale));
    if (typeof focusX === "number" && zoomScale !== newScale) {
      var ratio = newScale / zoomScale;
      zoomX = focusX - (focusX - zoomX) * ratio;
      zoomY = focusY - (focusY - zoomY) * ratio;
    }
    zoomScale = newScale;
    clampPan();
    applyZoomTransform();
  }

  function resetZoom() {
    zoomScale = 1;
    zoomX = 0;
    zoomY = 0;
    applyZoomTransform();
  }

  function updateZoomAvailability() {
    var zoomable = isZoomable();
    lightboxZoomControls.hidden = !zoomable;
    lightboxImgWrap.classList.toggle("is-zoomable", zoomable);
    if (!zoomable) resetZoom();
  }

  lightboxZoomIn.addEventListener("click", function () { setZoom(zoomScale + ZOOM_STEP); });
  lightboxZoomOut.addEventListener("click", function () { setZoom(zoomScale - ZOOM_STEP); });
  lightboxZoomReset.addEventListener("click", resetZoom);

  lightboxImgWrap.addEventListener("wheel", function (e) {
    if (!isZoomable()) return;
    e.preventDefault();
    var rect = lightboxImgWrap.getBoundingClientRect();
    var focusX = e.clientX - (rect.left + rect.width / 2);
    var focusY = e.clientY - (rect.top + rect.height / 2);
    setZoom(zoomScale + (e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP), focusX, focusY);
  }, { passive: false });

  lightboxImgWrap.addEventListener("dblclick", function () {
    if (!isZoomable()) return;
    setZoom(zoomScale > 1 ? 1 : 2);
  });

  lightboxImgWrap.addEventListener("mousedown", function (e) {
    if (!isZoomable() || zoomScale <= 1) return;
    isPanning = true;
    panStartX = e.clientX;
    panStartY = e.clientY;
    panOriginX = zoomX;
    panOriginY = zoomY;
    lightboxImgWrap.classList.add("is-panning");
    e.preventDefault();
  });
  window.addEventListener("mousemove", function (e) {
    if (!isPanning) return;
    zoomX = panOriginX + (e.clientX - panStartX);
    zoomY = panOriginY + (e.clientY - panStartY);
    clampPan();
    applyZoomTransform();
  });
  window.addEventListener("mouseup", function () {
    if (!isPanning) return;
    isPanning = false;
    lightboxImgWrap.classList.remove("is-panning");
  });

  function touchDist(touches) {
    var dx = touches[0].clientX - touches[1].clientX;
    var dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  lightboxImgWrap.addEventListener("touchstart", function (e) {
    if (!isZoomable()) return;
    if (e.touches.length === 2) {
      pinchStartDist = touchDist(e.touches);
      pinchStartScale = zoomScale;
    } else if (e.touches.length === 1 && zoomScale > 1) {
      isPanning = true;
      panStartX = e.touches[0].clientX;
      panStartY = e.touches[0].clientY;
      panOriginX = zoomX;
      panOriginY = zoomY;
    }
  }, { passive: true });

  lightboxImgWrap.addEventListener("touchmove", function (e) {
    if (!isZoomable()) return;
    if (e.touches.length === 2) {
      e.preventDefault();
      var dist = touchDist(e.touches);
      var rect = lightboxImgWrap.getBoundingClientRect();
      var midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
      var midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      setZoom(pinchStartScale * (dist / pinchStartDist), midX - (rect.left + rect.width / 2), midY - (rect.top + rect.height / 2));
    } else if (e.touches.length === 1 && isPanning) {
      e.preventDefault();
      zoomX = panOriginX + (e.touches[0].clientX - panStartX);
      zoomY = panOriginY + (e.touches[0].clientY - panStartY);
      clampPan();
      applyZoomTransform();
    }
  }, { passive: false });

  lightboxImgWrap.addEventListener("touchend", function (e) {
    if (e.touches.length === 0) isPanning = false;
  }, { passive: true });

  function showImage(index) {
    currentIndex = (index + gallery.length) % gallery.length;
    var item = gallery[currentIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.caption;
    lightboxCaption.textContent = item.caption;
    updateZoomAvailability();
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
    resetZoom();
    if (lastFocused) lastFocused.focus();
  }

  function refreshOpenLightbox() {
    if (lightbox.classList.contains("open")) showImage(currentIndex);
  }

  galleryItems.forEach(function (item) {
    item.addEventListener("click", function () {
      openLightbox(parseInt(item.getAttribute("data-index"), 10));
    });
  });

  var locationMapTrigger = document.getElementById("locationMapTrigger");
  if (locationMapTrigger) {
    locationMapTrigger.addEventListener("click", function () {
      openLightbox(LOCATION_MAP_INDEX);
    });
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", function () { showImage(currentIndex - 1); });
  lightboxNext.addEventListener("click", function () { showImage(currentIndex + 1); });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (zoomScale > 1) return;
    if (e.key === "ArrowLeft") showImage(currentIndex - 1);
    if (e.key === "ArrowRight") showImage(currentIndex + 1);
  });

  /* soporte swipe en touch */
  var touchStartX = null;
  lightbox.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  lightbox.addEventListener("touchend", function (e) {
    if (touchStartX === null || zoomScale > 1) { touchStartX = null; return; }
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

    var wa = currentLang === "en"
      ? { greeting: "Hi! I'd like to inquire about Altué Lodge.", name: "Name: ", email: "Email: ", dates: "Dates / guests: ", message: "Message: " }
      : { greeting: "Hola! Quiero consultar por Altué Lodge.", name: "Nombre: ", email: "Email: ", dates: "Fechas / huéspedes: ", message: "Mensaje: " };

    var lines = [
      wa.greeting,
      wa.name + nombre
    ];
    if (email) lines.push(wa.email + email);
    if (fechas) lines.push(wa.dates + fechas);
    lines.push(wa.message + mensaje);

    var text = encodeURIComponent(lines.join("\n"));
    var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text;
    window.open(url, "_blank", "noopener");
  });

  applyLanguage(initialLang);
})();
