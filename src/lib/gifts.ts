export type Category = 'Cozinha' | 'Quarto' | 'Sala' | 'Banheiro' | 'Eletrodomésticos' | 'Outros'

export interface Gift {
  id: string
  name: string
  description: string
  category: Category
  price: number
  image: string
  reserved_by?: string | null
}

export const GIFTS: Gift[] = [
  // Cozinha
  {
    id: '1',
    name: 'Jogo de Panelas',
    description: 'Conjunto com 5 peças antiaderente, cabo de baquelite',
    category: 'Cozinha',
    price: 380,
    image: 'https://images.unsplash.com/photo-1584990347449-a5d9f800a783?w=400&h=300&fit=crop',
  },
  {
    id: '2',
    name: 'Jogo de Facas',
    description: 'Kit com 6 facas em aço inox com suporte de madeira',
    category: 'Cozinha',
    price: 220,
    image: 'https://images.unsplash.com/photo-1566454825481-9c31d74a9571?w=400&h=300&fit=crop',
  },
  {
    id: '3',
    name: 'Jogo de Pratos (12 peças)',
    description: 'Porcelana branca — 6 fundos, 6 rasos',
    category: 'Cozinha',
    price: 180,
    image: 'https://images.unsplash.com/photo-1603199506016-5a4f6b1c7f6b?w=400&h=300&fit=crop',
  },
  {
    id: '4',
    name: 'Jogo de Copos (6 peças)',
    description: 'Cristal ecológico, 350ml, para água e suco',
    category: 'Cozinha',
    price: 120,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop',
  },
  {
    id: '5',
    name: 'Tábua de Madeira',
    description: 'Tábua de corte em madeira de bambu, 40x25cm',
    category: 'Cozinha',
    price: 90,
    image: 'https://images.unsplash.com/photo-1630394286685-0ceb2cb2da69?w=400&h=300&fit=crop',
  },
  // Quarto
  {
    id: '6',
    name: 'Jogo de Cama Queen',
    description: '4 peças 100% algodão fio 400, cor branca',
    category: 'Quarto',
    price: 320,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
  },
  {
    id: '7',
    name: 'Conjunto de Toalhas (4 peças)',
    description: '2 toalhas de banho + 2 de rosto, algodão felpudo',
    category: 'Quarto',
    price: 140,
    image: 'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=400&h=300&fit=crop',
  },
  {
    id: '8',
    name: 'Travesseiro Casal (2 unid.)',
    description: 'Fibra siliconizada antialérgica, suporte médio',
    category: 'Quarto',
    price: 160,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
  },
  // Sala
  {
    id: '9',
    name: 'Porta-Retratos',
    description: 'Conjunto 3 porta-retratos em metal dourado',
    category: 'Sala',
    price: 110,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&h=300&fit=crop',
  },
  {
    id: '10',
    name: 'Vaso Decorativo',
    description: 'Cerâmica branca, 30cm de altura',
    category: 'Sala',
    price: 95,
    image: 'https://images.unsplash.com/photo-1612965607446-25e1332775ae?w=400&h=300&fit=crop',
  },
  {
    id: '11',
    name: 'Jogo Americano (4 peças)',
    description: 'Algodão natural, 30x40cm, cor natural',
    category: 'Sala',
    price: 70,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
  },
  // Banheiro
  {
    id: '12',
    name: 'Jogo de Banheiro (5 peças)',
    description: 'Tapete + porta-shampoo + saboneteira + porta-papel + lixeira',
    category: 'Banheiro',
    price: 190,
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop',
  },
  {
    id: '13',
    name: 'Toalha de Piso',
    description: 'Tapete de banheiro felpudo, 50x70cm',
    category: 'Banheiro',
    price: 60,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop',
  },
  // Eletrodomésticos
  {
    id: '14',
    name: 'Cafeteira',
    description: 'Cafeteira elétrica com jarra de vidro, 12 xícaras',
    category: 'Eletrodomésticos',
    price: 180,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=300&fit=crop',
  },
  {
    id: '15',
    name: 'Liquidificador',
    description: '1200W, 3 velocidades + pulsar, jarra de vidro',
    category: 'Eletrodomésticos',
    price: 220,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop',
  },
  {
    id: '16',
    name: 'Ferro de Passar',
    description: 'A vapor, 1800W, base de cerâmica',
    category: 'Eletrodomésticos',
    price: 160,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
  },
  {
    id: '17',
    name: 'Batedeira',
    description: '400W, tigela de 3,5L, 5 velocidades',
    category: 'Eletrodomésticos',
    price: 280,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
  },
  // Outros
  {
    id: '18',
    name: 'Cesta de Café da Manhã',
    description: 'Cesta com produtos especiais para vocês dois',
    category: 'Outros',
    price: 200,
    image: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=400&h=300&fit=crop',
  },
  {
    id: '19',
    name: 'Vinho + Taças',
    description: 'Garrafa de vinho especial + 2 taças gravadas',
    category: 'Outros',
    price: 150,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop',
  },
  {
    id: '20',
    name: 'Voucher Jantar Romântico',
    description: 'Contribuição para um jantar especial do casal',
    category: 'Outros',
    price: 250,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop',
  },
]

export const CATEGORIES: Category[] = [
  'Cozinha',
  'Quarto',
  'Sala',
  'Banheiro',
  'Eletrodomésticos',
  'Outros',
]
