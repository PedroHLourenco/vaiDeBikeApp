// Utilitários para cálculos de distância e localização
export const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371; // Raio da Terra em km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

// Função para calcular calorias queimadas baseado na distância
export const calculateCalories = (distance, weight = 70) => {
  // Aproximadamente 40 calorias por km para uma pessoa de 70kg
  return Math.round(distance * 40 * (weight / 70));
};

// Função para calcular CO2 economizado
export const calculateCO2Saved = (distance) => {
  // Aproximadamente 0.12 kg de CO2 economizado por km (comparado ao carro)
  return distance * 0.12;
};

// Função para formatar tempo em minutos para horas e minutos
export const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours > 0) {
    return `${hours}h ${mins}m`;
  }
  return `${mins}m`;
};

// Função para formatar distância
export const formatDistance = (distance) => {
  if (distance < 1) {
    return `${Math.round(distance * 1000)}m`;
  }
  return `${distance.toFixed(1)}km`;
};

// Função para obter cor baseada na dificuldade
export const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'Fácil':
      return '#4CAF50';
    case 'Moderado':
      return '#FF9800';
    case 'Difícil':
      return '#F44336';
    default:
      return '#666';
  }
};

// Função para obter ícone do serviço
export const getServiceIcon = (service) => {
  switch (service) {
    case 'Bebedouro':
      return '💧';
    case 'Bomba de Ar':
      return '🚲';
    case 'Banheiro':
      return '🚻';
    case 'Bicicletário':
      return '🅿️';
    case 'Manutenção':
      return '🔧';
    default:
      return '📍';
  }
};

// Função para obter ícone da posição no ranking
export const getPositionIcon = (position) => {
  switch (position) {
    case 1:
      return '🥇';
    case 2:
      return '🥈';
    case 3:
      return '🥉';
    default:
      return `${position}°`;
  }
};

// Função para calcular porcentagem de progresso
export const getProgressPercentage = (progress, target) => {
  return Math.min((progress / target) * 100, 100);
};

// Função para validar coordenadas
export const isValidCoordinate = (lat, lng) => {
  return (
    typeof lat === 'number' && 
    typeof lng === 'number' &&
    lat >= -90 && lat <= 90 &&
    lng >= -180 && lng <= 180
  );
};

// Função para gerar ID único
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Função para salvar dados no AsyncStorage
export const saveData = async (key, data) => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(key, jsonValue);
    return true;
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
    return false;
  }
};

// Função para carregar dados do AsyncStorage
export const loadData = async (key, defaultValue = null) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : defaultValue;
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
    return defaultValue;
  }
};

// Função para limpar dados do AsyncStorage
export const clearData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Erro ao limpar dados:', error);
    return false;
  }
};

// Função para validar email
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Função para validar telefone brasileiro
export const isValidPhone = (phone) => {
  const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
  return phoneRegex.test(phone);
};

// Função para formatar telefone
export const formatPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 11) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
  } else if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
};

