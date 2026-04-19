export type Category = 'Cozinha' | 'Banheiro' | 'Lavanderia'

export interface Gift {
  id: string
  name: string
  description: string
  category: Category
  price: string
  image: string
  link: string
  reserved_by?: string | null
}

const IMG = {
  panela:    'https://images.unsplash.com/photo-1584990347449-a5d9f800a783?w=400&h=280&fit=crop',
  faca:      'https://images.unsplash.com/photo-1566454825481-9c31d74a9571?w=400&h=280&fit=crop',
  prato:     'https://images.unsplash.com/photo-1603199506016-5a4f6b1c7f6b?w=400&h=280&fit=crop',
  taca:      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=280&fit=crop',
  tabua:     'https://images.unsplash.com/photo-1630394286685-0ceb2cb2da69?w=400&h=280&fit=crop',
  cafe:      'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=280&fit=crop',
  eletro:    'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=280&fit=crop',
  ferro:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=280&fit=crop',
  banheiro:  'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=280&fit=crop',
  cozinha:   'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=280&fit=crop',
  tempero:   'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&h=280&fit=crop',
  caneca:    'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=280&fit=crop',
  bowl:      'https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=400&h=280&fit=crop',
  mesa:      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=280&fit=crop',
  jarra:     'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=280&fit=crop',
  forma:     'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=280&fit=crop',
  talheres:  'https://images.unsplash.com/photo-1578922746465-3a80a228f223?w=400&h=280&fit=crop',
  sabao:     'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=280&fit=crop',
  lavanderia:'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=280&fit=crop',
  ralador:   'https://images.unsplash.com/photo-1600628421055-4d30de868b8f?w=400&h=280&fit=crop',
  tacho:     'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=280&fit=crop',
}

export const GIFTS: Gift[] = [
  // ── COZINHA ──────────────────────────────────────────────────────────────
  {
    id: '1', name: 'Panela de pressão 4,5L',
    description: 'Alumínio antiaderente, fechamento interno, 4,5 litros',
    category: 'Cozinha', price: 'R$ 129,00', image: IMG.panela,
    link: 'https://www.mercadolivre.com.br/panela-de-presso-mta-6002-aluminio-antiaderente-45l-cor-grafite/p/MLB45728206',
  },
  {
    id: '2', name: 'Escorredor de massas',
    description: 'Inox com alças, ideal para macarrão e verduras',
    category: 'Cozinha', price: 'R$ 24,90', image: IMG.cozinha,
    link: 'https://www.amazon.com.br/Escorredor-Massas-Prime-Lyor-2222/dp/B07BYWL17J/',
  },
  {
    id: '3', name: 'Centrífuga para salada',
    description: 'Tampa giratória, 22cm, remove o excesso de água da salada',
    category: 'Cozinha', price: 'R$ 36,99', image: IMG.tacho,
    link: 'https://www.mercadolivre.com.br/centrifuga-de-saladas-plastica-com-tampa-giratoria-22cm-branco/p/MLB63996211',
  },
  {
    id: '4', name: 'Espremedor de limão',
    description: 'Alumínio premium, resistente e fácil de usar',
    category: 'Cozinha', price: 'R$ 29,90', image: IMG.cozinha,
    link: 'https://www.lojasmel.com/espremedor-de-limao-aluminio-premium-donna-lar/p?idsku=4290',
  },
  {
    id: '5', name: 'Porta frios',
    description: 'Organizador para geladeira, mantém frios frescos e organizados',
    category: 'Cozinha', price: 'a partir de R$ 23,99', image: IMG.cozinha,
    link: 'https://lista.mercadolivre.com.br/porta-frios',
  },
  {
    id: '6', name: 'Abridor de lata',
    description: 'Cabo ergonômico, lâmina inox afiada — Brinox',
    category: 'Cozinha', price: 'R$ 29,90', image: IMG.cozinha,
    link: 'https://www.amazon.com.br/Abridor-Latas-Plus-Verona-Brinox/dp/B076TFDMT7/',
  },
  {
    id: '7', name: 'Peneiras kit aço inox',
    description: 'Kit com peneiras de diferentes tamanhos em aço inox',
    category: 'Cozinha', price: 'R$ 20,90', image: IMG.cozinha,
    link: 'https://www.amazon.com.br/Kit-Peneiras-A%C3%A7o-Inox-Versatilidade/dp/B0FXMZRN2D',
  },
  {
    id: '8', name: 'Saleiro + açucareiro',
    description: 'Kit duplo com design clean para a mesa do dia a dia',
    category: 'Cozinha', price: 'a partir de R$ 25,90', image: IMG.tempero,
    link: 'https://lista.mercadolivre.com.br/kit-saleiro-e-acucareiro',
  },
  {
    id: '9', name: 'Escorredor de louças (metal preto)',
    description: 'Metal preto com bandeja removível e porta-talheres',
    category: 'Cozinha', price: 'R$ 73,00', image: IMG.cozinha,
    link: 'https://www.mercadolivre.com.br/escorredor-de-loucas-metal-preto-com-bandeja-removivel-e-porta-talheres-yazi/p/MLB23570390',
  },
  {
    id: '10', name: 'Ralador culinário profissional',
    description: 'Inox com 4 faces, queijos, cenoura, limão e mais',
    category: 'Cozinha', price: 'R$ 22,90', image: IMG.ralador,
    link: 'https://www.amazon.com.br/Ralador-Culin%C3%A1rio-Profissional-Queijos-C%C3%ADtricos/dp/B07QNSDHZK',
  },
  {
    id: '11', name: 'Tábua de carne (bambu)',
    description: 'Bambu natural, 35cm, ecológica e resistente',
    category: 'Cozinha', price: 'R$ 32,00', image: IMG.tabua,
    link: 'https://www.amazon.com.br/T%C3%A1bua-Retangular-Bamboo-Mor-35/dp/B076X5ZLZQ/',
  },
  {
    id: '12', name: 'Garrafa térmica',
    description: 'Mantém a temperatura por horas, ideal para café e chá',
    category: 'Cozinha', price: 'a partir de R$ 29,90', image: IMG.cafe,
    link: 'https://lista.mercadolivre.com.br/garrafa-termica-barata',
  },
  {
    id: '13', name: 'Mixer elétrico',
    description: 'Inox, potente, perfeito para sopas, vitaminas e molhos',
    category: 'Cozinha', price: 'R$ 117,00', image: IMG.eletro,
    link: 'https://www.amazon.com.br/Mixer-Brit%C3%A2nia-Inox-Maxx-BMX355P/dp/B097KPBW7Q/',
  },
  {
    id: '14', name: 'Sanduicheira elétrica',
    description: 'Antiaderente, aquecimento rápido, 127V — Cadence',
    category: 'Cozinha', price: 'R$ 90,00', image: IMG.eletro,
    link: 'https://www.amazon.com.br/Sanduicheira-El%C3%A9trica-Cadence-Click-127V/dp/B0CDJ4L7CZ/',
  },
  {
    id: '15', name: 'Porta tempero (kit potes vidro)',
    description: 'Kit 12 potes quadrados de vidro 130ml com tampo',
    category: 'Cozinha', price: 'R$ 49,00', image: IMG.tempero,
    link: 'https://www.mercadolivre.com.br/kit-12-pote-quadrado-unico-em-vidro-130ml-ptempero-ctampa/up/MLBU1310170343',
  },
  {
    id: '16', name: 'Organizador de geladeira',
    description: 'Caixas empilháveis para organizar frutas, frios e laticínios',
    category: 'Cozinha', price: 'a partir de R$ 26,49', image: IMG.cozinha,
    link: 'https://lista.mercadolivre.com.br/organizador-de-geladeira',
  },
  {
    id: '17', name: 'Potes herméticos (kit)',
    description: 'Vários tamanhos, fechamento hermético, para alimentos',
    category: 'Cozinha', price: 'a partir de R$ 39,48', image: IMG.cozinha,
    link: 'https://lista.mercadolivre.com.br/kit-potes-hermeticos',
  },
  {
    id: '18', name: 'Jogo de facas (6 peças)',
    description: '6 facas em aço inox com cabos ergonômicos — Brinox',
    category: 'Cozinha', price: 'R$ 65,00', image: IMG.faca,
    link: 'https://www.precolandia.com.br/jogo-de-facas-cross-6-pecas-preta-brinox-998753/p',
  },
  {
    id: '19', name: 'Porta guardanapo',
    description: 'Design moderno com detalhes em barbante — Wolff',
    category: 'Cozinha', price: 'R$ 30,00', image: IMG.mesa,
    link: 'https://www.amazon.com.br/WOLFF-Porta-Guardanapos-Detalhes-Barbante/dp/B0F9ZXF8F3',
  },
  {
    id: '20', name: 'Panos de prato',
    description: 'Kit 10 unidades, algodão de alta absorção',
    category: 'Cozinha', price: 'a partir de R$ 29,58', image: IMG.lavanderia,
    link: 'https://lista.mercadolivre.com.br/kit-pano-de-prato',
  },
  {
    id: '21', name: 'Rodo de pia (cabo bambu)',
    description: 'Dobrável, cabo de bambu ecológico — Oikos',
    category: 'Cozinha', price: 'R$ 23,00', image: IMG.cozinha,
    link: 'https://www.mercadolivre.com.br/rodo-de-pia-dobravel-com-cabo-de-bambu-preto-oikos/p/MLB21364976',
  },
  {
    id: '22', name: 'Jogo de taças sobremesa',
    description: '6 taças de vidro transparente, 250ml, elegantes',
    category: 'Cozinha', price: 'R$ 65,00', image: IMG.taca,
    link: 'https://www.amazon.com.br/Sobremesa-Transparente-Sofisticado-Resistente-Restaurante/dp/B0GJ7T7Q17',
  },
  {
    id: '23', name: 'Jogo de prato fundo Ryo Oxford (6 un.)',
    description: 'Porcelana Ryo Maresia Oxford, 22,5cm, 6 peças',
    category: 'Cozinha', price: 'R$ 164,00', image: IMG.prato,
    link: 'https://www.mercadolivre.com.br/conjunto-de-6-pratos-fundos-225cm-ryo-maresia/p/MLB22275023',
  },
  {
    id: '24', name: 'Jogo de prato raso Ryo Oxford (6 un.)',
    description: 'Porcelana Ryo Maresia Oxford, 27,5cm, 6 peças',
    category: 'Cozinha', price: 'R$ 163,00', image: IMG.prato,
    link: 'https://www.magazineluiza.com.br/conjunto-6-pratos-rasos-225-cm-ryo-maresia-porcelana-oxford/p/jc79e8a9d2/ud/prra/',
  },
  {
    id: '25', name: 'Jogo de prato sobremesa Ryo Oxford',
    description: 'Porcelana Ryo Maresia Oxford, coleção completa',
    category: 'Cozinha', price: 'R$ 115,00', image: IMG.prato,
    link: 'https://www.amazon.com.br/Conjunto-com-Pratos-Sobremesa-Maresia/dp/B0941VNWN2/',
  },
  {
    id: '26', name: 'Jogo de caneca Ryo Oxford (6 un.)',
    description: 'Porcelana Ryo Maresia Oxford, 260ml, 6 canecas',
    category: 'Cozinha', price: 'R$ 117,00', image: IMG.caneca,
    link: 'https://www.mercadolivre.com.br/kit-6-canecas-de-porcelana-260ml-oxford-ryo-maresia/up/MLBU1981723596',
  },
  {
    id: '27', name: 'Jogo de xícara Ryo Oxford',
    description: 'Porcelana Ryo Maresia Oxford, xícaras grandes com pires',
    category: 'Cozinha', price: 'R$ 160,00', image: IMG.caneca,
    link: 'https://www.amazon.com.br/Conjunto-X%C3%ADcaras-grandes-pires-Maresias/dp/B09418KWFJ/',
  },
  {
    id: '28', name: 'Jogo de bowl Ryo Oxford (4 un.)',
    description: 'Porcelana Ryo Maresia Oxford, 500ml, 4 tigelas',
    category: 'Cozinha', price: 'R$ 150,00', image: IMG.bowl,
    link: 'https://www.mercadolivre.com.br/jogo-de-4-tigelas-500ml-oxford-ryo-maresia/p/MLB42073986',
  },
  {
    id: '29', name: 'Saladeira Ryo Oxford',
    description: 'Porcelana Ryo Maresia Oxford, 1,6 litros',
    category: 'Cozinha', price: 'R$ 70,00', image: IMG.bowl,
    link: 'https://www.amazon.com.br/Saladeira-Porcelana-Ryo-Oxford-Maresia/dp/B0D2V7Q31Z/',
  },
  {
    id: '30', name: 'Jogo de talheres inox',
    description: 'Inox polido, conjunto completo para o dia a dia',
    category: 'Cozinha', price: 'R$ 52,98', image: IMG.talheres,
    link: 'https://shopee.com.br/product/1036760565/21498329010',
  },
  {
    id: '31', name: 'Conjunto de utensílios (silicone + madeira)',
    description: '11 utensílios de silicone com cabo de madeira e suporte',
    category: 'Cozinha', price: 'R$ 60,00', image: IMG.cozinha,
    link: 'https://www.camicado.com.br/p/kit-11-utensilios-de-cozinha-de-silicone-com-cabo-de-madeira-e-suporte-tud/-/A-7010705221632-br.lc',
  },
  {
    id: '32', name: 'Espátula para bolo (inox)',
    description: 'Inox resistente, ideal para cortar e servir bolos — Tramontina',
    category: 'Cozinha', price: 'R$ 30,00', image: IMG.forma,
    link: 'https://www.amazon.com.br/Para-Bolo-Inox-Tramontina-63906/dp/B076M7ZB2C/',
  },
  {
    id: '33', name: 'Porta detergente e esponja',
    description: 'Design preto 18cm, organiza a pia com estilo — Arthi',
    category: 'Cozinha', price: 'R$ 28,00', image: IMG.sabao,
    link: 'https://www.precolandia.com.br/porta-detergente-e-esponja-18cm-preto-arthi-503460/p',
  },
  {
    id: '34', name: 'Jarra de vidro com tampa',
    description: 'Vidro transparente com tampa plástica, 1,5 litros — Wolff',
    category: 'Cozinha', price: 'R$ 60,00', image: IMG.jarra,
    link: 'https://www.havan.com.br/jarra-de-vidro-com-tampa-plastica-wolff-15-litros/p',
  },
  {
    id: '35', name: 'Colher bailarina',
    description: 'Inox, cabo longo, perfeita para misturar e mexer',
    category: 'Cozinha', price: 'R$ 15,00', image: IMG.cozinha,
    link: 'https://lista.mercadolivre.com.br/colher-bailarina-inox',
  },
  {
    id: '36', name: 'Luva térmica para forno',
    description: 'Proteção até 250°C, silicone antiderrapante',
    category: 'Cozinha', price: 'R$ 46,00', image: IMG.forma,
    link: 'https://www.amazon.com.br/T%C3%A9rmica-forno-Bakery-Presente-Criativo/dp/B098D3QSFH',
  },
  {
    id: '37', name: 'Afiador de facas',
    description: 'Inox premium, devolve o fio das facas em segundos',
    category: 'Cozinha', price: 'R$ 18,00', image: IMG.faca,
    link: 'https://www.amazon.com.br/Afiador-Faca-Premium-Inox-Black/dp/B0B8DVBHDZ',
  },
  {
    id: '38', name: 'Pegador de massas (inox)',
    description: '28cm, inox, mola resistente — Brinox Arienzo',
    category: 'Cozinha', price: 'R$ 17,00', image: IMG.cozinha,
    link: 'https://www.amazon.com.br/Pegador-Massa-Arienzo-280MM-Brinox/dp/B076JLVPNF/',
  },
  {
    id: '39', name: 'Rolo de massa (madeira)',
    description: 'Madeira maciça, ideal para massas de pão, pizza e torta',
    category: 'Cozinha', price: 'R$ 20,00', image: IMG.tabua,
    link: 'https://www.havan.com.br/rolo-para-massas-stolf-madeira/p',
  },
  {
    id: '40', name: 'Toalha de mesa',
    description: 'Tecido resistente para a mesa de jantar do dia a dia',
    category: 'Cozinha', price: 'a partir de R$ 29,90', image: IMG.mesa,
    link: 'https://lista.mercadolivre.com.br/toalha-de-mesa-barata',
  },
  {
    id: '41', name: 'Leiteira de vidro (borossilicato)',
    description: 'Vidro borossilicato Classic 660ml, resistente ao calor — Lyor',
    category: 'Cozinha', price: 'R$ 40,00', image: IMG.jarra,
    link: 'https://www.amazon.com.br/Leiteira-Vidro-Borossilicato-Classic-660ml/dp/B0BGJLWZ1C',
  },
  {
    id: '42', name: 'Jogo americano de mesa',
    description: 'Conjunto de sousplats para dar charme à mesa',
    category: 'Cozinha', price: 'a partir de R$ 31,96', image: IMG.mesa,
    link: 'https://lista.mercadolivre.com.br/jogo-americano-barato',
  },
  {
    id: '43', name: 'Jarra medidora de vidro',
    description: '700ml, vidro transparente com marcações de medida — Lyor',
    category: 'Cozinha', price: 'R$ 25,00', image: IMG.jarra,
    link: 'https://www.precolandia.com.br/jarra-de-vidro-medidora-700ml-lyor-033308/p',
  },
  {
    id: '44', name: 'Tigela de vidro com tampa',
    description: 'Kit 5 peças, vidro com tampa plástica preta — Dolce Home',
    category: 'Cozinha', price: 'R$ 35,00', image: IMG.bowl,
    link: 'https://www.precolandia.com.br/tigela-de-vidro-com-tampa-plastica-preta-5-pecas-dolce-home-217921/p',
  },
  {
    id: '45', name: 'Forma de pudim',
    description: 'Alumínio com furo central, para pudins e gelatinas',
    category: 'Cozinha', price: 'R$ 30,00', image: IMG.forma,
    link: 'https://lista.mercadolivre.com.br/forma-de-pudim-aluminio-cozinha',
  },
  {
    id: '46', name: 'Forma de bolo fundo removível',
    description: 'Antiaderente com fundo removível, conjunto redondo',
    category: 'Cozinha', price: 'R$ 40,00', image: IMG.forma,
    link: 'https://www.amazon.com.br/Conjunto-Redondas-Antiaderentes-Remov%C3%ADvel-Assadeiras/dp/B0FRV91C66/',
  },
  {
    id: '47', name: 'Cafeteira elétrica',
    description: 'Jarra de vidro, filtro permanente, 15 xícaras — Electrolux',
    category: 'Cozinha', price: 'R$ 110,00', image: IMG.cafe,
    link: 'https://www.mercadolivre.com.br/cafeteira-eletrica-electrolux-jarra-vidro-acabamento-inox-filtro-permanente-removivel-sistema-corta-pingos-capacidade-15-xicaras-600ml-ecm10/p/MLB18927374',
  },
  {
    id: '48', name: 'Panela de arroz elétrica',
    description: 'Com visor glass, mantém quente após o preparo',
    category: 'Cozinha', price: 'R$ 150,00', image: IMG.panela,
    link: 'https://www.amazon.com.br/PANELA-ARROZ-PH5P-VISOR-GLASS/dp/B0876TSY5Q/',
  },
  {
    id: '49', name: 'Liquidificador',
    description: '1200W, 12 turbo, jarra de 3L — Philco',
    category: 'Cozinha', price: 'R$ 200,00', image: IMG.eletro,
    link: 'https://www.casasbahia.com.br/liquidificador-philco-plq2100pi-12-turbo-3l-1200w-110v/p/1572899831',
  },
  {
    id: '50', name: 'Ferro de passar a vapor',
    description: 'Série Philips Walita, base antiadesiva, resultados perfeitos',
    category: 'Cozinha', price: 'R$ 150,00', image: IMG.ferro,
    link: 'https://www.amazon.com.br/Ferro-Vapor-S%C3%A9rie-Philips-Walita/dp/B0F3QN6FKK',
  },
  {
    id: '51', name: 'Panela de pressão elétrica (5L)',
    description: '5 litros, inox, 12 funções — Electrolux por Rita Lobo',
    category: 'Cozinha', price: 'R$ 350,00', image: IMG.panela,
    link: 'https://www.mercadolivre.com.br/panela-de-presso-eletrica-electrolux-5l-cor-inox-efficient-por-rita-lobo-pce20/p/MLB16051358',
  },
  {
    id: '52', name: 'Amassador de batata (inox)',
    description: 'Inox resistente, cabo confortável, fácil de lavar',
    category: 'Cozinha', price: 'R$ 36,00', image: IMG.cozinha,
    link: 'https://lista.mercadolivre.com.br/amassador-batata-inox',
  },
  {
    id: '53', name: 'Ralador 6 faces (inox)',
    description: '6 tipos de corte em um só ralador — Hércules',
    category: 'Cozinha', price: 'R$ 35,00', image: IMG.ralador,
    link: 'https://www.precolandia.com.br/ralador-6-faces-de-inox-hercules-436925/p',
  },
  {
    id: '54', name: 'Pegador de salada (inox)',
    description: '20,5cm, inox, design elegante — Brinox Arienzo',
    category: 'Cozinha', price: 'R$ 15,00', image: IMG.talheres,
    link: 'https://www.precolandia.com.br/pegador-de-salada-arienzo-205cm-brinox-040126/p',
  },

  // ── BANHEIRO ──────────────────────────────────────────────────────────────
  {
    id: '55', name: 'Kit saboneteira',
    description: 'Conjunto completo para banheiro: saboneteira, porta-shampoo e mais',
    category: 'Banheiro', price: 'a partir de R$ 32,90', image: IMG.banheiro,
    link: 'https://lista.mercadolivre.com.br/kit-saboneteira-banheiro',
  },
  {
    id: '56', name: 'Tapetes de banheiro',
    description: 'Tapete felpudo antiderrapante para box e pia',
    category: 'Banheiro', price: 'a partir de R$ 27,49', image: IMG.banheiro,
    link: 'https://lista.mercadolivre.com.br/tapete-banheiro',
  },
  {
    id: '57', name: 'Lixeira de banheiro',
    description: 'Lixeira com tampa para banheiro, design discreto',
    category: 'Banheiro', price: 'a partir de R$ 19,90', image: IMG.banheiro,
    link: 'https://lista.mercadolivre.com.br/lixeira-banheiro-barata',
  },

  // ── LAVANDERIA ────────────────────────────────────────────────────────────
  {
    id: '58', name: 'Organizador de lavanderia',
    description: 'Prateleiras e compartimentos para organizar produtos de limpeza',
    category: 'Lavanderia', price: 'a partir de R$ 39,90', image: IMG.lavanderia,
    link: 'https://lista.mercadolivre.com.br/organizador-lavanderia',
  },
  {
    id: '59', name: 'Balde dobrável',
    description: 'Silicone retrátil 10 litros, economiza espaço',
    category: 'Lavanderia', price: 'a partir de R$ 29,90', image: IMG.lavanderia,
    link: 'https://www.mercadolivre.com.br/balde-dobravel-retratil-10-litros-silicone/p/MLB20669524',
  },
  {
    id: '60', name: 'Tábua de passar roupas',
    description: 'Estrutura resistente com regulagem de altura',
    category: 'Lavanderia', price: 'a partir de R$ 69,42', image: IMG.ferro,
    link: 'https://lista.mercadolivre.com.br/tabua-de-passar-roupa',
  },
  {
    id: '61', name: 'Capacho porta entrada',
    description: 'Tapete funcional para entrada, remove sujeira dos calçados',
    category: 'Lavanderia', price: 'a partir de R$ 19,32', image: IMG.lavanderia,
    link: 'https://lista.mercadolivre.com.br/capacho-porta-entrada',
  },
  {
    id: '62', name: 'Rodo',
    description: 'Cabo longo com borracha resistente para limpeza do piso',
    category: 'Lavanderia', price: 'a partir de R$ 29,99', image: IMG.lavanderia,
    link: 'https://lista.mercadolivre.com.br/rodo-de-limpeza',
  },
  {
    id: '63', name: 'Vassoura',
    description: 'Cerdas resistentes, cabo ergonômico para varrer',
    category: 'Lavanderia', price: 'a partir de R$ 19,90', image: IMG.lavanderia,
    link: 'https://lista.mercadolivre.com.br/vassoura-barata',
  },
  {
    id: '64', name: 'Pá de lixo',
    description: 'Plástico resistente com cabo longo, combina com vassoura',
    category: 'Lavanderia', price: 'a partir de R$ 12,90', image: IMG.lavanderia,
    link: 'https://lista.mercadolivre.com.br/pa-de-lixo',
  },
  {
    id: '65', name: 'Lixeira de cozinha',
    description: 'Lixeira plástica com tampa para cozinha ou lavanderia',
    category: 'Lavanderia', price: 'a partir de R$ 29,90', image: IMG.lavanderia,
    link: 'https://lista.mercadolivre.com.br/lixeira-cozinha-barata',
  },
]

export const CATEGORIES: Category[] = ['Cozinha', 'Banheiro', 'Lavanderia']
