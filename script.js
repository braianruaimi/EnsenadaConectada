/* ==========================================================
   Ensenada Conectada — script.js
   Toda la lógica de la aplicación: datos, filtros, cards,
   horarios en timezone Argentina, búsqueda y renderizado.
   ========================================================== */

/* ----------------------------------------------------------
   DATOS: Comercios del directorio
   Actualizar `imagen` con la ruta real en img/comercios/.
   ---------------------------------------------------------- */
const comercios = [
  {
    nombre: 'Club de Jarras',
    rubro: 'Gastronomía',
    ubicacion: 'Paseo Gastronómico, Sidotti 134 Local 2, Ensenada',
    whatsapp: '542215960885',
    instagram: 'https://www.instagram.com/clubdejarras/',
    imagen: 'img/comercios/club de jarras.webp',
    descripcion: 'Bar y despacho de cervezas artesanales.',
    horario: { dias: 'Miércoles a Domingos', apertura: '18:00', cierre: '23:30' },
  },
  {
    nombre: "MILO'S PIZZA",
    rubro: 'Gastronomía',
    ubicacion: 'Paseo Gastronómico, Sidotti 134, Ensenada',
    whatsapp: '542216144385',
    instagram: 'https://www.instagram.com/milospizza.ensenada/',
    imagen: 'img/comercios/milos pizza.webp',
    descripcion: 'Pizza en horno de barro, calzone, empanadas, milanesas, pastas y tapeos.',
    horario: { dias: 'Miércoles a Domingo', apertura: '19:00', cierre: '00:00' },
  },
  {
    nombre: 'Dock Central',
    rubro: 'Gastronomía',
    ubicacion: 'Paseo Gastronómico, Sidotti 134, Ensenada',
    whatsapp: '542213641874',
    instagram: 'https://www.instagram.com/dockensenada/',
    imagen: 'img/comercios/dock central.webp',
    descripcion: 'Cocina a leña, tapas, sandwiches, cervezas, vinos y cocktails.',
    horario: { dias: 'Miércoles a Sábados', apertura: '19:00', cierre: '02:00' },
  },
  {
    nombre: 'Gliamichi Burgers',
    rubro: 'Gastronomía',
    ubicacion: 'Paseo Gastronómico, Sidotti 134, Ensenada',
    whatsapp: '5492212003907',
    instagram: 'https://www.instagram.com/gliamichiburgers/',
    imagen: 'img/comercios/gliamichi burger.webp',
    descripcion: 'Hamburguesas, pizzas, papas fritas y piques.',
    horario: { dias: 'Miércoles a Domingos', apertura: '19:00', cierre: '23:30' },
  },
  {
    nombre: 'Thionis Artesanos del Helado',
    rubro: 'Gastronomía',
    ubicacion: 'Paseo Gastronómico, Sidotti 134, Ensenada',
    whatsapp: '5492215087133',
    instagram: 'https://www.instagram.com/thionisartesanosdelhelado/',
    imagen: 'img/comercios/thionis helados.webp',
    descripcion: 'Helados artesanales de elaboración propia.',
    horario: { dias: 'Miércoles a Domingos', apertura: '11:00', cierre: '01:00' },
  },
  {
    nombre: 'Pizza Costera',
    rubro: 'Gastronomía',
    ubicacion: 'Ortiz de Rosas 128, Ensenada',
    whatsapp: '5492215678901',
    instagram: 'https://instagram.com/pizzacostera.ec',
    imagen: 'img/comercios/pizza-costera.svg',
    descripcion: 'Pizzas a la piedra, empanadas y promos familiares con despacho rápido por WhatsApp.',
    horario: { dias: 'Todos los días', apertura: '19:00', cierre: '23:30' },
  },
]

// --- PANADERÍA ---
comercios.push(
  {
    nombre: 'La Monumental',
    rubro: 'Panadería',
    ubicacion: 'Pte Peron y Eva Peron, Ensenada',
    whatsapp: '542210000000',
    instagram: 'https://instagram.com/',
    imagen: 'img/comercios/la monumental.webp',
    descripcion: 'Dulce, Salado y rico.',
    horario: { dias: 'Martes a Domingos', apertura: '07:00', cierre: '20:00' },
  },
  {
    nombre: 'Panadería 2',
    rubro: 'Panadería',
    ubicacion: 'Dirección 2, Ensenada',
    whatsapp: '5422100000002',
    instagram: 'https://instagram.com/',
    imagen: 'img/comercios/panaderia2.webp',
    descripcion: 'Descripción de Panadería 2.',
    horario: { dias: 'Lunes a Sábados', apertura: '07:00', cierre: '20:00' },
  },
  {
    nombre: 'Panadería 3',
    rubro: 'Panadería',
    ubicacion: 'Dirección 3, Ensenada',
    whatsapp: '5422100000003',
    instagram: 'https://instagram.com/',
    imagen: 'img/comercios/panaderia3.webp',
    descripcion: 'Descripción de Panadería 3.',
    horario: { dias: 'Lunes a Sábados', apertura: '07:00', cierre: '20:00' },
  },
  {
    nombre: 'Panadería 4',
    rubro: 'Panadería',
    ubicacion: 'Dirección 4, Ensenada',
    whatsapp: '5422100000004',
    instagram: 'https://instagram.com/',
    imagen: 'img/comercios/panaderia4.webp',
    descripcion: 'Descripción de Panadería 4.',
    horario: { dias: 'Lunes a Sábados', apertura: '07:00', cierre: '20:00' },
  },
  {
    nombre: 'Panadería 5',
    rubro: 'Panadería',
    ubicacion: 'Dirección 5, Ensenada',
    whatsapp: '5422100000005',
    instagram: 'https://instagram.com/',
    imagen: 'img/comercios/panaderia5.webp',
    descripcion: 'Descripción de Panadería 5.',
    horario: { dias: 'Lunes a Sábados', apertura: '07:00', cierre: '20:00' },
  },
  {
    nombre: 'Panadería 6',
    rubro: 'Panadería',
    ubicacion: 'Dirección 6, Ensenada',
    whatsapp: '5422100000006',
    instagram: 'https://instagram.com/',
    imagen: 'img/comercios/panaderia6.webp',
    descripcion: 'Descripción de Panadería 6.',
    horario: { dias: 'Lunes a Sábados', apertura: '07:00', cierre: '20:00' },
  }
);

// --- ALMACÉN ---
comercios.push(
  { nombre: 'Almacén 1', rubro: 'Almacén', ubicacion: 'Dirección 1, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Almacén 1.', horario: { dias: 'Lunes a Sábados', apertura: '09:00', cierre: '20:00' } },
  { nombre: 'Almacén 2', rubro: 'Almacén', ubicacion: 'Dirección 2, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Almacén 2.', horario: { dias: 'Lunes a Sábados', apertura: '09:00', cierre: '20:00' } },
  { nombre: 'Almacén 3', rubro: 'Almacén', ubicacion: 'Dirección 3, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Almacén 3.', horario: { dias: 'Lunes a Sábados', apertura: '09:00', cierre: '20:00' } },
  { nombre: 'Almacén 4', rubro: 'Almacén', ubicacion: 'Dirección 4, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Almacén 4.', horario: { dias: 'Lunes a Sábados', apertura: '09:00', cierre: '20:00' } },
  { nombre: 'Almacén 5', rubro: 'Almacén', ubicacion: 'Dirección 5, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Almacén 5.', horario: { dias: 'Lunes a Sábados', apertura: '09:00', cierre: '20:00' } },
  { nombre: 'Almacén 6', rubro: 'Almacén', ubicacion: 'Dirección 6, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Almacén 6.', horario: { dias: 'Lunes a Sábados', apertura: '09:00', cierre: '20:00' } }
);

// --- VERDULERÍA ---
comercios.push(
  { nombre: 'Verdulería 1', rubro: 'Verdulería', ubicacion: 'Dirección 1, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Verdulería 1.', horario: { dias: 'Lunes a Sábados', apertura: '09:00', cierre: '20:00' } },
  { nombre: 'Verdulería 2', rubro: 'Verdulería', ubicacion: 'Dirección 2, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Verdulería 2.', horario: { dias: 'Lunes a Sábados', apertura: '09:00', cierre: '20:00' } },
  { nombre: 'Verdulería 3', rubro: 'Verdulería', ubicacion: 'Dirección 3, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Verdulería 3.', horario: { dias: 'Lunes a Sábados', apertura: '09:00', cierre: '20:00' } },
  { nombre: 'Verdulería 4', rubro: 'Verdulería', ubicacion: 'Dirección 4, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Verdulería 4.', horario: { dias: 'Lunes a Sábados', apertura: '09:00', cierre: '20:00' } },
  { nombre: 'Verdulería 5', rubro: 'Verdulería', ubicacion: 'Dirección 5, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Verdulería 5.', horario: { dias: 'Lunes a Sábados', apertura: '09:00', cierre: '20:00' } },
  { nombre: 'Verdulería 6', rubro: 'Verdulería', ubicacion: 'Dirección 6, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Verdulería 6.', horario: { dias: 'Lunes a Sábados', apertura: '09:00', cierre: '20:00' } }
);

// --- KIOSCO ---
comercios.push(
  { nombre: 'Kiosco 1', rubro: 'Kiosco', ubicacion: 'Dirección 1, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Kiosco 1.', horario: { dias: 'Todos los días', apertura: '00:00', cierre: '23:59' } },
  { nombre: 'Kiosco 2', rubro: 'Kiosco', ubicacion: 'Dirección 2, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Kiosco 2.', horario: { dias: 'Todos los días', apertura: '00:00', cierre: '23:59' } },
  { nombre: 'Kiosco 3', rubro: 'Kiosco', ubicacion: 'Dirección 3, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Kiosco 3.', horario: { dias: 'Todos los días', apertura: '00:00', cierre: '23:59' } },
  { nombre: 'Kiosco 4', rubro: 'Kiosco', ubicacion: 'Dirección 4, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Kiosco 4.', horario: { dias: 'Todos los días', apertura: '00:00', cierre: '23:59' } },
  { nombre: 'Kiosco 5', rubro: 'Kiosco', ubicacion: 'Dirección 5, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Kiosco 5.', horario: { dias: 'Todos los días', apertura: '00:00', cierre: '23:59' } },
  { nombre: 'Kiosco 6', rubro: 'Kiosco', ubicacion: 'Dirección 6, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Kiosco 6.', horario: { dias: 'Todos los días', apertura: '00:00', cierre: '23:59' } }
);

// --- FERRETERÍA ---
comercios.push(
  { nombre: 'Ferretería 1', rubro: 'Ferretería', ubicacion: 'Dirección 1, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Ferretería 1.', horario: { dias: 'Lunes a Sábados', apertura: '08:30', cierre: '19:30' } },
  { nombre: 'Ferretería 2', rubro: 'Ferretería', ubicacion: 'Dirección 2, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Ferretería 2.', horario: { dias: 'Lunes a Sábados', apertura: '08:30', cierre: '19:30' } },
  { nombre: 'Ferretería 3', rubro: 'Ferretería', ubicacion: 'Dirección 3, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Ferretería 3.', horario: { dias: 'Lunes a Sábados', apertura: '08:30', cierre: '19:30' } },
  { nombre: 'Ferretería 4', rubro: 'Ferretería', ubicacion: 'Dirección 4, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Ferretería 4.', horario: { dias: 'Lunes a Sábados', apertura: '08:30', cierre: '19:30' } },
  { nombre: 'Ferretería 5', rubro: 'Ferretería', ubicacion: 'Dirección 5, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Ferretería 5.', horario: { dias: 'Lunes a Sábados', apertura: '08:30', cierre: '19:30' } },
  { nombre: 'Ferretería 6', rubro: 'Ferretería', ubicacion: 'Dirección 6, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Ferretería 6.', horario: { dias: 'Lunes a Sábados', apertura: '08:30', cierre: '19:30' } }
);

// --- FARMACIA ---
comercios.push(
  { nombre: 'Farmacia 1', rubro: 'Farmacia', ubicacion: 'Dirección 1, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Farmacia 1.', horario: { dias: 'Lunes a Sábados', apertura: '08:30', cierre: '20:30' } },
  { nombre: 'Farmacia 2', rubro: 'Farmacia', ubicacion: 'Dirección 2, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Farmacia 2.', horario: { dias: 'Lunes a Sábados', apertura: '08:30', cierre: '20:30' } },
  { nombre: 'Farmacia 3', rubro: 'Farmacia', ubicacion: 'Dirección 3, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Farmacia 3.', horario: { dias: 'Lunes a Sábados', apertura: '08:30', cierre: '20:30' } },
  { nombre: 'Farmacia 4', rubro: 'Farmacia', ubicacion: 'Dirección 4, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Farmacia 4.', horario: { dias: 'Lunes a Sábados', apertura: '08:30', cierre: '20:30' } },
  { nombre: 'Farmacia 5', rubro: 'Farmacia', ubicacion: 'Dirección 5, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Farmacia 5.', horario: { dias: 'Lunes a Sábados', apertura: '08:30', cierre: '20:30' } },
  { nombre: 'Farmacia 6', rubro: 'Farmacia', ubicacion: 'Dirección 6, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Farmacia 6.', horario: { dias: 'Lunes a Sábados', apertura: '08:30', cierre: '20:30' } }
);

// --- INMOBILIARIA ---
comercios.push(
  { nombre: 'Inmobiliaria 1', rubro: 'Inmobiliaria', ubicacion: 'Dirección 1, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Inmobiliaria 1.', horario: { dias: 'Lunes a Viernes', apertura: '09:00', cierre: '18:00' } },
  { nombre: 'Inmobiliaria 2', rubro: 'Inmobiliaria', ubicacion: 'Dirección 2, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Inmobiliaria 2.', horario: { dias: 'Lunes a Viernes', apertura: '09:00', cierre: '18:00' } },
  { nombre: 'Inmobiliaria 3', rubro: 'Inmobiliaria', ubicacion: 'Dirección 3, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Inmobiliaria 3.', horario: { dias: 'Lunes a Viernes', apertura: '09:00', cierre: '18:00' } },
  { nombre: 'Inmobiliaria 4', rubro: 'Inmobiliaria', ubicacion: 'Dirección 4, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Inmobiliaria 4.', horario: { dias: 'Lunes a Viernes', apertura: '09:00', cierre: '18:00' } },
  { nombre: 'Inmobiliaria 5', rubro: 'Inmobiliaria', ubicacion: 'Dirección 5, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Inmobiliaria 5.', horario: { dias: 'Lunes a Viernes', apertura: '09:00', cierre: '18:00' } },
  { nombre: 'Inmobiliaria 6', rubro: 'Inmobiliaria', ubicacion: 'Dirección 6, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Inmobiliaria 6.', horario: { dias: 'Lunes a Viernes', apertura: '09:00', cierre: '18:00' } }
);

// --- ABOGADOS ---
comercios.push(
  { nombre: 'Abogados 1', rubro: 'Abogados', ubicacion: 'Dirección 1, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Abogados 1.', horario: { dias: 'Lunes a Viernes', apertura: '09:00', cierre: '17:00' } },
  { nombre: 'Abogados 2', rubro: 'Abogados', ubicacion: 'Dirección 2, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Abogados 2.', horario: { dias: 'Lunes a Viernes', apertura: '09:00', cierre: '17:00' } },
  { nombre: 'Abogados 3', rubro: 'Abogados', ubicacion: 'Dirección 3, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Abogados 3.', horario: { dias: 'Lunes a Viernes', apertura: '09:00', cierre: '17:00' } },
  { nombre: 'Abogados 4', rubro: 'Abogados', ubicacion: 'Dirección 4, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Abogados 4.', horario: { dias: 'Lunes a Viernes', apertura: '09:00', cierre: '17:00' } },
  { nombre: 'Abogados 5', rubro: 'Abogados', ubicacion: 'Dirección 5, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Abogados 5.', horario: { dias: 'Lunes a Viernes', apertura: '09:00', cierre: '17:00' } },
  { nombre: 'Abogados 6', rubro: 'Abogados', ubicacion: 'Dirección 6, Ensenada', whatsapp: '54221000000', instagram: 'https://instagram.com/', imagen: 'img/comercios/default.webp', descripcion: 'Descripción de Abogados 6.', horario: { dias: 'Lunes a Viernes', apertura: '09:00', cierre: '17:00' } }
);

// --- BAZAR ---
comercios.push(
  {
    nombre: 'Las Lagoa',
    rubro: 'Bazar',
    ubicacion: 'Aristóbulo del Valle 274 e/Peru y Sarmiento, Ensenada',
    whatsapp: '5492216399442',
    instagram: 'https://www.instagram.com/eugenialagoa/',
    imagen: 'img/comercios/las lagoa.webp',
    descripcion: 'El bazar mas grande de la región',
    horario: { dias: 'Lunes a viernes', apertura: '09:30', cierre: '20:00' },
  },
  {
    nombre: 'Pacchialat',
    rubro: 'Bazar',
    ubicacion: 'La Merced 502 , Ensenada',
    whatsapp: '5492216203492',
    instagram: 'https://www.instagram.com/pacchialat/',
    imagen: 'img/comercios/Pacchialat.webp',
    descripcion: 'Todo para el hogar.',
    horario: { dias: 'Lunes a viernes', apertura: '08:30', cierre: '12:30' },
  },
  {
    nombre: 'Bazar Tres',
    rubro: 'Bazar',
    ubicacion: 'Dirección 3, Ensenada',
    whatsapp: '5492213333333',
    instagram: 'https://instagram.com/bazartres',
    imagen: 'img/comercios/bazar3.webp',
    descripcion: 'Descripción de Bazar Tres.',
    horario: { dias: 'Lunes a Sábado', apertura: '09:00', cierre: '20:00' },
  },
  {
    nombre: 'Bazar Cuatro',
    rubro: 'Bazar',
    ubicacion: 'Dirección 4, Ensenada',
    whatsapp: '5492214444444',
    instagram: 'https://instagram.com/bazarcuatro',
    imagen: 'img/comercios/bazar4.webp',
    descripcion: 'Descripción de Bazar Cuatro.',
    horario: { dias: 'Lunes a Sábado', apertura: '09:00', cierre: '20:00' },
  },
  {
    nombre: 'Bazar Cinco',
    rubro: 'Bazar',
    ubicacion: 'Dirección 5, Ensenada',
    whatsapp: '5492215555555',
    instagram: 'https://instagram.com/bazarcinco',
    imagen: 'img/comercios/bazar5.webp',
    descripcion: 'Descripción de Bazar Cinco.',
    horario: { dias: 'Lunes a Sábado', apertura: '09:00', cierre: '20:00' },
  },
  {
    nombre: 'Bazar Seis',
    rubro: 'Bazar',
    ubicacion: 'Dirección 6, Ensenada',
    whatsapp: '5492216666666',
    instagram: 'https://instagram.com/bazarseis',
    imagen: 'img/comercios/bazar6.webp',
    descripcion: 'Descripción de Bazar Seis.',
    horario: { dias: 'Lunes a Sábado', apertura: '09:00', cierre: '20:00' },
  }
);

const categories = [
  { key: 'Todos',       label: 'Todos',       icon: '◎'  },
  { key: 'Gastronomía', label: 'Gastronomía', icon: '🍕' },
  { key: 'Panadería',   label: 'Panadería',   icon: '🥖' },
  { key: 'Bazar',       label: 'Bazar',       icon: '🏺' },
  { key: 'Almacén',      label: 'Almacén',      icon: '🛒' },
  { key: 'Verdulería',   label: 'Verdulería',   icon: '🥬' },
  { key: 'Kiosco',      label: 'Kiosco',      icon: '🍬' },
  { key: 'Ferretería',   label: 'Ferretería',   icon: '🔨' },
  { key: 'Farmacia',     label: 'Farmacia',     icon: '💊' },
  { key: 'Inmobiliaria', label: 'Inmobiliaria', icon: '🏠' },
  { key: 'Abogados',    label: 'Abogados',    icon: '⚖️' },
  { key: 'Servicios',   label: 'Servicios',   icon: '🛠️' },
  { key: 'Moda',        label: 'Moda',        icon: '👗' },
  { key: 'Otros',       label: 'Otros',       icon: '✨' },
]

/* ----------------------------------------------------------
   ESTADO: filtros activos
   ---------------------------------------------------------- */
const state = {
  query: '',
  category: 'Todos',
}

/* ----------------------------------------------------------
   REFERENCIAS AL DOM
   ---------------------------------------------------------- */
const searchInput     = document.getElementById('searchInput')
const categoryFilters = document.getElementById('categoryFilters')
const cardsGrid       = document.getElementById('cardsGrid')
const emptyState      = document.getElementById('emptyState')
const resultsSummary  = document.getElementById('resultsSummary')
const totalCount      = document.getElementById('totalCount')
const openCount       = document.getElementById('openCount')
const categoryCount   = document.getElementById('categoryCount')

/* ----------------------------------------------------------
   HORARIOS: zona horaria Argentina (independiente del device)
   ---------------------------------------------------------- */
function toMinutes(hourString) {
  const [hours, minutes] = hourString.split(':').map(Number)
  return hours * 60 + minutes
}

function getCurrentMinutes() {
  const formatter = new Intl.DateTimeFormat('es-AR', {
    timeZone: 'America/Argentina/Buenos_Aires',
    hour:     'numeric',
    minute:   'numeric',
    hour12:   false,
  })
  const parts = formatter.formatToParts(new Date())
  const h = parseInt(parts.find((p) => p.type === 'hour').value, 10)
  const m = parseInt(parts.find((p) => p.type === 'minute').value, 10)
  return h * 60 + m
}

function isOpenNow(horario) {
  const currentMinutes = getCurrentMinutes()
  const opening = toMinutes(horario.apertura)
  const closing  = toMinutes(horario.cierre)

  // Soporte para rangos que cruzan la medianoche (ej: 22:00–02:00)
  if (closing < opening) {
    return currentMinutes >= opening || currentMinutes <= closing
  }
  return currentMinutes >= opening && currentMinutes <= closing
}

/* ----------------------------------------------------------
   IMÁGENES: lazy + async + skeleton + fallback robusto

   handleImgLoad  → agrega .img-loaded al wrapper → opacidad 1
                    y apaga el shimmer (style.css).
   handleImgError → reemplaza la imagen rota por el fallback
                    de marca. this.onerror=null evita loops.

   Ambas funciones necesitan estar en window para que los
   atributos onload/onerror generados por createCard funcionen.
   ---------------------------------------------------------- */
function handleImgLoad(img) {
  const wrapper = img.closest('.card-img-wrapper')
  if (wrapper) wrapper.classList.add('img-loaded')
}

function handleImgError(img) {
  img.onerror = null                         // evitar loop si default-comercio.svg falla
  img.src = 'img/default-comercio.svg'       // fallback de marca
  // El onload del nuevo src activará handleImgLoad automáticamente
}

/* ----------------------------------------------------------
   UTILIDADES
   ---------------------------------------------------------- */
function getWhatsAppLink(phone) {
  const message = encodeURIComponent(
    'Hola vengo desde EnsenadaConectada , queria saber ...',
  )
  return `https://wa.me/${phone}?text=${message}`
}

/* ----------------------------------------------------------
   RENDERIZADO: card individual
   ---------------------------------------------------------- */
function createCard(comercio, index = 0) {
  const open = isOpenNow(comercio.horario)
  const statusClasses = open
    ? 'bg-emerald-50 text-emerald-700 ring-emerald-600/20'
    : 'bg-rose-50 text-rose-700 ring-rose-600/20'

  const delay = index * 65

  let horarioHtml = ''
  if (comercio.nombre === 'Las Lagoa') {
    horarioHtml = `
      <div class="flex items-start gap-2">
        <dt class="mt-0.5 text-brand">◔</dt>
        <dd>Lunes a viernes · 09:30 – 20:00</dd>
      </div>
      <div class="flex items-start gap-2">
        <dt class="mt-0.5 text-brand">◔</dt>
        <dd>Sábados · 17:30 – 20:30</dd>
      </div>
    `;
  } else if (comercio.nombre === 'Pacchialat') {
    horarioHtml = `
      <div class="flex items-start gap-2">
        <dt class="mt-0.5 text-brand">◔</dt>
        <dd>Lunes a viernes · 08:30 – 12:30</dd>
      </div>
      <div class="flex items-start gap-2">
        <dt class="mt-0.5 text-brand">◔</dt>
        <dd>Lunes a viernes · 16:00 – 20:00</dd>
      </div>
      <div class="flex items-start gap-2">
        <dt class="mt-0.5 text-brand">◔</dt>
        <dd>Sábados · 09:00 – 13:00</dd>
      </div>
    `
  } else {
    horarioHtml = `
      <div class="flex items-start gap-2">
        <dt class="mt-0.5 text-brand">◔</dt>
        <dd>${comercio.horario.dias ? comercio.horario.dias + ' · ' : ''}${comercio.horario.apertura} – ${comercio.horario.cierre}</dd>
      </div>
    `
  }

  return `
    <article
      class="card-enter overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-2xl relative"
      style="animation-delay:${delay}ms"
    >
      <div class="absolute left-1/2 -bottom-3 z-0 h-6 w-4/5 -translate-x-1/2 rounded-full blur-[8px] bg-cyan-400/60 pointer-events-none"></div>
      <div class="card-img-wrapper">
        <img
          src="${comercio.imagen}"
          alt="${comercio.nombre}"
          loading="lazy"
          decoding="async"
          onload="handleImgLoad(this)"
          onerror="handleImgError(this)"
        />
        <span class="card-status-badge inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusClasses}">
          ${open ? 'Abierto' : 'Cerrado'}
        </span>
      </div>

      <div class="space-y-4 p-5">
        <div class="space-y-2">
          <div class="flex items-start justify-between gap-3">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">${comercio.rubro}</p>
              <h3 class="mt-1 text-xl font-bold tracking-tight text-slate-900">${comercio.nombre}</h3>
            </div>
          </div>
          <p class="text-sm leading-6 text-black">${comercio.descripcion}</p>
        </div>

        <dl class="space-y-2 text-sm text-slate-600">
          <div class="flex items-start gap-2">
            <dt class="mt-0.5 text-brand">●</dt>
            <dd>${comercio.ubicacion}</dd>
          </div>
          ${horarioHtml}
        </dl>

        <div class="grid grid-cols-3 gap-2 relative z-10">
          <a
            href="${getWhatsAppLink(comercio.whatsapp)}"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center justify-center rounded-xl bg-brand p-2 text-lg text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-[0_0_12px_2px_rgba(34,211,238,0.7)]"
            title="Contactar por WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 6.318h-.001a9.87 9.87 0 01-4.988-1.358l-.361-.214-3.709.982.991-3.617-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.987c-.003 5.451-4.437 9.885-9.885 9.885zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.687a11.876 11.876 0 005.735 1.459h.005c6.554 0 11.889-5.335 11.892-11.893a11.821 11.821 0 00-3.481-8.484z"/></svg>
          </a>
          <a
            href="${comercio.instagram}"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center justify-center rounded-xl border border-red-500 bg-[#ed4956] p-2 text-lg text-white transition hover:bg-[#c13584] hover:border-red-600 shadow-[0_0_12px_2px_rgba(34,211,238,0.7)]"
            title="Ver Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.775.13 4.602.443 3.635 1.411 2.668 2.378 2.355 3.551 2.297 4.828 2.239 6.108 2.225 6.517 2.225 12c0 5.483.014 5.892.072 7.172.058 1.277.371 2.45 1.338 3.417.967.967 2.14 1.28 3.417 1.338C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.45-.371 3.417-1.338.967-.967 1.28-2.14 1.338-3.417.058-1.28.072-1.689.072-7.172 0-5.483-.014-5.892-.072-7.172-.058-1.277-.371-2.45-1.338-3.417C19.398.443 18.225.13 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"/></svg>
          </a>
          <a
            href="#"
            tabindex="-1"
            aria-disabled="true"
            class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-200 p-2 text-base font-semibold text-slate-400 cursor-not-allowed shadow-[0_0_12px_2px_rgba(34,211,238,0.3)]"
            title="Sitio web próximamente"
          >
            AppWeb
          </a>
        </div>
      </div>
    </article>
  `
}

/* ----------------------------------------------------------
   RENDERIZADO: pills de categoría
   ---------------------------------------------------------- */
function renderFilters() {
  categoryFilters.innerHTML = categories
    .map((category) => {
      const active = state.category === category.key
      return `
        <button
          type="button"
          data-category="${category.key}"
          class="inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
            active
              ? 'border-brand bg-brand text-white shadow-lg shadow-blue-900/20'
              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-100'
          }"
        >
          <span>${category.icon}</span>
          <span>${category.label}</span>
        </button>
      `
    })
    .join('')
}

/* ----------------------------------------------------------
   LÓGICA DE FILTRADO
   ---------------------------------------------------------- */
function getFilteredComercios() {
  return comercios.filter((comercio) => {
    const normalize = (str) => str.normalize('NFD').replace(/\s+/g, '').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const matchCategory =
      state.category === 'Todos' ||
      normalize(comercio.rubro) === normalize(state.category)
    const matchQuery = comercio.nombre
      .toLowerCase()
      .includes(state.query.trim().toLowerCase())
    return matchCategory && matchQuery
  })
}

/* ----------------------------------------------------------
   RENDERIZADO: grilla de cards
   ---------------------------------------------------------- */
function renderCards() {
  const filtered = getFilteredComercios()
  const openNow  = filtered.filter((c) => isOpenNow(c.horario)).length

  cardsGrid.innerHTML = filtered.map((c, i) => createCard(c, i)).join('')
  emptyState.classList.toggle('hidden', filtered.length > 0)
  cardsGrid.classList.toggle('hidden', filtered.length === 0)

  totalCount.textContent   = filtered.length
  openCount.textContent    = openNow
  resultsSummary.textContent = `${filtered.length} resultado${filtered.length === 1 ? '' : 's'}`
}

/* ----------------------------------------------------------
   EVENTOS
   ---------------------------------------------------------- */
searchInput.addEventListener('input', (event) => {
  state.query = event.target.value
  renderCards()
})

categoryFilters.addEventListener('click', (event) => {
  const button = event.target.closest('[data-category]')
  if (!button) return
  state.category = button.dataset.category
  renderFilters()
  renderCards()
})

/* ----------------------------------------------------------
   INIT: primer render al cargar la página
   ---------------------------------------------------------- */
renderFilters()
renderCards()

if (categoryCount) {
  categoryCount.textContent = categories.filter((category) => category.key !== 'Todos').length
}
