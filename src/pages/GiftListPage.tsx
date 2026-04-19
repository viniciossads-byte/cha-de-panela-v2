import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useGifts } from '@/hooks/useGifts'
import { CATEGORIES, Category } from '@/lib/gifts'
import { Heart, LogOut, Check, X } from 'lucide-react'

const WEDDING_DATE = new Date('2026-06-07T00:00:00')

function useCountdown() {
  const [diff, setDiff] = useState(() => WEDDING_DATE.getTime() - Date.now())
  useEffect(() => {
    const id = setInterval(() => setDiff(WEDDING_DATE.getTime() - Date.now()), 1000)
    return () => clearInterval(id)
  }, [])
  const total = Math.max(0, diff)
  const days = Math.floor(total / 86400000)
  const hours = Math.floor((total % 86400000) / 3600000)
  const minutes = Math.floor((total % 3600000) / 60000)
  const seconds = Math.floor((total % 60000) / 1000)
  return { days, hours, minutes, seconds, passed: diff <= 0 }
}

export default function GiftListPage() {
  const { user, logout } = useAuth()
  const { gifts, loading, reserve, unreserve } = useGifts()
  const [activeCategory, setActiveCategory] = useState<Category | 'Todos'>('Todos')
  const [confirming, setConfirming] = useState<string | null>(null)
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null)
  const [showCountdown, setShowCountdown] = useState(true)
  const countdown = useCountdown()

  const showToast = (msg: string, type: 'success' | 'error') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 5000)
  }

  const myReserved = gifts.filter(g => g.reserved_by === user?.name)

  const filtered = (activeCategory === 'Todos'
    ? gifts
    : gifts.filter(g => g.category === activeCategory)
  ).filter(g => !g.reserved_by || g.reserved_by === user?.name)

  const handleReserve = async (giftId: string) => {
    const gift = gifts.find(g => g.id === giftId)
    // Open window synchronously (before await) so mobile browsers don't block it
    const newTab = gift?.link ? window.open('', '_blank') : null
    const ok = await reserve(giftId, user!.name)
    setConfirming(null)
    if (ok) {
      if (newTab && gift?.link) newTab.location.href = gift.link
      else newTab?.close()
      showToast('Presente escolhido! Abrimos o link como sugestão — você pode comprar onde preferir. 🎁', 'success')
    } else {
      newTab?.close()
      showToast('Ops, alguém acabou de reservar esse presente.', 'error')
    }
  }

  const handleUnreserve = async (giftId: string) => {
    const ok = await unreserve(giftId, user!.name)
    if (ok) showToast('Reserva cancelada.', 'success')
    else showToast('Não foi possível cancelar. Tente novamente.', 'error')
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white border-b border-gold-light sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-gold fill-gold" />
            <span className="font-display text-lg font-semibold text-gray-800">
              Vini & Victoria
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 hidden sm:block">
              Olá, <span className="text-gray-700 font-medium">{user?.name.split(' ')[0]}</span>
            </span>
            <button
              onClick={logout}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              <LogOut className="h-3.5 w-3.5" />
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-gray-800 mb-3">
            Lista de Presentes
          </h2>
          <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
            Estamos montando nossa casa e ficamos muito felizes por você fazer parte desse momento.
          </p>
        </div>

        {/* My reservations banner */}
        {myReserved.length > 0 && (
          <div className="bg-gold-light border border-gold rounded-2xl p-4 mb-8 flex items-start gap-3">
            <Check className="h-5 w-5 text-gold-dark mt-0.5 shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gold-dark mb-1">
                Você escolheu {myReserved.length} presente{myReserved.length > 1 ? 's' : ''}:
              </p>
              <ul className="text-sm text-gold-dark space-y-0.5 mb-2">
                {myReserved.map(g => (
                  <li key={g.id}>• {g.name}</li>
                ))}
              </ul>
              <p className="text-xs text-gold-dark opacity-70 leading-relaxed">
                Precisa cancelar? Manda uma mensagem para os noivos:{' '}
                <a
                  href="https://wa.me/5511916190887?text=Oi%20Vini!%20Preciso%20cancelar%20minha%20reserva%20de%20presente."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium hover:opacity-100"
                >
                  falar pelo WhatsApp
                </a>
              </p>
            </div>
          </div>
        )}

        {/* Category filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
          {(['Todos', ...CATEGORIES] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150 ${
                activeCategory === cat
                  ? 'bg-gold text-white'
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-gold hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(gift => {
              const isReservedByMe = gift.reserved_by === user?.name
              const isConfirming = confirming === gift.id

              return (
                <div
                  key={gift.id}
                  className={`bg-white rounded-2xl overflow-hidden border transition-all duration-200 ${
                    isReservedByMe
                      ? 'border-gold shadow-md'
                      : 'border-gray-100 hover:shadow-md hover:border-gold-light'
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={gift.image}
                      alt={gift.name}
                      className="w-full h-full object-cover"
                    />
                    {isReservedByMe && (
                      <div className="absolute top-3 right-3 bg-gold rounded-full p-1.5 shadow">
                        <Check className="h-3.5 w-3.5 text-white" />
                      </div>
                    )}
                    <span className="absolute top-3 left-3 bg-white/90 text-xs text-gray-500 px-2 py-1 rounded-full">
                      {gift.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1">{gift.name}</h3>
                    <p className="text-xs text-gray-400 mb-3 leading-relaxed">{gift.description}</p>

                    <div className="flex items-center justify-between mb-3">
                      <span className="font-display text-lg text-gold font-semibold">
                        {gift.price}
                      </span>
                      <a
                        href={gift.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-400 hover:text-gold underline underline-offset-2 transition-colors"
                        onClick={e => e.stopPropagation()}
                      >
                        Ver produto →
                      </a>
                    </div>

                    <div className="flex items-center justify-end">
                      {isReservedByMe ? (
                        <span className="text-xs text-gold font-medium flex items-center gap-1">
                          <Check className="h-3 w-3" /> Escolhido por você
                        </span>
                      ) : isConfirming ? (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setConfirming(null)}
                            className="text-xs text-gray-400 hover:text-gray-600"
                          >
                            Cancelar
                          </button>
                          <button
                            onClick={() => handleReserve(gift.id)}
                            className="text-xs bg-gold text-white px-3 py-1.5 rounded-lg hover:bg-gold-dark transition-colors"
                          >
                            Confirmar
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setConfirming(gift.id)}
                          className="text-xs bg-gray-800 hover:bg-gold text-white px-4 py-2 rounded-lg transition-colors duration-200"
                        >
                          Escolher presente
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p>Nenhum presente nessa categoria.</p>
          </div>
        )}
      </main>

      {/* Countdown popup */}
      {showCountdown && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-8 relative text-center">
            <button
              onClick={() => setShowCountdown(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <Heart className="h-8 w-8 text-gold fill-gold mx-auto mb-4" />
            <h3 className="font-display text-2xl font-semibold text-gray-800 mb-1">
              Vini & Victoria
            </h3>
            <p className="text-sm text-gray-400 mb-2">7 de junho de 2026</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs mx-auto">
              Você foi escolhido com muito carinho para compartilhar esse momento único conosco.
            </p>

            {countdown.passed ? (
              <p className="font-display text-xl text-gold font-semibold">Hoje é o grande dia! 🎉</p>
            ) : (
              <div className="grid grid-cols-4 gap-3">
                {[
                  { value: countdown.days, label: 'dias' },
                  { value: countdown.hours, label: 'horas' },
                  { value: countdown.minutes, label: 'min' },
                  { value: countdown.seconds, label: 'seg' },
                ].map(({ value, label }) => (
                  <div key={label} className="flex flex-col items-center bg-cream rounded-xl py-3">
                    <span className="font-display text-3xl font-semibold text-gray-800 leading-none">
                      {String(value).padStart(2, '0')}
                    </span>
                    <span className="text-xs text-gray-400 mt-1">{label}</span>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() => setShowCountdown(false)}
              className="mt-6 w-full bg-gold hover:bg-gold-dark text-white font-medium py-3 rounded-xl transition-colors text-sm"
            >
              Ver lista de presentes
            </button>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 rounded-xl shadow-lg text-sm font-medium z-50 transition-all duration-300 ${
            toast.type === 'success'
              ? 'bg-gray-800 text-white'
              : 'bg-red-500 text-white'
          }`}
        >
          {toast.msg}
        </div>
      )}
    </div>
  )
}
