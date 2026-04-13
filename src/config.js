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
    'Servicios',
    'Comercio',
    'Salud',
    'Profesionales',
    'Belleza',
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
          'La plataforma contempla gastronomía, comercios, servicios, salud, belleza y profesionales de la ciudad.',
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
    nombre: 'Marea Café de Especialidad',
    categoria: 'Gastronomía',
    destacado: true,
    foto: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
    descripcion:
      'Cafetería de autor con pastelería artesanal, brunch y una estética contemporánea ideal para reuniones o trabajo remoto.',
    direccion: 'La Merced 245, Ensenada',
    coordenadas: { lat: -34.8631, lng: -57.9107 },
    horarios: 'Lunes a sábado de 8:00 a 20:00',
    instagram: 'https://instagram.com/mareacafe.ensenada',
    web: 'https://mareacafe.example.com',
    whatsapp: '5492216011101',
  },
  {
    nombre: 'Taller Norte Soluciones',
    categoria: 'Servicios',
    destacado: true,
    foto: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
    descripcion:
      'Servicio técnico integral para hogares y comercios: electricidad, mantenimiento preventivo y reparaciones express.',
    direccion: 'Bossinga 318, Ensenada',
    coordenadas: { lat: -34.8688, lng: -57.9059 },
    horarios: 'Lunes a viernes de 9:00 a 18:00',
    instagram: 'https://instagram.com/tallernorte.ensenada',
    web: '',
    whatsapp: '5492216022202',
  },
  {
    nombre: 'Punto Urbano Store',
    categoria: 'Comercio',
    foto: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80',
    descripcion:
      'Indumentaria y accesorios urbanos con curaduría local, envíos en el día y atención personalizada.',
    direccion: 'Sidoti 189, Ensenada',
    coordenadas: { lat: -34.8614, lng: -57.9152 },
    horarios: 'Lunes a sábado de 10:00 a 19:30',
    instagram: 'https://instagram.com/puntourbano.store',
    web: 'https://puntourbano.example.com',
    whatsapp: '5492216033303',
  },
  {
    nombre: 'Clínica Delta Salud',
    categoria: 'Salud',
    foto: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
    descripcion:
      'Centro médico ambulatorio con atención clínica, diagnóstico rápido y especialistas para toda la familia.',
    direccion: 'Horacio Cestino 422, Ensenada',
    coordenadas: { lat: -34.8654, lng: -57.9171 },
    horarios: 'Lunes a viernes de 8:00 a 17:00',
    instagram: 'https://instagram.com/deltasalud.ensenada',
    web: 'https://deltasalud.example.com',
    whatsapp: '5492216044404',
  },
  {
    nombre: 'Studio Azul Belleza',
    categoria: 'Belleza',
    foto: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80',
    descripcion:
      'Espacio boutique de estética, skincare y peluquería con turnos online y experiencias personalizadas.',
    direccion: 'San Martín 532, Ensenada',
    coordenadas: { lat: -34.8589, lng: -57.9111 },
    horarios: 'Martes a sábado de 10:00 a 19:00',
    instagram: 'https://instagram.com/studioazul.belleza',
    web: '',
    whatsapp: '5492216055505',
  },
  {
    nombre: 'Estudio Faro Legal',
    categoria: 'Profesionales',
    foto: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80',
    descripcion:
      'Asesoramiento jurídico y comercial para personas, emprendedores y pymes con atención presencial y virtual.',
    direccion: 'Marqués de Avilés 147, Ensenada',
    coordenadas: { lat: -34.8602, lng: -57.9078 },
    horarios: 'Lunes a viernes de 9:30 a 17:30',
    instagram: 'https://instagram.com/farolegal.ensenada',
    web: 'https://farolegal.example.com',
    whatsapp: '5492216066606',
  },
]