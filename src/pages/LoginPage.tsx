import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { Heart } from 'lucide-react'

export default function LoginPage() {
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (name.trim().length < 2) {
      setError('Por favor, insira seu nome completo.')
      return
    }
    login(name.trim())
    navigate('/')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-cream">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <Heart className="h-4 w-4 text-gold fill-gold" />
            <div className="h-px w-12 bg-gold" />
          </div>
          <h1 className="font-display text-4xl font-semibold text-gray-800 mb-1">
            Vini & Victoria
          </h1>
          <p className="text-sm text-gray-500 tracking-wide uppercase">Lista de Presentes</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gold-light p-8">
          <p className="text-gray-600 text-sm text-center mb-6 leading-relaxed">
            Insira seu nome para acessar a lista e escolher seu presente.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                Seu nome
              </label>
              <input
                type="text"
                value={name}
                onChange={e => { setName(e.target.value); setError('') }}
                placeholder="Ex: João Silva"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-gray-800 placeholder-gray-300 transition"
                autoFocus
              />
              {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-gold hover:bg-gold-dark text-white font-medium py-3 rounded-xl transition-colors duration-200"
            >
              Ver Lista de Presentes
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Mal podemos esperar para celebrar com você 🤍
        </p>
      </div>
    </div>
  )
}
