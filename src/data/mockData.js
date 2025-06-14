// Dados mockados para rotas de ciclismo em Maringá
export const routesData = [
  {
    id: 1,
    name: 'Centro - Zona 7',
    distance: 5.2,
    difficulty: 'Fácil',
    description: 'Rota segura com ciclovias bem sinalizadas',
    duration: 25,
    elevation: 'Baixa',
    waypoints: [
      { lat: -23.4205, lng: -51.9331, name: 'Centro' },
      { lat: -23.4089, lng: -51.9456, name: 'Zona 7' }
    ],
    features: ['Ciclovia', 'Sinalização', 'Iluminação'],
    safetyRating: 5
  },
  {
    id: 2,
    name: 'Parque do Ingá - UEM',
    distance: 3.8,
    difficulty: 'Fácil',
    description: 'Percurso arborizado ideal para iniciantes',
    duration: 18,
    elevation: 'Baixa',
    waypoints: [
      { lat: -23.4236, lng: -51.9356, name: 'Parque do Ingá' },
      { lat: -23.4047, lng: -51.9408, name: 'UEM' }
    ],
    features: ['Área Verde', 'Sombreado', 'Seguro'],
    safetyRating: 5
  },
  {
    id: 3,
    name: 'Centro - Aeroporto',
    distance: 8.5,
    difficulty: 'Moderado',
    description: 'Rota com algumas subidas, boa para exercitar',
    duration: 35,
    elevation: 'Média',
    waypoints: [
      { lat: -23.4205, lng: -51.9331, name: 'Centro' },
      { lat: -23.4789, lng: -51.9234, name: 'Aeroporto' }
    ],
    features: ['Ciclofaixa', 'Subidas', 'Vista Panorâmica'],
    safetyRating: 4
  },
  {
    id: 4,
    name: 'Volta Completa - Parques',
    distance: 12.3,
    difficulty: 'Difícil',
    description: 'Circuito pelos principais parques da cidade',
    duration: 55,
    elevation: 'Alta',
    waypoints: [
      { lat: -23.4236, lng: -51.9356, name: 'Parque do Ingá' },
      { lat: -23.4156, lng: -51.9278, name: 'Bosque 2' },
      { lat: -23.4089, lng: -51.9456, name: 'Parque Florestal' },
      { lat: -23.4236, lng: -51.9356, name: 'Parque do Ingá' }
    ],
    features: ['Múltiplos Parques', 'Desafio', 'Natureza'],
    safetyRating: 4
  }
];

// Dados mockados para pontos de apoio
export const supportPointsData = [
  {
    id: 1,
    name: 'Parque do Ingá',
    address: 'Av. Euclides da Cunha, s/n',
    category: 'water',
    services: ['Bebedouro', 'Banheiro', 'Bicicletário'],
    hours: '06:00 - 22:00',
    coordinates: { lat: -23.4236, lng: -51.9356 },
    phone: '(44) 3221-1234',
    description: 'Principal parque da cidade com infraestrutura completa para ciclistas'
  },
  {
    id: 2,
    name: 'Terminal Rodoviário',
    address: 'Av. Tuiuti, 1500',
    category: 'parking',
    services: ['Bicicletário', 'Banheiro'],
    hours: '24 horas',
    coordinates: { lat: -23.4189, lng: -51.9287 },
    phone: '(44) 3221-5678',
    description: 'Terminal com bicicletário seguro e monitorado'
  },
  {
    id: 3,
    name: 'Posto Shell - Centro',
    address: 'Av. Brasil, 1234',
    category: 'pump',
    services: ['Bomba de Ar', 'Bebedouro'],
    hours: '06:00 - 22:00',
    coordinates: { lat: -23.4205, lng: -51.9331 },
    phone: '(44) 3221-9876',
    description: 'Posto de combustível com apoio para ciclistas'
  },
  {
    id: 4,
    name: 'UEM - Campus Principal',
    address: 'Av. Colombo, 5790',
    category: 'parking',
    services: ['Bicicletário', 'Bebedouro', 'Banheiro'],
    hours: '06:00 - 22:00',
    coordinates: { lat: -23.4047, lng: -51.9408 },
    phone: '(44) 3011-4444',
    description: 'Universidade com excelente infraestrutura para ciclistas'
  },
  {
    id: 5,
    name: 'Praça da Catedral',
    address: 'Av. Tiradentes, Centro',
    category: 'water',
    services: ['Bebedouro', 'Banheiro'],
    hours: '24 horas',
    coordinates: { lat: -23.4198, lng: -51.9345 },
    phone: '(44) 3221-2222',
    description: 'Praça central com bebedouro público'
  },
  {
    id: 6,
    name: 'Bike Shop Maringá',
    address: 'Rua Pioneiro João Domingos, 456',
    category: 'pump',
    services: ['Bomba de Ar', 'Manutenção'],
    hours: '08:00 - 18:00',
    coordinates: { lat: -23.4167, lng: -51.9298 },
    phone: '(44) 3225-7777',
    description: 'Loja especializada em bicicletas com serviços de manutenção'
  }
];

// Dados mockados para dicas de segurança
export const safetyTipsData = [
  {
    id: 1,
    category: 'Equipamentos de Segurança',
    icon: '🛡️',
    tips: [
      'Sempre use capacete homologado pelo INMETRO',
      'Vista roupas claras e com elementos refletivos',
      'Use luvas para melhor aderência no guidão',
      'Mantenha a bicicleta com luzes dianteira e traseira'
    ]
  },
  {
    id: 2,
    category: 'Regras de Trânsito',
    icon: '🚦',
    tips: [
      'Respeite semáforos e placas de sinalização',
      'Sinalize suas intenções com gestos claros',
      'Mantenha-se na ciclovia ou ciclofaixa quando disponível',
      'Não ande na contramão ou em calçadas'
    ]
  },
  {
    id: 3,
    category: 'Posicionamento na Via',
    icon: '🛣️',
    tips: [
      'Mantenha distância segura dos veículos',
      'Posicione-se de forma visível no trânsito',
      'Evite pontos cegos de carros e caminhões',
      'Use o bordo direito da via quando não houver ciclovia'
    ]
  },
  {
    id: 4,
    category: 'Manutenção da Bicicleta',
    icon: '🔧',
    tips: [
      'Verifique os freios regularmente',
      'Mantenha os pneus com pressão adequada',
      'Lubrifique a corrente periodicamente',
      'Ajuste a altura do selim corretamente'
    ]
  },
  {
    id: 5,
    category: 'Condições Climáticas',
    icon: '🌦️',
    tips: [
      'Reduza a velocidade em dias chuvosos',
      'Evite pedalar com vento forte',
      'Use óculos de proteção contra sol e insetos',
      'Hidrate-se adequadamente em dias quentes'
    ]
  }
];

// Dados mockados para progresso do usuário
export const initialProgressData = {
  totalDistance: 125.8,
  totalTime: 420, // minutos
  totalTrips: 15,
  caloriesBurned: 2840,
  co2Saved: 12.5,
  currentStreak: 3,
  longestStreak: 7,
  weeklyGoal: 50,
  monthlyGoal: 200,
};

// Dados mockados para conquistas
export const achievementsData = [
  { id: 1, title: 'Primeiro Pedal', description: 'Complete sua primeira viagem', unlocked: true, icon: '🚴' },
  { id: 2, title: 'Explorador', description: 'Use 3 rotas diferentes', unlocked: true, icon: '🗺️' },
  { id: 3, title: 'Eco Warrior', description: 'Economize 10kg de CO2', unlocked: true, icon: '🌱' },
  { id: 4, title: 'Maratonista', description: 'Pedale 100km em um mês', unlocked: false, icon: '🏃' },
  { id: 5, title: 'Consistente', description: 'Mantenha uma sequência de 7 dias', unlocked: false, icon: '📅' },
  { id: 6, title: 'Campeão', description: 'Alcance o top 10 do ranking', unlocked: false, icon: '🏆' },
];

// Dados mockados para ranking da comunidade
export const rankingData = [
  { id: 1, name: 'Ana Silva', points: 2850, distance: 185.2, position: 1, avatar: '👩' },
  { id: 2, name: 'Carlos Santos', points: 2720, distance: 172.8, position: 2, avatar: '👨' },
  { id: 3, name: 'Maria Oliveira', points: 2650, distance: 168.5, position: 3, avatar: '👩' },
  { id: 4, name: 'João Pedro', points: 2480, distance: 155.3, position: 4, avatar: '👨' },
  { id: 5, name: 'Você', points: 2350, distance: 148.7, position: 5, avatar: '🚴', isCurrentUser: true },
  { id: 6, name: 'Lucia Costa', points: 2280, distance: 142.1, position: 6, avatar: '👩' },
  { id: 7, name: 'Roberto Lima', points: 2150, distance: 135.8, position: 7, avatar: '👨' },
  { id: 8, name: 'Fernanda Rocha', points: 2080, distance: 128.9, position: 8, avatar: '👩' },
];

// Dados mockados para desafios
export const challengesData = [
  {
    id: 1,
    title: 'Desafio do Mês',
    description: 'Pedale 200km em dezembro',
    progress: 148.7,
    target: 200,
    reward: '🏆 Medalha de Ouro',
    daysLeft: 12,
    participants: 156
  },
  {
    id: 2,
    title: 'Explorador Urbano',
    description: 'Use 5 rotas diferentes',
    progress: 3,
    target: 5,
    reward: '🗺️ Badge Explorador',
    daysLeft: 25,
    participants: 89
  },
  {
    id: 3,
    title: 'Eco Warrior',
    description: 'Economize 50kg de CO2',
    progress: 12.5,
    target: 50,
    reward: '🌱 Título Verde',
    daysLeft: 18,
    participants: 203
  },
  {
    id: 4,
    title: 'Sequência Perfeita',
    description: 'Pedale por 7 dias consecutivos',
    progress: 3,
    target: 7,
    reward: '📅 Badge Consistência',
    daysLeft: 8,
    participants: 67
  }
];

// Dados mockados para recompensas
export const rewardsData = [
  {
    id: 1,
    title: 'Desconto Bike Shop',
    description: '15% de desconto em manutenção',
    points: 500,
    available: true,
    category: 'Desconto'
  },
  {
    id: 2,
    title: 'Camiseta VaiDeBike',
    description: 'Camiseta oficial do projeto',
    points: 1000,
    available: true,
    category: 'Produto'
  },
  {
    id: 3,
    title: 'Garrafa Térmica',
    description: 'Garrafa térmica ecológica',
    points: 800,
    available: false,
    category: 'Produto'
  },
  {
    id: 4,
    title: 'Acessório Refletivo',
    description: 'Kit de acessórios refletivos',
    points: 600,
    available: true,
    category: 'Segurança'
  }
];

