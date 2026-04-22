export type Category = 'Cozinha' | 'Banheiro' | 'Lavanderia'

export interface BuyOption {
  label: string
  url: string
  price: string
}

export interface Gift {
  id: string
  name: string
  description: string
  category: Category
  price: string
  image: string
  link: string
  buyOptions?: BuyOption[]
  reserved_by?: string | null
}

export const GIFTS: Gift[] = [
  // ── COZINHA ──────────────────────────────────────────────────────────────
  {
    id: '1', name: 'Panela de pressão 4,5L',
    description: 'Alumínio antiaderente, fechamento interno, 4,5 litros',
    category: 'Cozinha', price: 'R$ 129,00',
    image: 'https://http2.mlstatic.com/D_NQ_NP_897775-MLA95680308838_102025-O.webp',
    link: 'https://www.mercadolivre.com.br/panela-de-presso-mta-6002-aluminio-antiaderente-45l-cor-grafite/p/MLB45728206',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.mercadolivre.com.br/panela-de-presso-mta-6002-aluminio-antiaderente-45l-cor-grafite/p/MLB45728206', price: 'R$ 129,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/panela-pressao-4,5-litros', price: 'a partir de R$ 49,31' },
      { label: 'Shopee', url: 'https://shopee.com.br/Panela-De-Pressao-Aluminio-4-5-L-Fechamento-Interno-i.521604773.13549438010', price: 'a partir de R$ 55,90' },
    ],
  },
  {
    id: '2', name: 'Escorredor de massas',
    description: 'Inox com alças, ideal para macarrão e verduras',
    category: 'Cozinha', price: 'R$ 24,90',
    image: 'https://m.media-amazon.com/images/I/315AxozxbML._AC_UF350,350_QL80_.jpg',
    link: 'https://www.amazon.com.br/Escorredor-Massas-Prime-Lyor-2222/dp/B07BYWL17J/',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.amazon.com.br/Escorredor-Massas-Prime-Lyor-2222/dp/B07BYWL17J/', price: 'R$ 24,90' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/escorredor-de-massa', price: 'a partir de R$ 24,08' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=escorredor+de+massas', price: 'a partir de R$ 19,90' },
    ],
  },
  {
    id: '3', name: 'Centrífuga para salada',
    description: 'Tampa giratória, 22cm, remove o excesso de água da salada',
    category: 'Cozinha', price: 'R$ 36,99',
    image: 'https://http2.mlstatic.com/D_NQ_NP_917797-MLA106257659375_012026-O.webp',
    link: 'https://www.mercadolivre.com.br/centrifuga-de-saladas-plastica-com-tampa-giratoria-22cm-branco/p/MLB63996211',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.mercadolivre.com.br/centrifuga-de-saladas-plastica-com-tampa-giratoria-22cm-branco/p/MLB63996211', price: 'R$ 36,99' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/centrifuga-salada', price: 'a partir de R$ 29,99' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=centrifuga+para+salada', price: 'a partir de R$ 27,90' },
    ],
  },
  {
    id: '4', name: 'Espremedor de limão',
    description: 'Alumínio premium, resistente e fácil de usar',
    category: 'Cozinha', price: 'R$ 29,90',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=280&fit=crop',
    link: 'https://www.lojasmel.com/espremedor-de-limao-aluminio-premium-donna-lar/p?idsku=4290',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.lojasmel.com/espremedor-de-limao-aluminio-premium-donna-lar/p?idsku=4290', price: 'R$ 29,90' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/espremedor-de-limao-aluminio', price: 'a partir de R$ 15,03' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=espremedor+de+limao+aluminio', price: 'a partir de R$ 12,90' },
    ],
  },
  {
    id: '5', name: 'Porta frios',
    description: 'Organizador para geladeira, mantém frios frescos e organizados',
    category: 'Cozinha', price: 'a partir de R$ 23,99',
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&h=280&fit=crop',
    link: 'https://lista.mercadolivre.com.br/porta-frios',
    buyOptions: [
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/porta-frios', price: 'a partir de R$ 23,99' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=porta+frios+geladeira', price: 'a partir de R$ 19,90' },
    ],
  },
  {
    id: '6', name: 'Abridor de lata',
    description: 'Cabo ergonômico, lâmina inox afiada — Brinox',
    category: 'Cozinha', price: 'R$ 29,90',
    image: 'https://http2.mlstatic.com/D_NQ_NP_677983-MLU72643190185_112023-F.webp',
    link: 'https://www.amazon.com.br/Abridor-Latas-Plus-Verona-Brinox/dp/B076TFDMT7/',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.amazon.com.br/Abridor-Latas-Plus-Verona-Brinox/dp/B076TFDMT7/', price: 'R$ 29,90' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/abridor-de-latas', price: 'a partir de R$ 9,99' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=abridor+de+lata', price: 'a partir de R$ 7,90' },
    ],
  },
  {
    id: '7', name: 'Peneiras kit aço inox',
    description: 'Kit com peneiras de diferentes tamanhos em aço inox',
    category: 'Cozinha', price: 'R$ 20,90',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61+LfzcEVGL._AC_UF350,350_QL80_.jpg',
    link: 'https://www.amazon.com.br/Kit-Peneiras-A%C3%A7o-Inox-Versatilidade/dp/B0FXMZRN2D',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.amazon.com.br/Kit-Peneiras-A%C3%A7o-Inox-Versatilidade/dp/B0FXMZRN2D', price: 'R$ 20,90' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/kit-3-peneiras-inox', price: 'a partir de R$ 29,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=kit+peneiras+inox', price: 'a partir de R$ 24,90' },
    ],
  },
  {
    id: '8', name: 'Saleiro + açucareiro',
    description: 'Kit duplo com design clean para a mesa do dia a dia',
    category: 'Cozinha', price: 'a partir de R$ 25,90',
    image: 'https://http2.mlstatic.com/D_NQ_NP_899710-MLU74113435363_012024-O.webp',
    link: 'https://lista.mercadolivre.com.br/kit-saleiro-e-acucareiro',
    buyOptions: [
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/kit-saleiro-e-acucareiro', price: 'a partir de R$ 25,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=saleiro+acucareiro+kit', price: 'a partir de R$ 19,90' },
    ],
  },
  {
    id: '9', name: 'Escorredor de louças (metal preto)',
    description: 'Metal preto com bandeja removível e porta-talheres',
    category: 'Cozinha', price: 'R$ 73,00',
    image: 'https://http2.mlstatic.com/D_NQ_NP_720791-MLA95936453765_102025-O.webp',
    link: 'https://www.mercadolivre.com.br/escorredor-de-loucas-metal-preto-com-bandeja-removivel-e-porta-talheres-yazi/p/MLB23570390',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.mercadolivre.com.br/escorredor-de-loucas-metal-preto-com-bandeja-removivel-e-porta-talheres-yazi/p/MLB23570390', price: 'R$ 73,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/escorredor-de-loucas-preto', price: 'a partir de R$ 59,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/Escorredor-De-Lou%C3%A7a-Pratos-Com-Bandeja-E-Porta-Talheres-Pia-Preto-i.340419093.7864286680', price: 'a partir de R$ 49,90' },
    ],
  },
  {
    id: '10', name: 'Ralador culinário profissional',
    description: 'Inox com 4 faces, queijos, cenoura, limão e mais',
    category: 'Cozinha', price: 'R$ 22,90',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41eFKUu0+YL._AC_UF350,350_QL80_.jpg',
    link: 'https://www.amazon.com.br/Ralador-Culin%C3%A1rio-Profissional-Queijos-C%C3%ADtricos/dp/B07QNSDHZK',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.amazon.com.br/Ralador-Culin%C3%A1rio-Profissional-Queijos-C%C3%ADtricos/dp/B07QNSDHZK', price: 'R$ 22,90' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/ralador-profissional', price: 'a partir de R$ 28,78' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=ralador+culinario+profissional', price: 'a partir de R$ 19,90' },
    ],
  },
  {
    id: '11', name: 'Tábua de carne (bambu)',
    description: 'Bambu natural, 35cm, ecológica e resistente',
    category: 'Cozinha', price: 'R$ 32,00',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61sVKvVjClL._AC_UF350,350_QL80_.jpg',
    link: 'https://www.amazon.com.br/T%C3%A1bua-Retangular-Bamboo-Mor-35/dp/B076X5ZLZQ/',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.amazon.com.br/T%C3%A1bua-Retangular-Bamboo-Mor-35/dp/B076X5ZLZQ/', price: 'R$ 32,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/tabua-carne-bambu', price: 'a partir de R$ 14,70' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=tabua+de+carne+bambu', price: 'a partir de R$ 12,90' },
    ],
  },
  {
    id: '12', name: 'Garrafa térmica',
    description: 'Mantém a temperatura por horas, ideal para café e chá',
    category: 'Cozinha', price: 'a partir de R$ 29,90',
    image: 'https://m.media-amazon.com/images/I/61TqEyEhtJL._AC_UF400,400_QL80_.jpg',
    link: 'https://lista.mercadolivre.com.br/garrafa-termica-barata',
    buyOptions: [
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/garrafa-termica-barata', price: 'a partir de R$ 29,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=garrafa+termica', price: 'a partir de R$ 24,90' },
    ],
  },
  {
    id: '13', name: 'Mixer elétrico',
    description: 'Inox, potente, perfeito para sopas, vitaminas e molhos',
    category: 'Cozinha', price: 'R$ 117,00',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41uf+J6ffML._AC_UF350,350_QL80_.jpg',
    link: 'https://www.amazon.com.br/Mixer-Brit%C3%A2nia-Inox-Maxx-BMX355P/dp/B097KPBW7Q/',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.amazon.com.br/Mixer-Brit%C3%A2nia-Inox-Maxx-BMX355P/dp/B097KPBW7Q/', price: 'R$ 117,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/mixer-barato', price: 'a partir de R$ 25,70' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=mixer+eletrico', price: 'a partir de R$ 22,90' },
    ],
  },
  {
    id: '14', name: 'Sanduicheira elétrica',
    description: 'Antiaderente, aquecimento rápido, 127V — Cadence',
    category: 'Cozinha', price: 'R$ 90,00',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51UxR8FHe-L._AC_UF350,350_QL80_.jpg',
    link: 'https://www.amazon.com.br/Sanduicheira-El%C3%A9trica-Cadence-Click-127V/dp/B0CDJ4L7CZ/',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.amazon.com.br/Sanduicheira-El%C3%A9trica-Cadence-Click-127V/dp/B0CDJ4L7CZ/', price: 'R$ 90,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/sanduicheira-eletrica-barata', price: 'a partir de R$ 78,99' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=sanduicheira+eletrica+barata', price: 'a partir de R$ 69,90' },
    ],
  },
  {
    id: '15', name: 'Porta tempero (kit potes vidro)',
    description: 'Kit 12 potes quadrados de vidro 130ml com tampo',
    category: 'Cozinha', price: 'R$ 49,00',
    image: 'https://http2.mlstatic.com/D_NQ_NP_898426-MLB48708777050_122021-O.webp',
    link: 'https://www.mercadolivre.com.br/kit-12-pote-quadrado-unico-em-vidro-130ml-ptempero-ctampa/up/MLBU1310170343',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.mercadolivre.com.br/kit-12-pote-quadrado-unico-em-vidro-130ml-ptempero-ctampa/up/MLBU1310170343', price: 'R$ 49,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/porta-temperos-cozinha', price: 'a partir de R$ 38,42' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=porta+tempero+potes+vidro+kit', price: 'a partir de R$ 32,90' },
    ],
  },
  {
    id: '16', name: 'Organizador de geladeira',
    description: 'Caixas empilháveis para organizar frutas, frios e laticínios',
    category: 'Cozinha', price: 'a partir de R$ 26,49',
    image: 'https://http2.mlstatic.com/D_NQ_NP_838731-MLA84472711729_052025-F.webp',
    link: 'https://lista.mercadolivre.com.br/organizador-de-geladeira',
    buyOptions: [
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/organizador-de-geladeira', price: 'a partir de R$ 26,49' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=organizador+de+geladeira', price: 'a partir de R$ 19,90' },
    ],
  },
  {
    id: '17', name: 'Potes herméticos (kit)',
    description: 'Vários tamanhos, fechamento hermético, para alimentos',
    category: 'Cozinha', price: 'a partir de R$ 39,48',
    image: 'https://m.media-amazon.com/images/I/81p2eg1noAL._AC_UF400,400_QL80_.jpg',
    link: 'https://lista.mercadolivre.com.br/kit-potes-hermeticos',
    buyOptions: [
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/kit-potes-hermeticos', price: 'a partir de R$ 39,48' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=kit+potes+hermeticos', price: 'a partir de R$ 29,90' },
    ],
  },
  {
    id: '18', name: 'Jogo de facas (6 peças)',
    description: '6 facas em aço inox com cabos ergonômicos — Brinox',
    category: 'Cozinha', price: 'R$ 65,00',
    image: 'https://images.unsplash.com/photo-1566454825481-9c31d74a9571?w=400&h=280&fit=crop',
    link: 'https://www.precolandia.com.br/jogo-de-facas-cross-6-pecas-preta-brinox-998753/p',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.precolandia.com.br/jogo-de-facas-cross-6-pecas-preta-brinox-998753/p', price: 'R$ 65,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/jogo-de-faca-barato', price: 'a partir de R$ 49,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=jogo+de+facas+6+pecas', price: 'a partir de R$ 39,90' },
    ],
  },
  {
    id: '19', name: 'Porta guardanapo',
    description: 'Design moderno com detalhes em barbante — Wolff',
    category: 'Cozinha', price: 'R$ 30,00',
    image: 'https://m.media-amazon.com/images/I/7190L6QTi-L._AC_UF350,350_QL80_.jpg',
    link: 'https://www.amazon.com.br/WOLFF-Porta-Guardanapos-Detalhes-Barbante/dp/B0F9ZXF8F3',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.amazon.com.br/WOLFF-Porta-Guardanapos-Detalhes-Barbante/dp/B0F9ZXF8F3', price: 'R$ 30,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/porta-guardanapo-barato', price: 'a partir de R$ 14,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=porta+guardanapo', price: 'a partir de R$ 11,90' },
    ],
  },
  {
    id: '20', name: 'Panos de prato',
    description: 'Kit 10 unidades, algodão de alta absorção',
    category: 'Cozinha', price: 'a partir de R$ 29,58',
    image: 'https://m.media-amazon.com/images/I/51Gj0zXjFQL._AC_UF400,400_QL80_.jpg',
    link: 'https://lista.mercadolivre.com.br/kit-pano-de-prato',
    buyOptions: [
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/kit-pano-de-prato', price: 'a partir de R$ 29,58 (kit 10 un.)' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=panos+de+prato+kit', price: 'a partir de R$ 24,90 (kit 10 un.)' },
    ],
  },
  {
    id: '21', name: 'Rodo de pia (cabo bambu)',
    description: 'Dobrável, cabo de bambu ecológico — Oikos',
    category: 'Cozinha', price: 'R$ 23,00',
    image: 'https://http2.mlstatic.com/D_NQ_NP_749669-MLA99451889612_112025-O.webp',
    link: 'https://www.mercadolivre.com.br/rodo-de-pia-dobravel-com-cabo-de-bambu-preto-oikos/p/MLB21364976',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.mercadolivre.com.br/rodo-de-pia-dobravel-com-cabo-de-bambu-preto-oikos/p/MLB21364976', price: 'R$ 23,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/rodo-de-pia-bambu', price: 'a partir de R$ 24,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=rodo+de+pia+bambu', price: 'a partir de R$ 19,90' },
    ],
  },
  {
    id: '22', name: 'Jogo de taças sobremesa',
    description: '6 taças de vidro transparente, 250ml, elegantes',
    category: 'Cozinha', price: 'R$ 65,00',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51vbjoV8IVL._AC_UF350,350_QL80_.jpg',
    link: 'https://www.amazon.com.br/Sobremesa-Transparente-Sofisticado-Resistente-Restaurante/dp/B0GJ7T7Q17',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.amazon.com.br/Sobremesa-Transparente-Sofisticado-Resistente-Restaurante/dp/B0GJ7T7Q17', price: 'R$ 65,00' },
      { label: 'Mercado Livre', url: 'https://www.mercadolivre.com.br/jogo-de-tacas-para-sobremesa-de-vidro-6-pecas-250ml-cor-transparente-1/p/MLB53258469', price: 'a partir de R$ 39,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=jogo+tacas+sobremesa+vidro+transparente', price: 'a partir de R$ 32,90' },
    ],
  },
  {
    id: '23', name: 'Jogo de prato fundo Ryo Oxford (6 un.)',
    description: 'Porcelana Ryo Maresia Oxford, 22,5cm, 6 peças',
    category: 'Cozinha', price: 'R$ 164,00',
    image: 'https://http2.mlstatic.com/D_NQ_NP_985220-MLA99909242409_112025-O.webp',
    link: 'https://www.mercadolivre.com.br/conjunto-de-6-pratos-fundos-225cm-ryo-maresia/p/MLB22275023',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.mercadolivre.com.br/conjunto-de-6-pratos-fundos-225cm-ryo-maresia/p/MLB22275023', price: 'R$ 164,00' },
      { label: 'Mercado Livre', url: 'https://www.mercadolivre.com.br/conjunto-de-6-pratos-fundos-225cm-ryo-maresia/p/MLB22275023', price: 'a partir de R$ 129,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/Jogo-de-Prato-Fundo-Oxford-Ryo-Maresia-22-5Cm-Porcelana-i.445689469.12561384696', price: 'a partir de R$ 119,90' },
    ],
  },
  {
    id: '24', name: 'Jogo de prato raso Ryo Oxford (6 un.)',
    description: 'Porcelana Ryo Maresia Oxford, 27,5cm, 6 peças',
    category: 'Cozinha', price: 'R$ 163,00',
    image: 'https://a-static.mlcdn.com.br/470x352/conjunto-6-pratos-rasos-225-cm-ryo-maresia-porcelana-oxford/walaplace/oxf103221kit6/5803529d04ebaaf54d8ca36d24391cba.jpeg',
    link: 'https://www.magazineluiza.com.br/conjunto-6-pratos-rasos-225-cm-ryo-maresia-porcelana-oxford/p/jc79e8a9d2/ud/prra/',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.magazineluiza.com.br/conjunto-6-pratos-rasos-225-cm-ryo-maresia-porcelana-oxford/p/jc79e8a9d2/ud/prra/', price: 'R$ 163,00' },
      { label: 'Mercado Livre', url: 'https://www.mercadolivre.com.br/jogo-de-6-pratos-rasos-275cm-oxford-ryo-maresia-cor-branco-e-marrom/p/MLB23544122', price: 'a partir de R$ 129,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=prato+raso+oxford+ryo+6+pecas', price: 'a partir de R$ 119,90' },
    ],
  },
  {
    id: '25', name: 'Jogo de prato sobremesa Ryo Oxford',
    description: 'Porcelana Ryo Maresia Oxford, coleção completa',
    category: 'Cozinha', price: 'R$ 115,00',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51JgGsB14nS._AC_UF350,350_QL80_.jpg',
    link: 'https://www.amazon.com.br/Conjunto-com-Pratos-Sobremesa-Maresia/dp/B0941VNWN2/',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.amazon.com.br/Conjunto-com-Pratos-Sobremesa-Maresia/dp/B0941VNWN2/', price: 'R$ 115,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/jogo-de-pratos-porcelana-oxford', price: 'a partir de R$ 99,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=prato+sobremesa+oxford+ryo', price: 'a partir de R$ 89,90' },
    ],
  },
  {
    id: '26', name: 'Jogo de caneca Ryo Oxford (6 un.)',
    description: 'Porcelana Ryo Maresia Oxford, 260ml, 6 canecas',
    category: 'Cozinha', price: 'R$ 117,00',
    image: 'https://http2.mlstatic.com/D_NQ_NP_698363-MLB93306212763_092025-O.webp',
    link: 'https://www.mercadolivre.com.br/kit-6-canecas-de-porcelana-260ml-oxford-ryo-maresia/up/MLBU1981723596',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.mercadolivre.com.br/kit-6-canecas-de-porcelana-260ml-oxford-ryo-maresia/up/MLBU1981723596', price: 'R$ 117,00' },
      { label: 'Mercado Livre', url: 'https://produto.mercadolivre.com.br/MLB-3670541764-jogo-com-6-canecas-de-380ml-em-porcelana-ryo-maresia-oxford-_JM', price: 'a partir de R$ 149,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=caneca+porcelana+oxford+ryo+6+pecas', price: 'a partir de R$ 139,90' },
    ],
  },
  {
    id: '27', name: 'Jogo de xícara Ryo Oxford',
    description: 'Porcelana Ryo Maresia Oxford, xícaras grandes com pires',
    category: 'Cozinha', price: 'R$ 160,00',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61tlaHFQ4eS._AC_UF350,350_QL80_.jpg',
    link: 'https://www.amazon.com.br/Conjunto-X%C3%ADcaras-grandes-pires-Maresias/dp/B09418KWFJ/',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.amazon.com.br/Conjunto-X%C3%ADcaras-grandes-pires-Maresias/dp/B09418KWFJ/', price: 'R$ 160,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/conjunto-xicara-de-cha-oxford', price: 'a partir de R$ 99,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=xicara+porcelana+oxford+ryo', price: 'a partir de R$ 89,90' },
    ],
  },
  {
    id: '28', name: 'Jogo de bowl Ryo Oxford (4 un.)',
    description: 'Porcelana Ryo Maresia Oxford, 500ml, 4 tigelas',
    category: 'Cozinha', price: 'R$ 150,00',
    image: 'https://http2.mlstatic.com/D_NQ_NP_632521-MLA95662531150_102025-O.webp',
    link: 'https://www.mercadolivre.com.br/jogo-de-4-tigelas-500ml-oxford-ryo-maresia/p/MLB42073986',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.mercadolivre.com.br/jogo-de-4-tigelas-500ml-oxford-ryo-maresia/p/MLB42073986', price: 'R$ 150,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/tigela-ryo-maresia', price: 'a partir de R$ 79,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=bowl+tigela+oxford+ryo', price: 'a partir de R$ 69,90' },
    ],
  },
  {
    id: '29', name: 'Saladeira Ryo Oxford',
    description: 'Porcelana Ryo Maresia Oxford, 1,6 litros',
    category: 'Cozinha', price: 'R$ 70,00',
    image: 'https://images-na.ssl-images-amazon.com/images/I/411m0Vy2C6L._AC_UF350,350_QL80_.jpg',
    link: 'https://www.amazon.com.br/Saladeira-Porcelana-Ryo-Oxford-Maresia/dp/B0D2V7Q31Z/',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.amazon.com.br/Saladeira-Porcelana-Ryo-Oxford-Maresia/dp/B0D2V7Q31Z/', price: 'R$ 70,00' },
      { label: 'Mercado Livre', url: 'https://www.mercadolivre.com.br/saladeira-bowl-16l-ryo-maresia-oxford-porcelana-sobremesa/p/MLB32348335', price: 'a partir de R$ 89,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=saladeira+oxford+ryo+maresia', price: 'a partir de R$ 79,90' },
    ],
  },
  {
    id: '30', name: 'Jogo de talheres inox',
    description: 'Inox polido, conjunto completo para o dia a dia',
    category: 'Cozinha', price: 'R$ 52,98',
    image: 'https://m.media-amazon.com/images/I/61APIAIo0QL._AC_UF400,400_QL80_.jpg',
    link: 'https://shopee.com.br/product/1036760565/21498329010',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://shopee.com.br/product/1036760565/21498329010', price: 'R$ 52,98' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/jogo-de-talheres-inox', price: 'a partir de R$ 69,99' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=jogo+talheres+inox', price: 'a partir de R$ 59,90' },
    ],
  },
  {
    id: '31', name: 'Conjunto de utensílios (silicone + madeira)',
    description: '11 utensílios de silicone com cabo de madeira e suporte',
    category: 'Cozinha', price: 'R$ 60,00',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=280&fit=crop',
    link: 'https://www.camicado.com.br/p/kit-11-utensilios-de-cozinha-de-silicone-com-cabo-de-madeira-e-suporte-tud/-/A-7010705221632-br.lc',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.camicado.com.br/p/kit-11-utensilios-de-cozinha-de-silicone-com-cabo-de-madeira-e-suporte-tud/-/A-7010705221632-br.lc', price: 'R$ 60,00' },
      { label: 'Mercado Livre', url: 'https://produto.mercadolivre.com.br/MLB-3274998198-kit-c12-utensilios-de-cozinha-silicone-cabo-madeira-_JM', price: 'a partir de R$ 42,43' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=kit+utensilios+silicone+cabo+madeira', price: 'a partir de R$ 34,90' },
    ],
  },
  {
    id: '32', name: 'Espátula para bolo (inox)',
    description: 'Inox resistente, ideal para cortar e servir bolos — Tramontina',
    category: 'Cozinha', price: 'R$ 30,00',
    image: 'https://images-na.ssl-images-amazon.com/images/I/31z6-3tCWoL._AC_UF350,350_QL80_.jpg',
    link: 'https://www.amazon.com.br/Para-Bolo-Inox-Tramontina-63906/dp/B076M7ZB2C/',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.amazon.com.br/Para-Bolo-Inox-Tramontina-63906/dp/B076M7ZB2C/', price: 'R$ 30,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/espatula-bolo-inox', price: 'a partir de R$ 12,55' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=espatula+bolo+inox', price: 'a partir de R$ 9,90' },
    ],
  },
  {
    id: '33', name: 'Porta detergente e esponja',
    description: 'Design preto 18cm, organiza a pia com estilo — Arthi',
    category: 'Cozinha', price: 'R$ 28,00',
    image: 'https://http2.mlstatic.com/D_NQ_NP_785776-MLU75811714848_042024-F.webp',
    link: 'https://www.precolandia.com.br/porta-detergente-e-esponja-18cm-preto-arthi-503460/p',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.precolandia.com.br/porta-detergente-e-esponja-18cm-preto-arthi-503460/p', price: 'R$ 28,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/porta-detergente-e-esponja', price: 'a partir de R$ 18,67' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=porta+detergente+esponja', price: 'a partir de R$ 14,90' },
    ],
  },
  {
    id: '34', name: 'Jarra de vidro com tampa',
    description: 'Vidro transparente com tampa plástica, 1,5 litros — Wolff',
    category: 'Cozinha', price: 'R$ 60,00',
    image: 'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/j/a/jarra-de-vidro-com-tampa-plastica-wolff_1107492.jpg',
    link: 'https://www.havan.com.br/jarra-de-vidro-com-tampa-plastica-wolff-15-litros/p',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.havan.com.br/jarra-de-vidro-com-tampa-plastica-wolff-15-litros/p', price: 'R$ 60,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/jarra-de-vidro-com-tampa', price: 'a partir de R$ 23,95' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=jarra+vidro+com+tampa', price: 'a partir de R$ 19,90' },
    ],
  },
  {
    id: '35', name: 'Colher bailarina',
    description: 'Inox, cabo longo, perfeita para misturar e mexer',
    category: 'Cozinha', price: 'R$ 15,00',
    image: 'https://http2.mlstatic.com/D_NQ_NP_896200-MLU70626209033_072023-F.webp',
    link: 'https://lista.mercadolivre.com.br/colher-bailarina-inox',
    buyOptions: [
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/colher-bailarina-inox', price: 'a partir de R$ 11,39' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=colher+bailarina+inox', price: 'a partir de R$ 8,90' },
    ],
  },
  {
    id: '36', name: 'Luva térmica para forno',
    description: 'Proteção até 250°C, silicone antiderrapante',
    category: 'Cozinha', price: 'R$ 46,00',
    image: 'https://m.media-amazon.com/images/I/61wPrWd0rGS._AC_UF350,350_QL50_.jpg',
    link: 'https://www.amazon.com.br/T%C3%A9rmica-forno-Bakery-Presente-Criativo/dp/B098D3QSFH',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.amazon.com.br/T%C3%A9rmica-forno-Bakery-Presente-Criativo/dp/B098D3QSFH', price: 'R$ 46,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/luva-de-forno', price: 'a partir de R$ 19,00' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=luva+termica+forno', price: 'a partir de R$ 14,90' },
    ],
  },
  {
    id: '37', name: 'Afiador de facas',
    description: 'Inox premium, devolve o fio das facas em segundos',
    category: 'Cozinha', price: 'R$ 18,00',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41V+rlTa40L._AC_UF350,350_QL80_.jpg',
    link: 'https://www.amazon.com.br/Afiador-Faca-Premium-Inox-Black/dp/B0B8DVBHDZ',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.amazon.com.br/Afiador-Faca-Premium-Inox-Black/dp/B0B8DVBHDZ', price: 'R$ 18,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/afiador-de-facas', price: 'a partir de R$ 19,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=afiador+de+facas', price: 'a partir de R$ 14,90' },
    ],
  },
  {
    id: '38', name: 'Pegador de massas (inox)',
    description: '28cm, inox, mola resistente — Brinox Arienzo',
    category: 'Cozinha', price: 'R$ 17,00',
    image: 'https://m.media-amazon.com/images/I/6103HTMaaNL._AC_UF350,350_QL50_.jpg',
    link: 'https://www.amazon.com.br/Pegador-Massa-Arienzo-280MM-Brinox/dp/B076JLVPNF/',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.amazon.com.br/Pegador-Massa-Arienzo-280MM-Brinox/dp/B076JLVPNF/', price: 'R$ 17,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/pegador-de-massas-inox', price: 'a partir de R$ 14,99' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=pegador+massas+inox', price: 'a partir de R$ 11,90' },
    ],
  },
  {
    id: '39', name: 'Rolo de massa (madeira)',
    description: 'Madeira maciça, ideal para massas de pão, pizza e torta',
    category: 'Cozinha', price: 'R$ 20,00',
    image: 'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/r/o/rolo-para-massas-stolf_1199290.jpg',
    link: 'https://www.havan.com.br/rolo-para-massas-stolf-madeira/p',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.havan.com.br/rolo-para-massas-stolf-madeira/p', price: 'R$ 20,00' },
      { label: 'Mercado Livre', url: 'https://produto.mercadolivre.com.br/MLB-1438843495-rolo-para-massa-pizza-po-macarro-de-madeira-43-cm-barato-_JM', price: 'a partir de R$ 14,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=rolo+de+massa+madeira', price: 'a partir de R$ 11,90' },
    ],
  },
  {
    id: '40', name: 'Toalha de mesa',
    description: 'Tecido resistente para a mesa de jantar do dia a dia',
    category: 'Cozinha', price: 'a partir de R$ 29,90',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=280&fit=crop',
    link: 'https://lista.mercadolivre.com.br/toalha-de-mesa-barata',
    buyOptions: [
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/toalha-de-mesa-barata', price: 'a partir de R$ 29,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=toalha+de+mesa', price: 'a partir de R$ 24,90' },
    ],
  },
  {
    id: '41', name: 'Leiteira de vidro (borossilicato)',
    description: 'Vidro borossilicato Classic 660ml, resistente ao calor — Lyor',
    category: 'Cozinha', price: 'R$ 40,00',
    image: 'https://m.media-amazon.com/images/I/61DokDrXlfL._AC_UF350,350_QL50_.jpg',
    link: 'https://www.amazon.com.br/Leiteira-Vidro-Borossilicato-Classic-660ml/dp/B0BGJLWZ1C',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.amazon.com.br/Leiteira-Vidro-Borossilicato-Classic-660ml/dp/B0BGJLWZ1C', price: 'R$ 40,00' },
      { label: 'Mercado Livre', url: 'https://produto.mercadolivre.com.br/MLB-5060424268-leiteira-de-vidro-borossilicato-classic-660ml-lyor-_JM', price: 'a partir de R$ 34,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=leiteira+vidro+borossilicato', price: 'a partir de R$ 29,90' },
    ],
  },
  {
    id: '42', name: 'Jogo americano de mesa',
    description: 'Conjunto de sousplats para dar charme à mesa',
    category: 'Cozinha', price: 'a partir de R$ 31,96',
    image: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?w=400&h=280&fit=crop',
    link: 'https://lista.mercadolivre.com.br/jogo-americano-barato',
    buyOptions: [
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/jogo-americano-barato', price: 'a partir de R$ 31,96' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=jogo+americano+de+mesa', price: 'a partir de R$ 24,90' },
    ],
  },
  {
    id: '43', name: 'Jarra medidora de vidro',
    description: '700ml, vidro transparente com marcações de medida — Lyor',
    category: 'Cozinha', price: 'R$ 25,00',
    image: 'https://http2.mlstatic.com/D_NQ_NP_837010-MLU70592804630_072023-F.webp',
    link: 'https://www.precolandia.com.br/jarra-de-vidro-medidora-700ml-lyor-033308/p',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.precolandia.com.br/jarra-de-vidro-medidora-700ml-lyor-033308/p', price: 'R$ 25,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/jarra-medidora-vidro', price: 'a partir de R$ 27,99' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=jarra+medidora+vidro', price: 'a partir de R$ 22,90' },
    ],
  },
  {
    id: '44', name: 'Tigela de vidro com tampa',
    description: 'Kit 5 peças, vidro com tampa plástica preta — Dolce Home',
    category: 'Cozinha', price: 'R$ 35,00',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=280&fit=crop',
    link: 'https://www.precolandia.com.br/tigela-de-vidro-com-tampa-plastica-preta-5-pecas-dolce-home-217921/p',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.precolandia.com.br/tigela-de-vidro-com-tampa-plastica-preta-5-pecas-dolce-home-217921/p', price: 'R$ 35,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/tigela-de-vidro-com-tampa', price: 'a partir de R$ 29,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=tigela+vidro+com+tampa', price: 'a partir de R$ 24,90' },
    ],
  },
  {
    id: '45', name: 'Forma de pudim',
    description: 'Alumínio com furo central, para pudins e gelatinas',
    category: 'Cozinha', price: 'R$ 30,00',
    image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=280&fit=crop',
    link: 'https://lista.mercadolivre.com.br/forma-de-pudim-aluminio-cozinha',
    buyOptions: [
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/forma-de-pudim-aluminio-cozinha', price: 'a partir de R$ 19,65' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=forma+de+pudim+aluminio', price: 'a partir de R$ 14,90' },
    ],
  },
  {
    id: '46', name: 'Forma de bolo fundo removível',
    description: 'Antiaderente com fundo removível, conjunto redondo',
    category: 'Cozinha', price: 'R$ 40,00',
    image: 'https://m.media-amazon.com/images/I/61WpTdOzuEL._AC_SY300_SX300_QL70_ML2_.jpg',
    link: 'https://www.amazon.com.br/Conjunto-Redondas-Antiaderentes-Remov%C3%ADvel-Assadeiras/dp/B0FRV91C66/',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.amazon.com.br/Conjunto-Redondas-Antiaderentes-Remov%C3%ADvel-Assadeiras/dp/B0FRV91C66/', price: 'R$ 40,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/forma-fundo-removivel', price: 'a partir de R$ 45,54' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=forma+bolo+fundo+removivel+antiaderente', price: 'a partir de R$ 34,90' },
    ],
  },
  {
    id: '47', name: 'Cafeteira elétrica',
    description: 'Jarra de vidro, filtro permanente, 15 xícaras — Electrolux',
    category: 'Cozinha', price: 'R$ 110,00',
    image: 'https://http2.mlstatic.com/D_NQ_NP_890103-MLA99508244310_112025-O.webp',
    link: 'https://www.mercadolivre.com.br/cafeteira-eletrica-electrolux-jarra-vidro-acabamento-inox-filtro-permanente-removivel-sistema-corta-pingos-capacidade-15-xicaras-600ml-ecm10/p/MLB18927374',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.mercadolivre.com.br/cafeteira-eletrica-electrolux-jarra-vidro-acabamento-inox-filtro-permanente-removivel-sistema-corta-pingos-capacidade-15-xicaras-600ml-ecm10/p/MLB18927374', price: 'R$ 110,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/cafeteira-eletrica-barata', price: 'a partir de R$ 79,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=cafeteira+eletrica+barata', price: 'a partir de R$ 69,90' },
    ],
  },
  {
    id: '48', name: 'Panela de arroz elétrica',
    description: 'Com visor glass, mantém quente após o preparo',
    category: 'Cozinha', price: 'R$ 150,00',
    image: 'https://m.media-amazon.com/images/I/51LlcR9V8mL._AC_UF350,350_QL50_.jpg',
    link: 'https://www.amazon.com.br/PANELA-ARROZ-PH5P-VISOR-GLASS/dp/B0876TSY5Q/',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.amazon.com.br/PANELA-ARROZ-PH5P-VISOR-GLASS/dp/B0876TSY5Q/', price: 'R$ 150,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/panela-arroz-eletrica-barata', price: 'a partir de R$ 97,70' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=panela+de+arroz+eletrica', price: 'a partir de R$ 89,90' },
    ],
  },
  {
    id: '49', name: 'Liquidificador',
    description: '1200W, 12 turbo, jarra de 3L — Philco',
    category: 'Cozinha', price: 'R$ 200,00',
    image: 'https://http2.mlstatic.com/D_NQ_NP_649042-MLU78850761472_092024-F.webp',
    link: 'https://www.casasbahia.com.br/liquidificador-philco-plq2100pi-12-turbo-3l-1200w-110v/p/1572899831',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.casasbahia.com.br/liquidificador-philco-plq2100pi-12-turbo-3l-1200w-110v/p/1572899831', price: 'R$ 200,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/liquidificador-barato', price: 'a partir de R$ 58,70' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=liquidificador', price: 'a partir de R$ 49,90' },
    ],
  },
  {
    id: '50', name: 'Ferro de passar a vapor',
    description: 'Série Philips Walita, base antiadesiva, resultados perfeitos',
    category: 'Cozinha', price: 'R$ 150,00',
    image: 'https://m.media-amazon.com/images/I/51PfmZlabDL._AC_UF350,350_QL50_.jpg',
    link: 'https://www.amazon.com.br/Ferro-Vapor-S%C3%A9rie-Philips-Walita/dp/B0F3QN6FKK',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.amazon.com.br/Ferro-Vapor-S%C3%A9rie-Philips-Walita/dp/B0F3QN6FKK', price: 'R$ 150,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/ferro-de-passar-a-vapor-barato', price: 'a partir de R$ 98,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=ferro+de+passar+roupa+vapor', price: 'a partir de R$ 89,90' },
    ],
  },
  {
    id: '51', name: 'Panela de pressão elétrica (5L)',
    description: '5 litros, inox, 12 funções — Electrolux por Rita Lobo',
    category: 'Cozinha', price: 'R$ 350,00',
    image: 'https://http2.mlstatic.com/D_NQ_NP_883011-MLA94921098264_102025-O.webp',
    link: 'https://www.mercadolivre.com.br/panela-de-presso-eletrica-electrolux-5l-cor-inox-efficient-por-rita-lobo-pce20/p/MLB16051358',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.mercadolivre.com.br/panela-de-presso-eletrica-electrolux-5l-cor-inox-efficient-por-rita-lobo-pce20/p/MLB16051358', price: 'R$ 350,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/panela-de-pressao-eletrica-5-litros', price: 'a partir de R$ 69,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=panela+pressao+eletrica+5+litros', price: 'a partir de R$ 65,90' },
    ],
  },
  {
    id: '52', name: 'Amassador de batata (inox)',
    description: 'Inox resistente, cabo confortável, fácil de lavar',
    category: 'Cozinha', price: 'R$ 36,00',
    image: 'https://images.unsplash.com/photo-1495461199391-8c39ab674f93?w=400&h=280&fit=crop',
    link: 'https://lista.mercadolivre.com.br/amassador-batata-inox',
    buyOptions: [
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/amassador-batata-inox', price: 'a partir de R$ 15,39' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=amassador+batata+inox', price: 'a partir de R$ 11,90' },
    ],
  },
  {
    id: '53', name: 'Ralador 6 faces (inox)',
    description: '6 tipos de corte em um só ralador — Hércules',
    category: 'Cozinha', price: 'R$ 35,00',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=280&fit=crop',
    link: 'https://www.precolandia.com.br/ralador-6-faces-de-inox-hercules-436925/p',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.precolandia.com.br/ralador-6-faces-de-inox-hercules-436925/p', price: 'R$ 35,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/ralador-6-faces-inox', price: 'a partir de R$ 28,78' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=ralador+6+faces+inox', price: 'a partir de R$ 19,90' },
    ],
  },
  {
    id: '54', name: 'Pegador de salada (inox)',
    description: '20,5cm, inox, design elegante — Brinox Arienzo',
    category: 'Cozinha', price: 'R$ 15,00',
    image: 'https://http2.mlstatic.com/D_NQ_NP_846153-MLU71400409877_082023-F.webp',
    link: 'https://www.precolandia.com.br/pegador-de-salada-arienzo-205cm-brinox-040126/p',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.precolandia.com.br/pegador-de-salada-arienzo-205cm-brinox-040126/p', price: 'R$ 15,00' },
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/pegador-de-salada-inox', price: 'a partir de R$ 13,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=pegador+salada+inox', price: 'a partir de R$ 10,90' },
    ],
  },

  // ── BANHEIRO ──────────────────────────────────────────────────────────────
  {
    id: '55', name: 'Kit saboneteira',
    description: 'Conjunto completo para banheiro: saboneteira, porta-shampoo e mais',
    category: 'Banheiro', price: 'a partir de R$ 32,90',
    image: 'https://http2.mlstatic.com/D_NQ_NP_959065-MLA78218204918_082024-A.webp',
    link: 'https://lista.mercadolivre.com.br/kit-saboneteira-banheiro',
    buyOptions: [
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/kit-saboneteira-banheiro', price: 'a partir de R$ 32,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=kit+saboneteira+banheiro', price: 'a partir de R$ 24,90' },
    ],
  },
  {
    id: '56', name: 'Tapetes de banheiro',
    description: 'Tapete felpudo antiderrapante para box e pia',
    category: 'Banheiro', price: 'a partir de R$ 27,49',
    image: 'https://http2.mlstatic.com/D_NQ_NP_910550-MLA78967143979_092024-A.webp',
    link: 'https://lista.mercadolivre.com.br/tapete-banheiro',
    buyOptions: [
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/tapete-banheiro', price: 'a partir de R$ 27,49' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=tapete+de+banheiro', price: 'a partir de R$ 19,90' },
    ],
  },
  {
    id: '57', name: 'Lixeira de banheiro',
    description: 'Lixeira com tampa para banheiro, design discreto',
    category: 'Banheiro', price: 'a partir de R$ 19,90',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=280&fit=crop',
    link: 'https://lista.mercadolivre.com.br/lixeira-banheiro-barata',
    buyOptions: [
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/lixeira-banheiro-barata', price: 'a partir de R$ 19,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=lixeira+banheiro', price: 'a partir de R$ 14,90' },
    ],
  },

  // ── LAVANDERIA ────────────────────────────────────────────────────────────
  {
    id: '58', name: 'Organizador de lavanderia',
    description: 'Prateleiras e compartimentos para organizar produtos de limpeza',
    category: 'Lavanderia', price: 'a partir de R$ 39,90',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=280&fit=crop',
    link: 'https://lista.mercadolivre.com.br/organizador-lavanderia',
    buyOptions: [
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/organizador-lavanderia', price: 'a partir de R$ 39,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=organizador+lavanderia', price: 'a partir de R$ 29,90' },
    ],
  },
  {
    id: '59', name: 'Balde dobrável',
    description: 'Silicone retrátil 10 litros, economiza espaço',
    category: 'Lavanderia', price: 'a partir de R$ 29,90',
    image: 'https://http2.mlstatic.com/D_NQ_NP_666680-MLA79344636114_092024-O.webp',
    link: 'https://www.mercadolivre.com.br/balde-dobravel-retratil-10-litros-silicone/p/MLB20669524',
    buyOptions: [
      { label: 'Produto Sugerido', url: 'https://www.mercadolivre.com.br/balde-dobravel-retratil-10-litros-silicone/p/MLB20669524', price: 'a partir de R$ 29,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=balde+dobravel+silicone', price: 'a partir de R$ 24,90' },
    ],
  },
  {
    id: '60', name: 'Tábua de passar roupas',
    description: 'Estrutura resistente com regulagem de altura',
    category: 'Lavanderia', price: 'a partir de R$ 69,42',
    image: 'https://http2.mlstatic.com/D_NQ_NP_638476-MLU72636832639_112023-F.webp',
    link: 'https://lista.mercadolivre.com.br/tabua-de-passar-roupa',
    buyOptions: [
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/tabua-de-passar-roupa', price: 'a partir de R$ 69,42' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=tabua+de+passar+roupas', price: 'a partir de R$ 59,90' },
    ],
  },
  {
    id: '61', name: 'Capacho porta entrada',
    description: 'Tapete funcional para entrada, remove sujeira dos calçados',
    category: 'Lavanderia', price: 'a partir de R$ 19,32',
    image: 'https://http2.mlstatic.com/D_NQ_NP_896350-MLA80172465016_112024-F.webp',
    link: 'https://lista.mercadolivre.com.br/capacho-porta-entrada',
    buyOptions: [
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/capacho-porta-entrada', price: 'a partir de R$ 19,32' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=capacho+porta+entrada', price: 'a partir de R$ 14,90' },
    ],
  },
  {
    id: '62', name: 'Rodo',
    description: 'Cabo longo com borracha resistente para limpeza do piso',
    category: 'Lavanderia', price: 'a partir de R$ 29,99',
    image: 'https://http2.mlstatic.com/D_NQ_NP_661166-MLA81615979430_012025-A.webp',
    link: 'https://lista.mercadolivre.com.br/rodo-de-limpeza',
    buyOptions: [
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/rodo-de-limpeza', price: 'a partir de R$ 29,99' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=rodo+limpeza+chao', price: 'a partir de R$ 19,90' },
    ],
  },
  {
    id: '63', name: 'Vassoura',
    description: 'Cerdas resistentes, cabo ergonômico para varrer',
    category: 'Lavanderia', price: 'a partir de R$ 19,90',
    image: 'https://http2.mlstatic.com/D_NQ_NP_928376-MLA81615913750_012025-A.webp',
    link: 'https://lista.mercadolivre.com.br/vassoura-barata',
    buyOptions: [
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/vassoura-barata', price: 'a partir de R$ 19,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=vassoura', price: 'a partir de R$ 14,90' },
    ],
  },
  {
    id: '64', name: 'Pá de lixo',
    description: 'Plástico resistente com cabo longo, combina com vassoura',
    category: 'Lavanderia', price: 'a partir de R$ 12,90',
    image: 'https://http2.mlstatic.com/D_NQ_NP_954141-MLU50940662960_072022-F.webp',
    link: 'https://lista.mercadolivre.com.br/pa-de-lixo',
    buyOptions: [
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/pa-de-lixo', price: 'a partir de R$ 12,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=pa+de+lixo', price: 'a partir de R$ 9,90' },
    ],
  },
  {
    id: '65', name: 'Lixeira de cozinha',
    description: 'Lixeira plástica com tampa para cozinha ou lavanderia',
    category: 'Lavanderia', price: 'a partir de R$ 29,90',
    image: 'https://http2.mlstatic.com/D_NQ_NP_934038-MLB41348885837_042020-F.webp',
    link: 'https://lista.mercadolivre.com.br/lixeira-cozinha-barata',
    buyOptions: [
      { label: 'Mercado Livre', url: 'https://lista.mercadolivre.com.br/lixeira-cozinha-barata', price: 'a partir de R$ 29,90' },
      { label: 'Shopee', url: 'https://shopee.com.br/search?keyword=lixeira+cozinha+plastica', price: 'a partir de R$ 19,90' },
    ],
  },
]

export const CATEGORIES: Category[] = ['Cozinha', 'Banheiro', 'Lavanderia']
