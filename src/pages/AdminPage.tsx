import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { GIFTS } from '@/lib/gifts'
import { Lock, Download, LogOut } from 'lucide-react'

const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASSWORD || 'admin2026'

interface Row {
  gift_id: string
  guest_name: string
  created_at: string
  email?: string
  phone?: string
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false)
  const [pass, setPass] = useState('')
  const [passError, setPassError] = useState(false)
  const [rows, setRows] = useState<Row[]>([])
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (pass === ADMIN_PASS) { setAuthed(true) } else { setPassError(true) }
  }

  useEffect(() => {
    if (!authed || !supabase) return
    setLoading(true)
    Promise.all([
      supabase.from('reservations').select('gift_id, guest_name, created_at').order('created_at'),
      supabase.from('guests').select('name, email, phone'),
    ]).then(([resv, guests]) => {
      const guestMap: Record<string, { email: string; phone: string }> = {}
      guests.data?.forEach(g => { guestMap[g.name] = { email: g.email, phone: g.phone } })
      const merged = (resv.data || []).map(r => ({
        ...r,
        email: guestMap[r.guest_name]?.email || '—',
        phone: guestMap[r.guest_name]?.phone || '—',
      }))
      setRows(merged)
      setLoading(false)
    })
  }, [authed])

  const downloadCSV = () => {
    const header = 'Presente,Preço,Nome,E-mail,Telefone,Data\n'
    const body = rows.map(r => {
      const gift = GIFTS.find(g => g.id === r.gift_id)
      const date = new Date(r.created_at).toLocaleString('pt-BR')
      return `"${gift?.name || r.gift_id}","${gift?.price || ''}","${r.guest_name}","${r.email}","${r.phone}","${date}"`
    }).join('\n')
    const blob = new Blob(['\uFEFF' + header + body], { type: 'text/csv;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a'); a.href = url; a.download = 'presentes.csv'; a.click()
    URL.revokeObjectURL(url)
  }

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gold-light p-8 w-full max-w-xs">
          <div className="flex justify-center mb-6">
            <Lock className="h-8 w-8 text-gold" />
          </div>
          <h2 className="font-display text-2xl font-semibold text-gray-800 text-center mb-6">Admin</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={pass}
              onChange={e => { setPass(e.target.value); setPassError(false) }}
              placeholder="Senha"
              autoFocus
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold text-gray-800 placeholder-gray-300"
            />
            {passError && <p className="text-xs text-red-500">Senha incorreta.</p>}
            <button type="submit" className="w-full bg-gold hover:bg-gold-dark text-white font-medium py-3 rounded-xl transition-colors">
              Entrar
            </button>
          </form>
        </div>
      </div>
    )
  }

  const totalReserved = rows.length
  const totalGifts = GIFTS.length

  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-white border-b border-gold-light sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-display text-xl font-semibold text-gray-800">
            Admin — Lista de Presentes
          </h1>
          <div className="flex items-center gap-3">
            <button
              onClick={downloadCSV}
              className="flex items-center gap-2 text-sm bg-gold text-white px-4 py-2 rounded-lg hover:bg-gold-dark transition-colors"
            >
              <Download className="h-4 w-4" />
              Exportar CSV
            </button>
            <button
              onClick={() => setAuthed(false)}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600"
            >
              <LogOut className="h-3.5 w-3.5" />
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total de presentes', value: totalGifts },
            { label: 'Presentes escolhidos', value: totalReserved },
            { label: 'Presentes disponíveis', value: totalGifts - totalReserved },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white rounded-2xl border border-gold-light p-5 text-center">
              <p className="font-display text-4xl font-semibold text-gold">{value}</p>
              <p className="text-xs text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
          </div>
        ) : rows.length === 0 ? (
          <p className="text-center text-gray-400 py-20">Nenhum presente escolhido ainda.</p>
        ) : (
          <div className="bg-white rounded-2xl border border-gold-light overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-cream border-b border-gold-light">
                <tr>
                  {['Presente', 'Preço', 'Nome', 'E-mail', 'Telefone', 'Data'].map(h => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {rows.map((r, i) => {
                  const gift = GIFTS.find(g => g.id === r.gift_id)
                  return (
                    <tr key={i} className="hover:bg-cream/50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-800">{gift?.name || r.gift_id}</td>
                      <td className="px-4 py-3 text-gold font-medium">{gift?.price || '—'}</td>
                      <td className="px-4 py-3 text-gray-700">{r.guest_name}</td>
                      <td className="px-4 py-3 text-gray-500">{r.email}</td>
                      <td className="px-4 py-3 text-gray-500">{r.phone}</td>
                      <td className="px-4 py-3 text-gray-400 text-xs">
                        {new Date(r.created_at).toLocaleString('pt-BR')}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
}
