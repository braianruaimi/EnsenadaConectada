import { useState } from 'react'
import { MessageCircleQuestion, X } from 'lucide-react'

export function FloatingAssistant({ assistantConfig }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-28 right-4 z-50 inline-flex items-center gap-3 rounded-full border border-white/60 bg-white/75 px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_70px_-35px_rgba(37,99,235,0.55)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white sm:right-6"
      >
        <span className="rounded-full bg-blue-600 p-2 text-white">
          <MessageCircleQuestion className="size-4" />
        </span>
        {assistantConfig.buttonLabel}
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/45 p-4 backdrop-blur-sm sm:items-center">
          <div className="w-full max-w-xl rounded-[28px] border border-white/60 bg-white/90 p-6 shadow-[0_35px_120px_-45px_rgba(15,23,42,0.7)] backdrop-blur-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-slate-950">{assistantConfig.modalTitle}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {assistantConfig.modalDescription}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-slate-200 p-2 text-slate-500 transition hover:border-blue-200 hover:text-blue-700"
                aria-label={assistantConfig.closeLabel}
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {assistantConfig.questions.map((item) => (
                <article key={item.question} className="rounded-2xl bg-slate-950/4 p-4">
                  <h4 className="text-sm font-semibold text-slate-950">{item.question}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}