# Documentação do Código - VaiDeBike Maringá

## Estrutura Geral do Projeto

O aplicativo VaiDeBike Maringá foi desenvolvido seguindo as melhores práticas de desenvolvimento React Native, com uma arquitetura modular e bem organizada.

## Componentes Principais

### App.js
Componente raiz da aplicação que configura a navegação principal usando React Navigation Stack Navigator.

**Funcionalidades:**
- Configuração da navegação entre telas
- Definição do tema visual dos cabeçalhos
- Roteamento para todas as telas do aplicativo

### Telas (Screens)

#### HomeScreen.js
Tela inicial do aplicativo que apresenta o menu principal com acesso a todas as funcionalidades.

**Características:**
- Interface limpa e intuitiva
- Cards clicáveis para navegação
- Design responsivo
- Cores temáticas do projeto

#### RoutesScreen.js
Tela dedicada à visualização de rotas para ciclistas.

**Funcionalidades:**
- Lista de rotas disponíveis
- Informações de distância e dificuldade
- Badges coloridos por nível de dificuldade
- Botões para visualização no mapa

#### SafetyTipsScreen.js
Tela com dicas de segurança organizadas por categorias.

**Características:**
- Conteúdo organizado por seções
- Ícones representativos para cada categoria
- Informações de emergência destacadas
- Layout scrollável para fácil navegação

#### SupportPointsScreen.js
Tela para localização de pontos de apoio com sistema de filtros.

**Funcionalidades:**
- Filtros por categoria de serviço
- Cards informativos com detalhes dos pontos
- Sistema de tags para serviços disponíveis
- Botões de direcionamento

#### ProgressScreen.js
Tela de acompanhamento do progresso do usuário com gamificação.

**Características:**
- Estatísticas principais em cards
- Barras de progresso para metas
- Gráfico semanal de atividades
- Sistema de conquistas
- Dados de impacto ambiental

#### CommunityScreen.js
Tela da comunidade com sistema de tabs para diferentes funcionalidades.

**Funcionalidades:**
- Tab de ranking com posições dos usuários
- Tab de desafios ativos com progresso
- Tab de recompensas disponíveis
- Sistema de pontuação

## Estrutura de Dados

### mockData.js
Arquivo centralizado com todos os dados simulados do aplicativo.

**Conteúdo:**
- `routesData`: Rotas de ciclismo com coordenadas e detalhes
- `supportPointsData`: Pontos de apoio com localização e serviços
- `safetyTipsData`: Dicas organizadas por categoria
- `rankingData`: Dados do ranking da comunidade
- `challengesData`: Desafios disponíveis
- `rewardsData`: Recompensas do sistema de pontuação

### helpers.js
Funções utilitárias para cálculos e formatação.

**Principais funções:**
- `calculateDistance()`: Cálculo de distância entre coordenadas
- `calculateCalories()`: Estimativa de calorias queimadas
- `calculateCO2Saved()`: Cálculo de CO2 economizado
- `formatTime()`: Formatação de tempo
- `formatDistance()`: Formatação de distância
- Funções de validação e persistência de dados

## Sistema de Estilos

### theme.js
Arquivo centralizado com toda a definição visual do aplicativo.

**Componentes:**
- `colors`: Paleta de cores padronizada
- `spacing`: Espaçamentos consistentes
- `fontSize`: Tamanhos de fonte
- `borderRadius`: Raios de borda
- `shadows`: Definições de sombra
- `globalStyles`: Estilos globais reutilizáveis
- `componentStyles`: Estilos específicos para componentes

## Navegação

O aplicativo utiliza React Navigation v6 com Stack Navigator para navegação entre telas.

**Configuração:**
- Navegação por pilha (stack)
- Cabeçalhos personalizados
- Transições suaves entre telas
- Botões de voltar automáticos

## Persistência de Dados

Utiliza AsyncStorage para armazenamento local de dados do usuário.

**Dados persistidos:**
- Progresso do usuário
- Configurações pessoais
- Histórico de atividades
- Conquistas desbloqueadas

## Funcionalidades Implementadas

### Sistema de Gamificação
- Conquistas baseadas em atividades
- Sistema de pontuação
- Rankings da comunidade
- Desafios mensais
- Recompensas simbólicas

### Cálculos Ambientais
- CO2 economizado vs. uso de carro
- Calorias queimadas por atividade
- Impacto ambiental positivo

### Interface Responsiva
- Design adaptável a diferentes telas
- Componentes acessíveis
- Navegação intuitiva
- Feedback visual adequado

## Boas Práticas Implementadas

### Código
- Componentização adequada
- Separação de responsabilidades
- Nomenclatura clara e consistente
- Comentários quando necessário

### Performance
- Uso eficiente de estado
- Otimização de renderizações
- Carregamento lazy quando possível
- Gestão adequada de memória

### UX/UI
- Design consistente
- Feedback visual imediato
- Navegação intuitiva
- Acessibilidade considerada

## Possíveis Melhorias Futuras

### Funcionalidades
- Integração com GPS real
- Sistema de notificações
- Compartilhamento social
- Modo offline

### Técnicas
- Implementação de testes automatizados
- Integração com backend real
- Otimizações de performance
- Implementação de analytics

### Interface
- Animações mais elaboradas
- Temas personalizáveis
- Modo escuro
- Maior personalização

## Considerações de Desenvolvimento

Este projeto foi desenvolvido como atividade acadêmica, focando em:
- Demonstração de conceitos de React Native
- Implementação de boas práticas
- Design centrado no usuário
- Funcionalidades relevantes para o contexto

O código está estruturado de forma a facilitar manutenção e extensão futuras, seguindo padrões estabelecidos da comunidade React Native.

