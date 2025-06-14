# VaiDeBike Maringá 🚴‍♂️

Um aplicativo React Native desenvolvido para promover a mobilidade sustentável em Maringá, incentivando o uso de bicicletas e caminhadas como alternativas de transporte eficientes, seguras e ecológicas.

## 📱 Sobre o Projeto

O VaiDeBike Maringá é uma solução colaborativa voltada a fomentar a mobilidade ativa e sustentável, alinhada aos objetivos do ODS 11 – Cidades e comunidades sustentáveis. O aplicativo oferece funcionalidades que auxiliam ciclistas e pedestres a se deslocarem com mais segurança e eficiência pela cidade.

### 🎯 Objetivos

- Incentivar o uso da bicicleta e o deslocamento a pé
- Disponibilizar rotas seguras e informações relevantes
- Promover o engajamento da comunidade local
- Contribuir para a redução do uso de veículos particulares
- Melhorar a qualidade do ar e a saúde pública
- Aumentar a conscientização ambiental

## ✨ Funcionalidades

### 🗺️ Rotas para Ciclistas
- Visualização de ciclovias e rotas seguras
- Informações sobre distância, dificuldade e duração
- Detalhes sobre características das rotas (elevação, recursos)
- Avaliação de segurança das rotas

### 🛡️ Dicas de Segurança
- Orientações sobre equipamentos de segurança
- Regras de trânsito para ciclistas
- Dicas de posicionamento na via
- Orientações sobre manutenção da bicicleta
- Cuidados em diferentes condições climáticas

### 📍 Pontos de Apoio
- Localização de bebedouros, bombas de ar, banheiros e bicicletários
- Informações detalhadas sobre cada ponto (endereço, horários, serviços)
- Filtros por categoria de serviço
- Parceria com estabelecimentos locais

### 📊 Meu Progresso
- Acompanhamento de distância percorrida
- Controle de tempo de atividade
- Cálculo de calorias queimadas
- Monitoramento de CO2 economizado
- Metas semanais e mensais
- Sistema de conquistas

### 🏆 Comunidade
- Rankings de usuários
- Desafios mensais
- Sistema de pontuação
- Recompensas simbólicas
- Engajamento da comunidade

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **React Navigation** - Navegação entre telas
- **AsyncStorage** - Armazenamento local de dados
- **React Native Maps** - Integração com mapas
- **Expo Location** - Serviços de localização

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

## 🚀 Como Executar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/vaidebike-maringa.git
cd vaidebike-maringa
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute o projeto
```bash
npm start
```

### 4. Visualize o aplicativo
- **Web**: Pressione `w` no terminal ou acesse `http://localhost:8081`
- **Android**: Pressione `a` no terminal (requer Android Studio/emulador)
- **iOS**: Pressione `i` no terminal (requer Xcode - apenas macOS)
- **Expo Go**: Escaneie o QR code com o app Expo Go no seu dispositivo

## 📁 Estrutura do Projeto

```
VaiDeBikeMaringa/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   ├── screens/            # Telas do aplicativo
│   │   ├── HomeScreen.js
│   │   ├── RoutesScreen.js
│   │   ├── SafetyTipsScreen.js
│   │   ├── SupportPointsScreen.js
│   │   ├── ProgressScreen.js
│   │   └── CommunityScreen.js
│   ├── navigation/         # Configurações de navegação
│   ├── data/              # Dados mockados
│   ├── utils/             # Funções utilitárias
│   ├── styles/            # Estilos e temas
│   └── assets/            # Imagens, ícones, fontes
├── App.js                 # Componente principal
├── package.json
└── README.md
```

## 🎨 Design e Interface

O aplicativo segue um design moderno e intuitivo com:

- **Cores principais**: Verde (#2E7D32) representando sustentabilidade
- **Interface responsiva**: Adaptável a diferentes tamanhos de tela
- **Navegação intuitiva**: Stack navigation para facilitar o uso
- **Componentes acessíveis**: Seguindo boas práticas de UX/UI

## 📊 Dados e Funcionalidades

### Dados Mockados
O aplicativo utiliza dados simulados para demonstração, incluindo:
- Rotas de ciclismo em Maringá
- Pontos de apoio reais da cidade
- Dicas de segurança baseadas em boas práticas
- Sistema de progresso e gamificação

### Persistência Local
- Utiliza AsyncStorage para salvar progresso do usuário
- Mantém configurações e preferências localmente
- Armazena histórico de atividades

## 🌱 Impacto Ambiental

O aplicativo calcula e exibe:
- **CO2 economizado**: Baseado na distância percorrida vs. uso de carro
- **Calorias queimadas**: Estimativa baseada na atividade física
- **Benefícios ambientais**: Conscientização sobre mobilidade sustentável

## 🏆 Sistema de Gamificação

### Conquistas
- Primeiro Pedal
- Explorador (usar diferentes rotas)
- Eco Warrior (economizar CO2)
- Maratonista (meta de distância)
- Consistente (sequência de dias)
- Campeão (ranking)

### Recompensas
- Descontos em estabelecimentos parceiros
- Produtos oficiais do projeto
- Acessórios de segurança
- Reconhecimento na comunidade

## 🤝 Contribuindo

Este é um projeto universitário, mas contribuições são bem-vindas:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Equipe

Projeto desenvolvido como atividade acadêmica da **Universidade Cesumar - UNICESUMAR**.

## 📞 Contato

Para dúvidas ou sugestões sobre o projeto:
- Email: contato@vaidebikemaringa.com.br
- GitHub: [VaiDeBike Maringá](https://github.com/seu-usuario/vaidebike-maringa)

## 🙏 Agradecimentos

- Universidade Cesumar - UNICESUMAR
- Prefeitura de Maringá
- Comunidade de ciclistas de Maringá
- Estabelecimentos parceiros

---

**VaiDeBike Maringá** - Mobilidade sustentável para todos! 🌱🚴‍♂️

