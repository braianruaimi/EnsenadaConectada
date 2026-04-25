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
    imagen: 'img/comercios/cafe-del-puerto.svg',
    descripcion: 'Bar y despacho de cervezas artesanales.',
    horario: { dias: 'Miércoles a Domingos', apertura: '18:00', cierre: '23:30' },
  },
  {
    nombre: "MILO'S PIZZA",
    rubro: 'Gastronomía',
    ubicacion: 'Paseo Gastronómico, Sidotti 134, Ensenada',
    whatsapp: '542216144385',
    instagram: 'https://www.instagram.com/milospizza.ensenada/',
    imagen: 'img/comercios/taller-delta.svg',
    descripcion: 'Pizza en horno de barro, calzone, empanadas, milanesas, pastas y tapeos.',
    horario: { dias: 'Miércoles a Domingo', apertura: '19:00', cierre: '00:00' },
  },
  {
    nombre: 'DockEnsenada',
    rubro: 'Gastronomía',
    ubicacion: 'Paseo Gastronómico, Sidotti 134, Ensenada',
    whatsapp: '542213641874',
    instagram: 'https://www.instagram.com/dockensenada/',
    imagen: 'img/comercios/atelier-marea.svg',
    descripcion: 'Cocina a leña, tapas, sandwiches, cervezas, vinos y cocktails.',
    horario: { dias: 'Miércoles a Sábados', apertura: '19:00', cierre: '02:00' },
  },
  {
    nombre: 'Gliamichi Burgers',
    rubro: 'Gastronomía',
    ubicacion: 'Paseo Gastronómico, Sidotti 134, Ensenada',
    whatsapp: '5492212003907',
    instagram: 'https://www.instagram.com/gliamichiburgers/',
    imagen: 'img/comercios/clinica-rio.svg',
    descripcion: 'Hamburguesas, pizzas, papas fritas y piques.',
    horario: { dias: 'Miércoles a Domingos', apertura: '19:00', cierre: '23:30' },
  },
  {
    nombre: 'Thionis Artesanos del Helado',
    rubro: 'Gastronomía',
    ubicacion: 'Paseo Gastronómico, Sidotti 134, Ensenada',
    whatsapp: '5492215087133',
    instagram: 'https://www.instagram.com/thionisartesanosdelhelado/',
    imagen: 'img/comercios/estudio-prisma.svg',
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

const categories = [
  { key: 'Todos',       label: 'Todos',       icon: '◎'  },
  { key: 'Gastronomía', label: 'Gastronomía', icon: '🍕' },
  { key: 'Servicios',   label: 'Servicios',   icon: '🛠️' },
  { key: 'Moda',        label: 'Moda',        icon: '👗' },
  { key: 'Salud',       label: 'Salud',       icon: '🩺' },
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
    'Hola, te vi en Ensenada Conectada y quería consultarte...',
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

  return `
    <article
      class="card-enter overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style="animation-delay:${delay}ms"
    >
      <!-- Wrapper con skeleton shimmer y aspect-ratio 16:9 fijo (style.css) -->
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
          <p class="text-sm leading-6 text-slateCustom">${comercio.descripcion}</p>
        </div>

        <dl class="space-y-2 text-sm text-slate-600">
          <div class="flex items-start gap-2">
            <dt class="mt-0.5 text-brand">●</dt>
            <dd>${comercio.ubicacion}</dd>
          </div>
          <div class="flex items-start gap-2">
            <dt class="mt-0.5 text-brand">◔</dt>
            <dd>${comercio.horario.dias ? comercio.horario.dias + ' · ' : ''}${comercio.horario.apertura} – ${comercio.horario.cierre}</dd>
          </div>
        </dl>

        <div class="grid gap-3">
          <a
            href="${getWhatsAppLink(comercio.whatsapp)}"
            target="_blank"
            rel="noreferrer"
            class="inline-flex w-full items-center justify-center rounded-2xl bg-brand px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-100"
          >
            Contactar por WhatsApp
          </a>
          <a
            href="${comercio.instagram}"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center justify-center rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Ver Instagram
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
    const matchCategory =
      state.category === 'Todos' ||
      comercio.rubro.toLowerCase() === state.category.toLowerCase()
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
