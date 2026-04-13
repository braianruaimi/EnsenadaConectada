import { useState } from 'react'

export function FloatingBusinessForm({ open, onClose }) {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    comercio: '',
  })
  const [enviado, setEnviado] = useState(false)

  if (!open) return null

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setEnviado(true)
    // Aquí podrías enviar los datos a un backend o servicio externo
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <button
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-700"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>
        <h3 className="mb-4 text-xl font-semibold text-slate-900">Sumar mi negocio</h3>
        {enviado ? (
          <div className="py-8 text-center text-green-600 font-semibold">
            ¡Gracias! Pronto nos pondremos en contacto.
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-slate-700">Nombre y apellido</label>
              <input
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Número de teléfono</label>
              <input
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                required
                type="tel"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                type="email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Nombre del comercio</label>
              <input
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
                name="comercio"
                value={form.comercio}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
            >
              Enviar
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
