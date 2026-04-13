import { MessageCircleMore } from 'lucide-react'

export function FloatingWhatsApp({ whatsappConfig }) {
  const href = `https://wa.me/${whatsappConfig.number}?text=${encodeURIComponent(whatsappConfig.message)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-4 z-50 inline-flex items-center gap-3 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-[0_20px_70px_-35px_rgba(15,23,42,0.8)] transition hover:-translate-y-1 hover:bg-blue-600 sm:right-6"
    >
      <span className="rounded-full bg-white/15 p-2">
        <MessageCircleMore className="size-4" />
      </span>
      {whatsappConfig.label}
    </a>
  )
}