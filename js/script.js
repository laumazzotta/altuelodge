(function () {
  "use strict";

  var WHATSAPP_NUMBER = "5491124005587"; // formato internacional, sin '+'

  /* ---------- Traducciones (ES / EN) ---------- */
  var I18N = {
    es: {
      meta: {
        title: "Altué Lodge | Departamentos en alquiler — Cerro Campanario, Bariloche",
        description: "Altué Lodge: departamentos de diseño en el Cerro Campanario, Bariloche. Vistas a Laguna El Trébol y a la Cordillera Patagónica, con energía solar propia. Reservá tu estadía."
      },
      skip: { link: "Saltar al contenido" },
      nav: {
        departamentos: "Departamentos",
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
        subtitle: "Altué Lodge: departamentos de diseño patagónico con las vistas más buscadas de Bariloche, a un paso de tu puerta.",
        cta: "Conocé los departamentos",
        scrollAria: "Desplazarse hacia abajo"
      },
      apts: {
        eyebrow: "Los Departamentos",
        title: "Tu lugar<br>en la Patagonia",
        lead: "En pleno Cerro Campanario, a metros de una de las vistas más elogiadas del mundo, Altué Lodge es el alojamiento ideal para tus vacaciones en Bariloche. Rodeado por bosque nativo, y con imponentes vistas a la Laguna El Trébol y a la Cordillera, es el lugar donde el único ruido es el viento entre los árboles.",
        lead2: "Disponemos de dos departamentos con entrada independiente, conectados por escaleras. Elegí el que mejor se adapte a tu viaje, o reservá los dos para venir en grupo.",
        cta: "Ver departamento",
        cipresImgAlt: "Sala de estar del Depto. Ciprés, con sillones y balcón privado",
        cipresCapacity: "4–5 huéspedes",
        cipresName: "Depto. Ciprés",
        cipresText: "Ambientes luminosos, balcones privados con vista a la Laguna El Trébol y a la cordillera, rodeado de bosque nativo.",
        cipresF1: "2 dormitorios",
        cipresF2: "2 baños",
        cipresF3: "Deck y balcones",
        lengaImgAlt: "Dormitorio matrimonial del Depto. Lenga, con respaldo de madera y escritorio junto a la ventana",
        lengaCapacity: "Hasta 7 huéspedes",
        lengaName: "Depto. Lenga",
        lengaText: "Un salón amplio para compartir, con parrilla y mesa de ping pong, y un gran deck con vistas panorámicas y bajada directa al bosque.",
        lengaF1: "2 dormitorios",
        lengaF2: "1 baño",
        lengaF3: "Parrilla y ping pong"
      },
      cipres: {
        eyebrow: "Depto. Ciprés",
        title: "Un refugio para<br>desconectar",
        p1: "El departamento Ciprés está pensado para quienes buscan calma: ambientes luminosos y cálidos, con dos dormitorios, dos baños completos y un living comedor con cocina equipada.",
        p2: "Afuera, un deck y balcones privados asomados a la laguna y los cerros, con acceso directo al bosque. Tiene entrada independiente y se conecta con el departamento Lenga mediante escaleras.",
        feature1: "2 Dormitorios con TV, placard y escritorio",
        feature2: "2 Baños completos",
        feature3: "4–5 Huéspedes",
        feature4: "Vista a la laguna y a los cerros",
        feature5: "Entorno de bosque nativo",
        feature6: "Deck y balcones privados",
        feature7: "Cocina completa",
        feature8: "Wifi vía Starlink y fibra",
        cta: "Consultar por el Depto. Ciprés",
        imgAlt1: "Sala de estar del Depto. Ciprés, con sillones, balcón privado y acceso al dormitorio",
        imgAlt2: "Cocina completa del Depto. Ciprés, con mesada de mármol",
        imgAlt3: "Dormitorio principal del Depto. Ciprés, con ventana al bosque",
        imgAlt4: "Deck del Depto. Ciprés al atardecer, con vista al bosque y a la cordillera nevada"
      },
      lenga: {
        eyebrow: "Depto. Lenga",
        title: "Espacio para compartir,<br>en medio del bosque",
        p1: "El departamento Lenga está pensado para familias grandes: un salón principal amplio que reúne cocina completa, comedor, parrilla y un estar con sillones y mesa de ping pong.",
        p2: "Afuera, un amplio deck con vistas a los cerros y la laguna, con acceso por escalera al bosque. Tiene entrada independiente y se conecta con el departamento Ciprés mediante escaleras.",
        feature1: "2 dormitorios",
        feature2: "Hasta 7 huéspedes",
        feature3: "Placard y escritorio en ambos dormitorios",
        feature4: "Baño completo con ducha",
        feature5: "Cocina completa y comedor",
        feature6: "Parrilla",
        feature7: "Lavarropas",
        feature8: "Estar con sillones y mesa de ping pong",
        feature9: "Amplio deck con vistas a los cerros y la laguna",
        feature10: "Wifi de alta velocidad",
        cta: "Consultar por el Depto. Lenga",
        imgAlt1: "Dormitorio matrimonial del Depto. Lenga",
        imgAlt2: "Cocina del Depto. Lenga, con ventanal al deck y vista a los cerros",
        imgAlt3: "Deck del Depto. Lenga, con vista a los cerros y acceso directo al bosque",
        galleryAlt1: "Deck del Depto. Lenga, con vista a los cerros y acceso directo al bosque",
        galleryAlt2: "Salón principal",
        galleryAlt3: "Salón principal",
        galleryAlt4: "Cocina con vista a los cerros",
        galleryAlt5: "Dormitorio matrimonial con escritorio y placard",
        galleryAlt6: "Dormitorio matrimonial con escritorio y placard",
        galleryAlt7: "Dormitorio matrimonial con escritorio y placard",
        galleryAlt8: "Dormitorio con camas individuales y carricamas",
        galleryAlt9: "Dormitorio de camas individuales con placard y escritorio",
        galleryAlt10: "Baño completo con ducha y toallero",
        galleryAlt11: "Baño con doble bacha y espejo de pared completa",
        galleryAlt12: "Deck con vista a la cordillera y acceso directo al bosque"
      },
      group: {
        eyebrow: "Para grupos y familias grandes",
        title: "¿Viajan en grupo? Reservá los dos",
        text: "Los departamentos se conectan mediante escalera: cada familia con su espacio y su propia entrada independiente, y todos juntos a la hora del asado.",
        cta: "Consultá por la propiedad completa",
        stat1: "departamentos conectados",
        stat2: "huéspedes en total",
        stat3: "dormitorios",
        stat4: "baños completos"
      },
      gallery: {
        eyebrow: "Galería",
        title: "Espacios para<br>sentirte bien",
        tabsAria: "Filtrar galería",
        tabCipres: "Depto. Ciprés",
        tabLenga: "Depto. Lenga",
        tabExteriores: "Exteriores",
        alt0: "Sala de estar",
        alt1: "Living comedor con vista al bosque y balcón privado",
        alt2: "Cocina completa",
        alt3: "Pasillo de acceso",
        alt4: "Dormitorio matrimonial",
        alt5: "Dormitorio matrimonial",
        alt6: "Baño principal",
        alt7: "Dormitorio individual con vista al bosque",
        alt8: "Dormitorio con cama individual y cuchetas",
        alt9: "Baño secundario con ducha y ventana al bosque",
        alt10: "Baño secundario",
        alt11: "Cocina completa",
        alt12: "Mesa de comedor con vista al bosque",
        alt13: "Balcón nevado",
        alt14: "Deck",
        alt15: "Fachada de Altué Lodge entre los árboles nevados",
        alt16: "Deck privado",
        alt17: "Galería de madera hacia el bosque",
        alt18: "Deck",
        alt19: "Escaleras y balcones asomados al bosque nevado",
        alt20: "Senda nevada de acceso entre cipreses",
        alt21: "Arquitectura contemporánea con vista a la cordillera",
        alt22: "Diseño de líneas puras integrado al paisaje",
        alt23: "Luna llena sobre la cordillera nevada, con niebla en el valle",
        alt25: "Ingreso principal",
        alt26: "Mesa de madera con bancos de troncos en el bosque",
        alt27: "Sendero entre el bosque con notros en flor",
        alt28: "Sendero bajo un arco de árboles nativos",
        alt29: "Sendero de chips de madera entre los árboles",
        alt30: "Deck del Depto. Ciprés al atardecer, con vista al bosque y a la cordillera nevada"
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
        text: "Contamos con paneles solares instalados en el techo, que abastecen a los dos departamentos y garantizan generación de energía propia durante toda la estadía. Una forma de habitar la Patagonia en armonía con el entorno natural que la rodea, con mínimo impacto ambiental."
      },
      seasons: {
        eyebrow: "Las Cuatro Estaciones",
        title: "Un destino para disfrutar<br>todo el año",
        lead: "Bariloche cambia de piel a lo largo del año. Cualquiera sea tu temporada, Altué Lodge tiene una vista distinta para regalarte.",
        winterAlt: "Lago congelado y cordillera nevada vistos desde Altué Lodge en invierno",
        winterTitle: "Invierno",
        winterText: "Montañas nevadas y el lago en calma. La temporada de esquí en el Cerro Catedral, a minutos de casa, y las tardes de relax mirando el atardecer.",
        springAlt: "Lupinos violetas y rosas junto a un arroyo y el bosque nativo en primavera",
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
        p1: { distance: "A pasos de los deptos.", text: "La aerosilla hacia el mirador con una de las vistas más elogiadas del mundo, a metros de la puerta de casa." },
        p2: { distance: "5 min en auto", text: "El recorrido escénico más famoso de Bariloche, entre lagos, bosques y miradores infinitos." },
        p3: { distance: "8 min en auto", text: "Punto de partida de las excursiones náuticas a Isla Victoria y el Bosque de Arrayanes." },
        p4: { distance: "10 min en auto", text: "Feria de artesanos, curanto patagónico y aire de pueblo alpino." },
        p5: { distance: "8 min en auto", text: "Una de las postales más clásicas del lago Nahuel Huapi, ideal para el atardecer." },
        p6: { distance: "20 min en auto", text: "Teleférico y bar giratorio con vistas de 360° sobre la ciudad y el lago." },
        p7: { distance: "20 min en auto", text: "El corazón histórico de la ciudad, chocolaterías y la Catedral Nuestra Señora del Nahuel Huapi." },
        p8: { title: "Ruta de la Cerveza", distance: "10–15 min en auto", text: "Cervecerías artesanales patagónicas repartidas entre el Cerro Campanario y el centro." }
      },
      contact: {
        eyebrow: "Contacto",
        title: "Reservá tu estadía<br>en Altué Lodge",
        aptLegend: "¿Qué departamento te interesa?",
        aptCipres: "Depto. Ciprés",
        aptLenga: "Depto. Lenga",
        aptAmbos: "Los dos",
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
        tagline: "Departamentos de diseño en el Cerro Campanario, Bariloche.",
        cipres: "Depto. Ciprés",
        lenga: "Depto. Lenga",
        rights: "Todos los derechos reservados.",
        madeBy: "Hecho con ♡ por"
      },
      lightbox: {
        dialogAria: "Visor de imágenes",
        closeAria: "Cerrar",
        prevAria: "Imagen anterior",
        nextAria: "Imagen siguiente",
        zoomInAria: "Acercar",
        zoomOutAria: "Alejar",
        zoomResetAria: "Restablecer zoom",
        seeMore: "Ver más"
      }
    },
    en: {
      meta: {
        title: "Altué Lodge | Apartments for Rent — Cerro Campanario, Bariloche",
        description: "Altué Lodge: Design apartments on Cerro Campanario, Bariloche. Views of El Trébol Lagoon and the Patagonian Mountains, with their own solar power. Book your stay."
      },
      skip: { link: "Skip to content" },
      nav: {
        departamentos: "Apartments",
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
        // title: "Wake up among mountains,<br>fall asleep among forests.",
        title: "The best of Patagonia,<br> just outside your window",
        subtitle: "Altué Lodge: Patagonian design apartments with Bariloche's most sought-after views, just steps from your door.",
        cta: "Explore the apartments",
        scrollAria: "Scroll down"
      },
      apts: {
        eyebrow: "The Apartments",
        title: "Your refuge<br>in Patagonia",
        lead: "Right on Cerro Campanario, just steps from one of the most celebrated views in the world, Altué Lodge is the ideal place to stay for your vacation in Bariloche. Surrounded by native forest, with stunning views of Laguna El Trébol and the mountain range, it's a place where the only sound is the wind moving through the trees.",
        lead2: "We offer two apartments, each with its own private entrance, connected by stairs. Choose the one that best fits your trip, or book both to come as a group.",
        cta: "View apartment",
        cipresImgAlt: "Living room of the Ciprés Apartment, with armchairs and a private balcony",
        cipresCapacity: "4–5 guests",
        cipresName: "Ciprés Apartment",
        cipresText: "Bright rooms and private balconies overlooking Laguna El Trébol and the mountains, surrounded by native forest.",
        cipresF1: "2 bedrooms",
        cipresF2: "2 bathrooms",
        cipresF3: "Deck and balconies",
        lengaImgAlt: "Double bedroom of the Lenga Apartment, with a wooden headboard and a desk by the window",
        lengaCapacity: "Up to 7 guests",
        lengaName: "Lenga Apartment",
        lengaText: "A spacious shared living area with a grill and a ping pong table, plus a large deck with panoramic views and direct access down to the forest.",
        lengaF1: "2 bedrooms",
        lengaF2: "1 bathroom",
        lengaF3: "Grill and ping pong"
      },
      cipres: {
        eyebrow: "Ciprés Apartment",
        title: "A refuge<br>to unwind",
        p1: "The Ciprés Apartment is designed for those seeking calm: bright, warm rooms with two bedrooms, two full bathrooms and a living-dining room with an equipped kitchen.",
        p2: "Outside, a private deck and balconies overlook the lagoon and the mountains, with direct access to the forest. It has its own private entrance and connects to the Lenga Apartment by stairs.",
        feature1: "2 Bedrooms with TV, closet and desk",
        feature2: "2 Full bathrooms",
        feature3: "4–5 Guests",
        feature4: "Views of the lagoon and the mountains",
        feature5: "Native forest surroundings",
        feature6: "Private deck and balconies",
        feature7: "Full kitchen",
        feature8: "Wifi via Starlink and fiber",
        cta: "Ask about the Ciprés Apartment",
        imgAlt1: "Living room of the Ciprés Apartment, with armchairs, a private balcony and access to the bedroom",
        imgAlt2: "Full kitchen of the Ciprés Apartment, with a marble countertop",
        imgAlt3: "Main bedroom of the Ciprés Apartment, with a window onto the forest",
        imgAlt4: "Deck of the Ciprés Apartment at sunset, with views of the forest and the snow-capped mountains"
      },
      lenga: {
        eyebrow: "Lenga Apartment",
        title: "Room to share,<br>in the middle of the forest",
        p1: "The Lenga Apartment is designed for large families: a spacious main room that brings together a full kitchen, dining area, grill and a lounge with armchairs and a ping pong table.",
        p2: "Outside, a large deck with views of the mountains and the lagoon, with stairs down to the forest. It has its own private entrance and connects to the Ciprés Apartment by stairs.",
        feature1: "2 bedrooms",
        feature2: "Up to 7 guests",
        feature3: "Closet and desk in both bedrooms",
        feature4: "Full bathroom with shower",
        feature5: "Full kitchen and dining area",
        feature6: "Grill",
        feature7: "Washing machine",
        feature8: "Lounge with armchairs and a ping pong table",
        feature9: "Large deck with views of the mountains and the lagoon",
        feature10: "High-speed wifi",
        cta: "Ask about the Lenga Apartment",
        imgAlt1: "Double bedroom of the Lenga Apartment, with a wooden headboard, a desk and a window onto the forest",
        imgAlt2: "Kitchen of the Lenga Apartment, with a large window onto the deck and views of the snow-capped mountains",
        imgAlt3: "Deck of the Lenga Apartment, with a glass railing and views of the snow-capped mountains",
        galleryAlt1: "Deck of the Lenga Apartment with a glass railing and views of the snow-capped mountains",
        galleryAlt2: "Main room with kitchen, dining area, grill and ping pong table",
        galleryAlt3: "Main room with armchairs, ping pong table and the kitchen in the background",
        galleryAlt4: "Kitchen with a large window onto the deck and views of the snow-capped mountains",
        galleryAlt5: "Double bedroom with a wooden headboard, a desk and a window onto the forest",
        galleryAlt6: "Double bedroom with a wooden headboard and bedside tables",
        galleryAlt7: "Double bedroom with a desk, closet and windows onto the forest",
        galleryAlt8: "Bedroom with bunk beds and single beds",
        galleryAlt9: "Single-bed bedroom with closet and desk",
        galleryAlt10: "Full bathroom with shower and towel rail",
        galleryAlt11: "Bathroom with double sink and full-wall mirror",
        galleryAlt12: "Deck with views of the snow-capped mountains through the trees"
      },
      group: {
        eyebrow: "For groups and large families",
        title: "Traveling as a group? Book both",
        text: "The apartments are connected by stairs: each family gets its own space and private entrance, and everyone comes together for the barbecue.",
        cta: "Ask about the whole property",
        stat1: "connected apartments",
        stat2: "guests in total",
        stat3: "bedrooms",
        stat4: "full bathrooms"
      },
      gallery: {
        eyebrow: "Gallery",
        title: "Spaces to<br>feel good",
        tabsAria: "Filter gallery",
        tabCipres: "Ciprés Apartment",
        tabLenga: "Lenga Apartment",
        tabExteriores: "Exterior",
        alt0: "Living room with access to the main bedroom",
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
        alt25: "Main entrance in stone and native wood",
        alt26: "Wooden table with log benches in the forest",
        alt27: "Forest trail with flowering notro trees",
        alt28: "Trail under an arch of native trees",
        alt29: "Wood-chip trail among the trees",
        alt30: "Ciprés apartment deck at sunset, overlooking the forest and the snow-capped mountains"
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
        text: "The property has solar panels installed on the roof that power both apartments, guaranteeing its own power generation throughout your stay. A way of living in Patagonia in harmony with the natural surroundings, with minimal environmental impact."
      },
      seasons: {
        eyebrow: "The Four Seasons",
        title: "A destination to enjoy<br>all year round",
        lead: "Bariloche changes its face throughout the year. Whatever your season, Altué Lodge has a different view to give you.",
        winterAlt: "Frozen lake and snow-covered mountains seen from Altué Lodge in winter",
        winterTitle: "Winter",
        winterText: "Snow-covered mountains and a calm lake. Ski season at Cerro Catedral, minutes from home, and relaxed evenings watching the sunset.",
        springAlt: "Purple and pink lupines beside a stream and native forest in spring",
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
        p1: { distance: "Steps from the apartments", text: "The chairlift to the viewpoint with one of the most celebrated views in the world, just meters from our door." },
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
        aptLegend: "Which apartment are you interested in?",
        aptCipres: "Ciprés Apartment",
        aptLenga: "Lenga Apartment",
        aptAmbos: "Both",
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
        tagline: "Two design apartments on Cerro Campanario, Bariloche.",
        cipres: "Ciprés Apartment",
        lenga: "Lenga Apartment",
        rights: "All rights reserved.",
        madeBy: "Made with ♡ by"
      },
      lightbox: {
        dialogAria: "Image viewer",
        closeAria: "Close",
        prevAria: "Previous image",
        nextAria: "Next image",
        zoomInAria: "Zoom in",
        zoomOutAria: "Zoom out",
        zoomResetAria: "Reset zoom",
        seeMore: "See more"
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

    /* Mapa de ubicación: versión según idioma (desktop y mobile) */
    document.querySelectorAll("[data-map-src-" + lang + "]").forEach(function (el) {
      var src = el.getAttribute("data-map-src-" + lang);
      if (el.tagName === "SOURCE") {
        if (el.getAttribute("srcset") !== src) el.setAttribute("srcset", src);
      } else if (el.getAttribute("src") !== src) {
        el.setAttribute("src", src);
      }
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });

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
  /* ?lang=en / ?lang=es (p. ej. al llegar desde el link en inglés en/) tiene prioridad */
  try {
    var urlLang = new URLSearchParams(window.location.search).get("lang");
    if (urlLang === "es" || urlLang === "en") {
      initialLang = urlLang;
      try { localStorage.setItem(LANG_KEY, urlLang); } catch (e) {}
    }
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
  var GALLERY_GROUPS = {
    cipres: [
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
      { src: "img/cipres-deck-atardecer.jpg", es: "Deck al atardecer con vista a la cordillera", en: "Deck at sunset with mountain views" }
    ],
    lenga: [
      { src: "img/lenga-deck.jpg", es: "Deck con baranda de vidrio y vista a los cerros nevados", en: "Deck with a glass railing and views of the snow-capped mountains" },
      { src: "img/lenga-salon.jpg", es: "Salón principal con cocina, comedor, parrilla y ping pong", en: "Main room with kitchen, dining area, grill and ping pong" },
      { src: "img/lenga-salon-2.jpg", es: "Estar con sillones y mesa de ping pong", en: "Lounge with armchairs and a ping pong table" },
      { src: "img/lenga-cocina.jpg", es: "Cocina completa con vista a los cerros", en: "Full kitchen with mountain views" },
      { src: "img/lenga-dorm-matrimonial.jpg", es: "Dormitorio matrimonial con escritorio", en: "Double bedroom with desk" },
      { src: "img/lenga-dorm-matrimonial-2.jpg", es: "Dormitorio matrimonial", en: "Double bedroom" },
      { src: "img/lenga-dorm-matrimonial-3.jpg", es: "Dormitorio matrimonial con placard y escritorio", en: "Double bedroom with closet and desk" },
      { src: "img/lenga-dorm-individuales.jpg", es: "Dormitorio con cuchetas y camas individuales", en: "Bedroom with bunk beds and single beds" },
      { src: "img/lenga-dorm-individuales-2.jpg", es: "Dormitorio de camas individuales con placard y escritorio", en: "Single-bed bedroom with closet and desk" },
      { src: "img/lenga-bano-ducha.jpg", es: "Baño completo con ducha", en: "Full bathroom with shower" },
      { src: "img/lenga-bano-doble-bacha.jpg", es: "Baño con doble bacha", en: "Bathroom with double sink" },
      { src: "img/lenga-deck-2.jpg", es: "Deck con vista a la cordillera", en: "Deck with mountain views" }
    ],
    exteriores: [
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
      { src: "img/exterior-03.jpg", es: "Ingreso principal en piedra y madera nativa", en: "Main entrance in stone and native wood" },
      { src: "img/ext-mesa-bosque.jpg", es: "Mesa de madera en el bosque", en: "Wooden table in the forest" },
      { src: "img/ext-sendero-notro.jpg", es: "Sendero con notros en flor", en: "Trail with flowering notro trees" },
      { src: "img/ext-sendero-arco.jpg", es: "Sendero bajo un arco de árboles nativos", en: "Trail under an arch of native trees" },
      { src: "img/ext-sendero-bosque.jpg", es: "Sendero entre los árboles", en: "Trail among the trees" }
    ],
    mapa: [
      { src: mapLightboxSrc, es: "Mapa del barrio con la ubicación aproximada de Altué Lodge", en: "Neighborhood map with Altué Lodge's approximate location" }
    ]
  };
  /* Mapa en pantalla completa: vertical en mobile, y versión EN si corresponde */
  function mapLightboxSrc() {
    var mobile = window.matchMedia("(max-width: 700px)").matches;
    var suffix = (mobile ? "-mobile" : "") + (currentLang === "en" ? "-en" : "");
    return "img/mapa-ubicacion" + suffix + ".svg";
  }
  var currentGroup = "cipres";
  var MAP_GROUP = "mapa";

  /* Orden en que se encadenan los grupos al llegar al final (o al principio) */
  var GROUP_SEQUENCE = ["cipres", "lenga", "exteriores"];

  /* Pie de foto del lightbox: solo el nombre del grupo */
  var GROUP_LABELS = {
    cipres: { es: "Departamento Ciprés", en: "Ciprés Apartment" },
    lenga: { es: "Departamento Lenga", en: "Lenga Apartment" },
    exteriores: { es: "Exteriores", en: "Outdoors" }
  };

  function currentItems() {
    return GALLERY_GROUPS[currentGroup] || [];
  }

  /* ---------- Pestañas de la galería ---------- */
  var galleryTabs = document.querySelectorAll(".gallery-tab");
  var galleryPanels = document.querySelectorAll(".gallery-group[data-group]");

  function selectGalleryTab(group) {
    galleryTabs.forEach(function (tab) {
      tab.setAttribute("aria-pressed", tab.getAttribute("data-gallery-tab") === group ? "true" : "false");
    });
    galleryPanels.forEach(function (panel) {
      var isActive = panel.getAttribute("data-group") === group;
      panel.hidden = !isActive;
      if (isActive) {
        panel.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("visible"); });
      }
    });
  }

  galleryTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      selectGalleryTab(tab.getAttribute("data-gallery-tab"));
    });
  });

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
    return currentGroup === MAP_GROUP;
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

  /* Muestra una foto del grupo abierto */
  function showImage(index) {
    var items = currentItems();
    if (!items.length) return;
    currentIndex = (index + items.length) % items.length;
    var item = items[currentIndex];
    var description = item[currentLang] || item.es;
    var label = GROUP_LABELS[currentGroup];
    lightboxImg.src = typeof item.src === "function" ? item.src() : item.src;
    lightboxImg.alt = description;
    lightboxCaption.textContent = label ? (label[currentLang] || label.es) : description;
    var single = items.length < 2 && !chainGroups;
    lightboxPrev.hidden = single;
    lightboxNext.hidden = single;
    updateZoomAvailability();
  }

  /* Avanza/retrocede una foto. Si el visor se abrió desde la sección Galería,
     al pasar el final (o el principio) de un grupo continúa con el siguiente
     (o el anterior). Desde las fichas de cada depto. se recorre solo ese grupo. */
  var chainGroups = false;

  function stepImage(delta) {
    var target = currentIndex + delta;
    var seqPos = chainGroups ? GROUP_SEQUENCE.indexOf(currentGroup) : -1;
    if (seqPos !== -1 && (target < 0 || target >= currentItems().length)) {
      var n = GROUP_SEQUENCE.length;
      currentGroup = GROUP_SEQUENCE[(seqPos + (delta > 0 ? 1 : -1) + n) % n];
      target = delta > 0 ? 0 : currentItems().length - 1;
      selectGalleryTab(currentGroup);
    }
    showImage(target);
  }

  function openLightbox(group, index, chain) {
    lastFocused = document.activeElement;
    currentGroup = group;
    chainGroups = !!chain;
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
      var panel = item.closest("[data-group]");
      if (!panel) return;
      openLightbox(panel.getAttribute("data-group"), parseInt(item.getAttribute("data-index"), 10), true);
    });
  });

  /* Fotos de las fichas de cada depto.: abren el lightbox en esa foto,
     con todas las fotos del depto. para recorrer (incluida "Ver más") */
  document.querySelectorAll("[data-apt-gallery]").forEach(function (grid) {
    var group = grid.getAttribute("data-apt-gallery");
    grid.querySelectorAll(".about-gallery-item").forEach(function (tile) {
      tile.addEventListener("click", function () {
        openLightbox(group, parseInt(tile.getAttribute("data-index"), 10));
      });
    });
  });

  var locationMapTrigger = document.getElementById("locationMapTrigger");
  if (locationMapTrigger) {
    locationMapTrigger.addEventListener("click", function () {
      openLightbox(MAP_GROUP, 0);
    });
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", function () { stepImage(-1); });
  lightboxNext.addEventListener("click", function () { stepImage(1); });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (zoomScale > 1) return;
    if (e.key === "ArrowLeft") stepImage(-1);
    if (e.key === "ArrowRight") stepImage(1);
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
      stepImage(delta > 0 ? -1 : 1);
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
    var deptoInput = contactForm.querySelector('input[name="depto"]:checked');
    var depto = deptoInput ? deptoInput.value : "";

    var wa = currentLang === "en"
      ? { greeting: "Hi! I'd like to inquire about Altué Lodge.", apt: "Apartment: ", name: "Name: ", email: "Email: ", dates: "Dates / guests: ", message: "Message: ",
          apts: { cipres: "Ciprés Apartment", lenga: "Lenga Apartment", ambos: "Both apartments (Ciprés and Lenga)" } }
      : { greeting: "Hola! Quiero consultar por Altué Lodge.", apt: "Departamento: ", name: "Nombre: ", email: "Email: ", dates: "Fechas / huéspedes: ", message: "Mensaje: ",
          apts: { cipres: "Depto. Ciprés", lenga: "Depto. Lenga", ambos: "Los dos departamentos (Ciprés y Lenga)" } };

    var lines = [wa.greeting];
    if (depto && wa.apts[depto]) lines.push(wa.apt + wa.apts[depto]);
    lines.push(wa.name + nombre);
    if (email) lines.push(wa.email + email);
    if (fechas) lines.push(wa.dates + fechas);
    lines.push(wa.message + mensaje);

    var text = encodeURIComponent(lines.join("\n"));
    var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text;
    window.open(url, "_blank", "noopener");
  });

  /* Los CTA "Consultar por…" preseleccionan el departamento en el formulario */
  document.querySelectorAll("a[data-apt]").forEach(function (link) {
    link.addEventListener("click", function () {
      var radio = contactForm.querySelector('input[name="depto"][value="' + link.getAttribute("data-apt") + '"]');
      if (radio) radio.checked = true;
    });
  });

  applyLanguage(initialLang);
})();
