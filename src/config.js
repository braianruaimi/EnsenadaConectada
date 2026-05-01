export const appConfig = {
  brand: {
    name: 'Ensenada Conectada',
    badge: 'Directorio local premium',
    subtitle:
      'Conectamos tu negocio con la ciudad. Encuentra comercios, servicios y profesionales locales en un solo lugar.',
  },
  navigation: {
    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Negocios', href: '#negocios' },
      { label: 'Publicar', href: '#publicar' },
      { label: 'Cobertura', href: '#cobertura' },
      { label: 'Categorías', href: '#categorias' },
      { label: 'Editor', href: '#editor' },
      { label: 'Contacto', href: '#contacto' },
    ],
    cta: 'Sumar mi negocio',
  },
  hero: {
    eyebrow: 'Descubrí Ensenada en tiempo real',
    title: 'La guía digital de referencia para la ciudad.',
    description:
      'Explorá propuestas gastronómicas, servicios profesionales y comercios locales desde una experiencia rápida, elegante y pensada para convertir visitas en contactos.',
    primaryAction: 'Explorar negocios',
    secondaryAction: 'Hablar por WhatsApp',
    stats: [
      { value: '120+', label: 'Negocios activos' },
      { value: '15', label: 'Categorías listas' },
      { value: '24/7', label: 'Visibilidad online' },
    ],
  },
  search: {
    placeholder: 'Buscar por nombre o categoría',
    emptyTitle: 'No encontramos coincidencias',
    emptyDescription:
      'Probá con otra categoría o ajustá la búsqueda para descubrir más negocios locales.',
    resetText: 'Ver todo',
    sectionTitle: 'Negocios destacados',
    sectionDescription:
      'Filtrá por categoría o buscá en tiempo real para encontrar la opción adecuada en segundos.',
  },
  categories: [
    'Todos',
    'Comercios Destacados',
    'Gastronomía',
    'Panadería',
    'Almacén',
    'Verdulería',
    'Kiosco',
    'Ferretería',
    'Farmacia',
    'Inmobiliaria',
    'Abogados',
    'Servicios',
    'Moda',
    'Otros',
  ],
  assistant: {
    buttonLabel: 'Asistente',
    modalTitle: 'Asistente Ensenada Conectada',
    modalDescription:
      'Respuestas rápidas para ayudarte a usar la plataforma y encontrar el negocio indicado.',
    closeLabel: 'Cerrar',
    questions: [
      {
        question: '¿Cómo busco un negocio específico?',
        answer:
          'Usá la barra de búsqueda para escribir el nombre del negocio o una categoría como Gastronomía, Servicios o Comercio.',
      },
      {
        question: '¿Puedo contactar directo por WhatsApp?',
        answer:
          'Sí. Cada tarjeta incluye el acceso al WhatsApp del negocio para que puedas escribir sin pasos intermedios.',
      },
      {
        question: '¿Cómo sumo mi emprendimiento a la plataforma?',
        answer:
          'Escribinos por WhatsApp y te guiamos con la carga de datos, imágenes, horarios y enlaces de contacto.',
      },
      {
        question: '¿Qué tipo de rubros aparecen?',
        answer:
          'La plataforma contempla gastronomía, panaderías, comercios, servicios, salud, belleza y profesionales de la ciudad.',
      },
    ],
  },
  whatsapp: {
    label: 'WhatsApp',
    displayNumber: '+54 9 221 504-7962',
    number: '5492215047962',
    message: 'Hola, quiero información sobre Ensenada Conectada.',
  },
  businessCard: {
    scheduleLabel: 'Horarios',
    instagramLabel: 'Instagram',
    websiteLabel: 'Sitio web',
    whatsappLabel: 'WhatsApp',
    unavailableWebsite: 'Próximamente',
  },
  publisher: {
    badge: 'Publicá en minutos',
    title: 'Un flujo simple para sumar negocios y profesionales a la plataforma.',
    description:
      'Preparamos el alta con identidad visual, datos ordenados y enlaces listos para convertir visitas en consultas reales desde el primer día.',
    primaryAction: 'Quiero publicar mi negocio',
    secondaryAction: 'Ver cobertura',
    steps: [
      {
        title: '1. Envío de datos',
        description:
          'Recibimos nombre, rubro, descripción, horarios, foto principal y enlaces de contacto.',
      },
      {
        title: '2. Curaduría visual',
        description:
          'Ordenamos el contenido y lo adaptamos a una ficha premium, clara y consistente con la plataforma.',
      },
      {
        title: '3. Publicación activa',
        description:
          'Tu negocio queda visible, filtrable y conectado por Instagram, web o WhatsApp desde la ciudad.',
      },
    ],
  },
  coverage: {
    badge: 'Cobertura local',
    title: 'Pensado para vecinos, visitantes y comercios de Ensenada.',
    description:
      'Mostramos rubros clave con una navegación rápida para que cada barrio y corredor comercial tenga visibilidad digital ordenada.',
    legendTitle: 'Zonas y focos de visibilidad',
    metrics: [
      { value: 'Centro', label: 'Alta intención de búsqueda' },
      { value: 'Punta Lara', label: 'Servicios y gastronomía' },
      { value: 'El Dique', label: 'Comercio y atención diaria' },
    ],
    areas: [
      {
        name: 'Centro de Ensenada',
        description: 'Corazón comercial con alto flujo para servicios, gastronomía y profesionales.',
      },
      {
        name: 'Punta Lara',
        description: 'Zona con foco en experiencias, gastronomía y negocios orientados a visitantes.',
      },
      {
        name: 'Barrios residenciales',
        description: 'Ideal para oficios, salud, belleza y atención cotidiana de cercanía.',
      },
    ],
  },
  map: {
    badge: 'Mapa en vivo',
    title: 'Ubicaciones reales para descubrir negocios cerca tuyo.',
    description:
      'Explorá Ensenada con un mapa interactivo y visualizá negocios, servicios y profesionales sobre puntos reales de la ciudad.',
    popupCta: 'Contactar por WhatsApp',
    center: {
      lat: -34.8619,
      lng: -57.9126,
    },
    zoom: 13,
    tileUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    tileAttribution: '&copy; OpenStreetMap contributors',
  },
  studio: {
    badge: 'Editor local',
    title: 'Panel rápido de contenido',
    description:
      'Editá una vista previa local de textos, categorías y negocios sin tocar componentes. Los cambios son temporales hasta que actualicemos config.js.',
    buttonLabel: 'Abrir editor',
    closeLabel: 'Cerrar editor',
    sections: {
      general: 'Contenido general',
      categories: 'Categorías rápidas',
      businesses: 'Negocios visibles',
    },
    fields: {
      subtitle: 'Subtítulo principal',
      heroDescription: 'Descripción del hero',
      searchPlaceholder: 'Placeholder del buscador',
      footerDescription: 'Descripción del footer',
      categories: 'Categorías separadas por coma',
      businessName: 'Nombre',
      businessCategory: 'Categoría',
      businessDescription: 'Descripción',
      businessInstagram: 'Instagram',
      businessWebsite: 'Sitio web',
      businessWhatsapp: 'WhatsApp',
    },
  },
  footer: {
    title: 'Visibilidad local con presencia digital premium',
    description:
      'Ensenada Conectada está pensada para que vecinos y visitantes descubran negocios confiables desde una interfaz simple, moderna y preparada para crecer.',
    copyright: 'Ensenada Conectada. Todos los derechos reservados.',
  },
}

export const negocios = [
  {
    nombre: 'Club de Jarras',
    categoria: 'Gastronomía',
    destacado: true,
    foto: 'img/comercios/club de jarras.webp',
    descripcion: 'Bar y despacho de cervezas artesanales.',
    direccion: 'Paseo Gastronómico, Sidotti 134 Local 2, Ensenada',
    coordenadas: { lat: -34.8635, lng: -57.9148 },
    horarios: 'Miércoles a Domingos de 18:00 a 23:30',
    instagram: 'https://www.instagram.com/clubdejarras/',
    web: '',
    whatsapp: '542215960885',
  },
  {
    nombre: "MILO'S PIZZA",
    categoria: 'Gastronomía',
    destacado: true,
    foto: "img/comercios/Milo\u00b4S pizzas.webp",
    descripcion: 'Pizza en horno de barro, calzone, empanadas, milanesas, pastas y tapeos.',
    direccion: 'Paseo Gastronómico, Sidotti 134, Ensenada',
    coordenadas: { lat: -34.8636, lng: -57.9147 },
    horarios: 'Miércoles a Domingo de 19:00 a 00:00',
    instagram: 'https://www.instagram.com/milospizza.ensenada/',
    web: '',
    whatsapp: '542216144385',
  },
  {
    nombre: 'DockEnsenada',
    categoria: 'Gastronomía',
    destacado: true,
    foto: 'img/comercios/dock central.webp',
    descripcion: 'Cocina a leña, tapas, sandwiches, cervezas, vinos y cocktails.',
    direccion: 'Paseo Gastronómico, Sidotti 134, Ensenada',
    coordenadas: { lat: -34.8634, lng: -57.9149 },
    horarios: 'Miércoles a Sábados de 19:00 a 02:00',
    instagram: 'https://www.instagram.com/dockensenada/',
    web: '',
    whatsapp: '542213641874',
  },
  {
    nombre: 'Gliamichi Burgers',
    categoria: 'Gastronomía',
    destacado: true,
    foto: 'img/comercios/gliamichi burger.webp',
    descripcion: 'Hamburguesas, pizzas, papas fritas y piques.',
    direccion: 'Paseo Gastronómico, Sidotti 134, Ensenada',
    coordenadas: { lat: -34.8637, lng: -57.9146 },
    horarios: 'Miércoles a Domingos de 19:00 a 23:30',
    instagram: 'https://www.instagram.com/gliamichiburgers/',
    web: '',
    whatsapp: '5492212003907',
  },
  {
    nombre: 'Thionis Artesanos del Helado',
    categoria: 'Gastronomía',
    destacado: true,
    foto: 'img/comercios/thionis helados.webp',
    descripcion: 'Helados artesanales de elaboración propia.',
    direccion: 'Paseo Gastronómico, Sidotti 134, Ensenada',
    coordenadas: { lat: -34.8633, lng: -57.9150 },
    horarios: 'Miércoles a Domingos de 11:00 a 01:00',
    instagram: 'https://www.instagram.com/thionisartesanosdelhelado/',
    web: '',
    whatsapp: '5492215087133',
  },
  {
    nombre: 'Pizza Costera',
    categoria: 'Gastronomía',
    foto: 'img/comercios/pizza-costera.svg',
    descripcion: 'Pizzas a la piedra, empanadas y promos familiares con despacho rápido por WhatsApp.',
    direccion: 'Ortiz de Rosas 128, Ensenada',
    coordenadas: { lat: -34.8620, lng: -57.9110 },
    horarios: 'Todos los días de 19:00 a 23:30',
    instagram: 'https://instagram.com/pizzacostera.ec',
    web: '',
    whatsapp: '5492215678901',
  },
]