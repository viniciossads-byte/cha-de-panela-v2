import { useAuth } from '@/hooks/useAuth'
import GiftListPage from './GiftListPage'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

export default function Index() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-cream">
        <div className="text-center max-w-xl">
          {/* Decorative top */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px w-20 bg-gold-light" />
            <Heart className="h-3 w-3 text-gold fill-gold" />
            <div className="h-px w-20 bg-gold-light" />
          </div>

          {/* Names */}
          <h1 className="font-display text-6xl md:text-7xl font-semibold text-gray-800 mb-4 tracking-tight">
            Vini & Victoria
          </h1>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 my-6">
            <div className="h-px w-16 bg-gold-light" />
            <Heart className="h-4 w-4 text-gold fill-gold" />
            <div className="h-px w-16 bg-gold-light" />
          </div>

          {/* Subtitle */}
          <p className="font-display text-2xl md:text-3xl text-gray-500 mb-4 italic">
            Lista de Presentes
          </p>

          <p className="text-base text-gray-400 mb-10 max-w-sm mx-auto leading-relaxed">
            Estamos montando nossa casa e ficamos muito felizes por você fazer parte desse momento.
          </p>

          {/* CTA */}
          <Link
            to="/login"
            className="inline-block bg-gold hover:bg-gold-dark text-white font-medium px-10 py-4 rounded-full transition-colors duration-200 text-base"
          >
            Ver Lista de Presentes
          </Link>

          {/* Bottom decoration */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <div className="h-px w-20 bg-gold-light" />
            <Heart className="h-3 w-3 text-gold fill-gold" />
            <div className="h-px w-20 bg-gold-light" />
          </div>
        </div>
      </div>
    )
  }

  return <GiftListPage />
}
