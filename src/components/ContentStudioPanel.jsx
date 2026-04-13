import { useState } from 'react'
import { PencilLine, Settings2, X } from 'lucide-react'

function updateBusinessField(setBusinessesData, index, field, value) {
  setBusinessesData((current) =>
    current.map((business, businessIndex) =>
      businessIndex === index ? { ...business, [field]: value } : business,
    ),
  )
}

export function ContentStudioPanel({
  configData,
  setConfigData,
  businessesData,
  setBusinessesData,
  setSelectedCategory,
}) {
  const [isOpen, setIsOpen] = useState(false)

  const handleConfigChange = (section, field, value) => {
    setConfigData((current) => ({
      ...current,
      [section]: {
        ...current[section],
        [field]: value,
      },
    }))
  }

  const handleCategoriesChange = (value) => {
    const nextCategories = value
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean)

    const normalizedCategories = nextCategories.includes('Todos')
      ? nextCategories
      : ['Todos', ...nextCategories]

    setConfigData((current) => ({
      ...current,
      categories: normalizedCategories,
    }))
    setSelectedCategory(normalizedCategories[0] ?? 'Todos')
  }

  return (
    <div className="rounded-[32px] border border-white/60 bg-white/60 p-5 shadow-[0_30px_90px_-45px_rgba(26,72,167,0.3)] backdrop-blur-2xl sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            {configData.studio.badge}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-950 sm:text-3xl">
            {configData.studio.title}
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            {configData.studio.description}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
        >
          {isOpen ? <X className="size-4" /> : <PencilLine className="size-4" />}
          {isOpen ? configData.studio.closeLabel : configData.studio.buttonLabel}
        </button>
      </div>

      {isOpen ? (
        <div className="mt-8 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <article className="rounded-[28px] border border-white/70 bg-white/75 p-5 shadow-[0_20px_70px_-45px_rgba(15,23,42,0.35)]">
              <div className="flex items-center gap-3 text-slate-950">
                <Settings2 className="size-5 text-blue-600" />
                <h4 className="text-lg font-semibold">{configData.studio.sections.general}</h4>
              </div>

              <div className="mt-5 space-y-4">
                <label className="block space-y-2">
                  <span className="text-sm font-medium text-slate-700">
                    {configData.studio.fields.subtitle}
                  </span>
                  <textarea
                    value={configData.brand.subtitle}
                    onChange={(event) => handleConfigChange('brand', 'subtitle', event.target.value)}
                    className="min-h-28 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300"
                  />
                </label>

                <label className="block space-y-2">
                  <span className="text-sm font-medium text-slate-700">
                    {configData.studio.fields.heroDescription}
                  </span>
                  <textarea
                    value={configData.hero.description}
                    onChange={(event) => handleConfigChange('hero', 'description', event.target.value)}
                    className="min-h-28 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300"
                  />
                </label>

                <label className="block space-y-2">
                  <span className="text-sm font-medium text-slate-700">
                    {configData.studio.fields.searchPlaceholder}
                  </span>
                  <input
                    value={configData.search.placeholder}
                    onChange={(event) => handleConfigChange('search', 'placeholder', event.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300"
                  />
                </label>

                <label className="block space-y-2">
                  <span className="text-sm font-medium text-slate-700">
                    {configData.studio.fields.footerDescription}
                  </span>
                  <textarea
                    value={configData.footer.description}
                    onChange={(event) => handleConfigChange('footer', 'description', event.target.value)}
                    className="min-h-28 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300"
                  />
                </label>
              </div>
            </article>

            <article className="rounded-[28px] border border-white/70 bg-white/75 p-5 shadow-[0_20px_70px_-45px_rgba(15,23,42,0.35)]">
              <h4 className="text-lg font-semibold text-slate-950">
                {configData.studio.sections.categories}
              </h4>
              <label className="mt-5 block space-y-2">
                <span className="text-sm font-medium text-slate-700">
                  {configData.studio.fields.categories}
                </span>
                <input
                  value={configData.categories.join(', ')}
                  onChange={(event) => handleCategoriesChange(event.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300"
                />
              </label>
            </article>
          </div>

          <article className="rounded-[28px] border border-white/70 bg-white/75 p-5 shadow-[0_20px_70px_-45px_rgba(15,23,42,0.35)]">
            <h4 className="text-lg font-semibold text-slate-950">
              {configData.studio.sections.businesses}
            </h4>

            <div className="mt-5 space-y-5">
              {businessesData.slice(0, 3).map((business, index) => (
                <div key={business.nombre} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                    Negocio {index + 1}
                  </p>

                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    <label className="space-y-2 md:col-span-2">
                      <span className="text-sm font-medium text-slate-700">
                        {configData.studio.fields.businessName}
                      </span>
                      <input
                        value={business.nombre}
                        onChange={(event) =>
                          updateBusinessField(setBusinessesData, index, 'nombre', event.target.value)
                        }
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300"
                      />
                    </label>

                    <label className="space-y-2">
                      <span className="text-sm font-medium text-slate-700">
                        {configData.studio.fields.businessCategory}
                      </span>
                      <input
                        value={business.categoria}
                        onChange={(event) =>
                          updateBusinessField(setBusinessesData, index, 'categoria', event.target.value)
                        }
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300"
                      />
                    </label>

                    <label className="space-y-2">
                      <span className="text-sm font-medium text-slate-700">
                        {configData.studio.fields.businessWhatsapp}
                      </span>
                      <input
                        value={business.whatsapp}
                        onChange={(event) =>
                          updateBusinessField(setBusinessesData, index, 'whatsapp', event.target.value)
                        }
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300"
                      />
                    </label>

                    <label className="space-y-2 md:col-span-2">
                      <span className="text-sm font-medium text-slate-700">
                        {configData.studio.fields.businessDescription}
                      </span>
                      <textarea
                        value={business.descripcion}
                        onChange={(event) =>
                          updateBusinessField(setBusinessesData, index, 'descripcion', event.target.value)
                        }
                        className="min-h-24 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300"
                      />
                    </label>

                    <label className="space-y-2">
                      <span className="text-sm font-medium text-slate-700">
                        {configData.studio.fields.businessInstagram}
                      </span>
                      <input
                        value={business.instagram}
                        onChange={(event) =>
                          updateBusinessField(setBusinessesData, index, 'instagram', event.target.value)
                        }
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300"
                      />
                    </label>

                    <label className="space-y-2">
                      <span className="text-sm font-medium text-slate-700">
                        {configData.studio.fields.businessWebsite}
                      </span>
                      <input
                        value={business.web}
                        onChange={(event) =>
                          updateBusinessField(setBusinessesData, index, 'web', event.target.value)
                        }
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-300"
                      />
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      ) : null}
    </div>
  )
}