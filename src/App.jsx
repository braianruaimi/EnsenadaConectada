import { useMemo, useState } from 'react'
import { MapPinned, Search, Sparkles, Store } from 'lucide-react'
import { appConfig, negocios } from './config'
import { BusinessMap } from './components/BusinessMap'
import { ContentStudioPanel } from './components/ContentStudioPanel'
import { FloatingAssistant } from './components/FloatingAssistant'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { FloatingBusinessForm } from './components/FloatingBusinessForm'

function normalizeSearchValue(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

function App() {
  const [showBusinessForm, setShowBusinessForm] = useState(false)
  const [configData, setConfigData] = useState(() => ({
    ...appConfig,
    brand: { ...appConfig.brand },
    navigation: {
      ...appConfig.navigation,
      links: appConfig.navigation.links.map((link) => ({ ...link })),
    },
    hero: {
      ...appConfig.hero,
      stats: appConfig.hero.stats.map((stat) => ({ ...stat })),
    },
    search: { ...appConfig.search },
    categories: [...appConfig.categories],
    assistant: {
      ...appConfig.assistant,
      questions: appConfig.assistant.questions.map((item) => ({ ...item })),
    },
    whatsapp: { ...appConfig.whatsapp },
    businessCard: { ...appConfig.businessCard },
    publisher: {
      ...appConfig.publisher,
      steps: appConfig.publisher.steps.map((step) => ({ ...step })),
    },
    coverage: {
      ...appConfig.coverage,
      metrics: appConfig.coverage.metrics.map((metric) => ({ ...metric })),
      areas: appConfig.coverage.areas.map((area) => ({ ...area })),
    },
    studio: {
      ...appConfig.studio,
      sections: { ...appConfig.studio.sections },
      fields: { ...appConfig.studio.fields },
    },
    footer: { ...appConfig.footer },
  }))
  const [businessesData, setBusinessesData] = useState(() =>
    negocios.map((business) => ({ ...business })),
  )
  const [selectedCategory, setSelectedCategory] = useState(appConfig.categories[0])
  const [searchTerm, setSearchTerm] = useState('')

  const filteredBusinesses = useMemo(() => {
    const normalizedQuery = normalizeSearchValue(searchTerm)

    let filtered = businessesData.filter((business) => {
      const normalizedName = normalizeSearchValue(business.nombre)
      const normalizedCategory = normalizeSearchValue(business.categoria)
      const normalizedDescription = normalizeSearchValue(business.descripcion)
      const normalizedAddress = normalizeSearchValue(business.direccion || '')

      let matchesCategory =
        selectedCategory === 'Todos' || business.categoria === selectedCategory
      // Si la categoría seleccionada es "Comercios Destacados", filtrar por destacados
      if (selectedCategory === 'Comercios Destacados') {
        matchesCategory = business.destacado === true
      }

      const matchesSearch =
        normalizedQuery.length === 0 ||
        normalizedName.includes(normalizedQuery) ||
        normalizedCategory.includes(normalizedQuery) ||
        normalizedDescription.includes(normalizedQuery) ||
        normalizedAddress.includes(normalizedQuery)

      return matchesCategory && matchesSearch
    })

    // Si no hay búsqueda ni filtro, mostrar destacados primero
    if (selectedCategory === 'Todos' && !searchTerm) {
      filtered = [
        ...filtered.filter((b) => b.destacado),
        ...filtered.filter((b) => !b.destacado),
      ]
    }
    return filtered
  }, [businessesData, searchTerm, selectedCategory])

  const whatsappHref = `https://wa.me/${configData.whatsapp.number}?text=${encodeURIComponent(configData.whatsapp.message)}`

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(42,121,255,0.22),_transparent_30%),linear-gradient(180deg,_#f7fbff_0%,_#edf4ff_45%,_#f9fbff_100%)] text-slate-950">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-32 pt-6 sm:px-6 lg:px-8">
        <header
          id="inicio"
          className="sticky top-4 z-30 mb-8 rounded-full border border-white/50 bg-white/55 px-4 py-3 shadow-[0_20px_60px_-35px_rgba(18,73,180,0.65)] backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-blue-600">
                {configData.brand.badge}
              </p>
              <h1 className="mt-1 text-lg font-semibold text-slate-950 sm:text-xl">
                {configData.brand.name}
              </h1>
            </div>

            <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
              {configData.navigation.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full px-4 py-2 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setShowBusinessForm(true)}
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-blue-600"
            >
              {configData.navigation.cta}
            </button>
          </div>
        </header>

        <main className="flex-1">
          <section className="grid items-end gap-8 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:pb-18">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 shadow-sm backdrop-blur-md">
                {configData.hero.eyebrow}
              </span>

              <div className="space-y-4">
                <h2
                  className="max-w-3xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {configData.brand.name}
                </h2>
                <p className="max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                  {configData.brand.subtitle}
                </p>
                <p className="max-w-2xl text-base leading-7 text-slate-500">
                  {configData.hero.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#negocios"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
                >
                  {configData.hero.primaryAction}
                </a>
                <button
                  type="button"
                  onClick={() => setShowBusinessForm(true)}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-900 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700"
                >
                  {configData.hero.secondaryAction}
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {configData.hero.stats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-[28px] border border-white/60 bg-white/70 p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur-xl"
                >
                  <p className="text-3xl font-semibold text-slate-950">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="negocios"
            className="rounded-[32px] border border-white/60 bg-white/60 p-5 shadow-[0_30px_90px_-45px_rgba(26,72,167,0.4)] backdrop-blur-2xl sm:p-8"
          >
            <div className="flex flex-col gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600" id="categorias">
                  Directorio inteligente
                </p>
                <h3 className="text-2xl font-semibold text-slate-950 sm:text-3xl">
                  {configData.search.sectionTitle}
                </h3>
                <p className="max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                  {configData.search.sectionDescription}
                </p>
              </div>

              <label className="flex w-full items-center gap-3 rounded-2xl border border-white/60 bg-slate-950/4 px-4 py-3 shadow-inner shadow-white/50 sm:max-w-md">
                <Search className="size-5 text-blue-600" />
                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder={configData.search.placeholder}
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {configData.categories.map((category) => {
                const isActive = selectedCategory === category

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                        : 'border border-slate-200 bg-white/70 text-slate-600 hover:border-blue-200 hover:text-blue-700'
                    }`}
                  >
                    {category}
                  </button>
                )
              })}
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredBusinesses.length > 0 ? (
                filteredBusinesses.map((business) => {
                  const businessWhatsapp = `https://wa.me/${business.whatsapp}`

                  return (
                    <article
                      key={business.nombre}
                      className="group overflow-hidden rounded-[28px] border border-white/70 bg-white/80 shadow-[0_30px_90px_-50px_rgba(15,23,42,0.5)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_40px_110px_-45px_rgba(37,99,235,0.45)]"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={business.foto}
                          alt={business.nombre}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                          {business.categoria}
                        </span>
                      </div>

                      <div className="space-y-4 p-5">
                        <div className="space-y-2">
                          <h4 className="text-xl font-semibold text-slate-950">{business.nombre}</h4>
                          <p className="text-sm leading-6 text-slate-600">{business.descripcion}</p>
                        </div>

                        <div className="rounded-2xl bg-slate-950/4 p-4 text-sm text-slate-600">
                          <p className="font-semibold text-slate-900">{configData.businessCard.scheduleLabel}</p>
                          <p className="mt-1">{business.horarios}</p>
                        </div>

                        <div className="grid gap-2 text-sm font-medium sm:grid-cols-2">
                          <a
                            href={business.instagram}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-2xl border border-slate-200 px-4 py-3 text-center text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                          >
                            {configData.businessCard.instagramLabel}
                          </a>
                          {business.web ? (
                            <a
                              href={business.web}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-2xl border border-slate-200 px-4 py-3 text-center text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                            >
                              {configData.businessCard.websiteLabel}
                            </a>
                          ) : (
                            <span className="rounded-2xl border border-dashed border-slate-200 px-4 py-3 text-center text-slate-400">
                              {configData.businessCard.unavailableWebsite}
                            </span>
                          )}
                        </div>

                        <a
                          href={businessWhatsapp}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
                        >
                          {configData.businessCard.whatsappLabel}
                        </a>
                      </div>
                    </article>
                  )
                })
              ) : (
                <div className="col-span-full rounded-[28px] border border-dashed border-slate-200 bg-white/70 px-6 py-16 text-center backdrop-blur-xl">
                  <h4 className="text-xl font-semibold text-slate-900">
                    {configData.search.emptyTitle}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
                    {configData.search.emptyDescription}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchTerm('')
                      setSelectedCategory(configData.categories[0] ?? 'Todos')
                    }}
                    className="mt-6 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    {configData.search.resetText}
                  </button>
                </div>
              )}
            </div>
          </section>

          <section id="publicar" className="grid gap-6 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:py-14">
            <article className="rounded-[32px] border border-white/60 bg-slate-950 p-7 text-white shadow-[0_40px_100px_-55px_rgba(15,23,42,0.9)] sm:p-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-200">
                <Sparkles className="size-4" />
                {configData.publisher.badge}
              </div>
              <h3 className="mt-5 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
                {configData.publisher.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                {configData.publisher.description}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setShowBusinessForm(true)}
                  className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400"
                >
                  {configData.publisher.primaryAction}
                </button>
                <a
                  href="#cobertura"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {configData.publisher.secondaryAction}
                </a>
              </div>
            </article>

            <div className="grid gap-4 sm:grid-cols-3">
              {configData.publisher.steps.map((step) => (
                <article
                  key={step.title}
                  className="rounded-[28px] border border-white/60 bg-white/70 p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur-xl"
                >
                  <div className="inline-flex rounded-full bg-blue-50 p-3 text-blue-600">
                    <Store className="size-5" />
                  </div>
                  <h4 className="mt-5 text-lg font-semibold text-slate-950">{step.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="cobertura"
            className="rounded-[32px] border border-white/60 bg-white/65 p-6 shadow-[0_30px_90px_-45px_rgba(26,72,167,0.35)] backdrop-blur-2xl sm:p-8"
          >
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-700">
                  <MapPinned className="size-4" />
                  {configData.coverage.badge}
                </div>
                <h3 className="mt-5 max-w-xl text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
                  {configData.coverage.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                  {configData.coverage.description}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {configData.coverage.metrics.map((metric) => (
                    <article key={metric.label} className="rounded-2xl bg-slate-950 px-4 py-5 text-white">
                      <p className="text-lg font-semibold">{metric.value}</p>
                      <p className="mt-2 text-sm text-slate-300">{metric.label}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-100 bg-[linear-gradient(135deg,_rgba(37,99,235,0.12),_rgba(255,255,255,0.92))] p-5 shadow-inner shadow-white/60">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
                  {configData.coverage.legendTitle}
                </p>
                <div className="mt-5 space-y-4">
                  {configData.coverage.areas.map((area, index) => (
                    <article
                      key={area.name}
                      className="flex items-start gap-4 rounded-2xl border border-white/70 bg-white/70 p-4 backdrop-blur-lg"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-slate-950">{area.name}</h4>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{area.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-10 lg:py-14">
            <BusinessMap
              mapConfig={configData.map}
              businesses={filteredBusinesses}
              whatsappLabel={configData.map.popupCta}
            />
          </section>

          {/*
          <section id="editor" className="pt-10">
            <ContentStudioPanel
              configData={configData}
              setConfigData={setConfigData}
              businessesData={businessesData}
              setBusinessesData={setBusinessesData}
              setSelectedCategory={setSelectedCategory}
            />
          </section>
          */}
        </main>

        <footer id="contacto" className="pt-10">
          <div className="rounded-[32px] border border-white/60 bg-slate-950 px-6 py-8 text-white shadow-[0_40px_100px_-55px_rgba(15,23,42,0.9)] sm:px-8">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-300">{configData.brand.name}</p>
            <h5 className="mt-3 max-w-2xl text-2xl font-semibold sm:text-3xl">
              {configData.footer.title}
            </h5>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              {configData.footer.description}
            </p>
            <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <p>{configData.footer.copyright}</p>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="text-blue-300 transition hover:text-white">
                {configData.whatsapp.displayNumber}
              </a>
            </div>
          </div>
        </footer>
      </div>

      <FloatingAssistant assistantConfig={configData.assistant} />
      <FloatingWhatsApp whatsappConfig={configData.whatsapp} />
      <FloatingBusinessForm open={showBusinessForm} onClose={() => setShowBusinessForm(false)} />
    </div>
  )
}

export default App