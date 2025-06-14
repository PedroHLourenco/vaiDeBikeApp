import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SafetyTipsScreen = ({ navigation }) => {
  const safetyTips = [
    {
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Dicas de Segurança</Text>
          <Text style={styles.subtitle}>Pedale com segurança e responsabilidade</Text>
        </View>

        <View style={styles.tipsContainer}>
          {safetyTips.map((section, index) => (
            <View key={index} style={styles.tipSection}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionIcon}>{section.icon}</Text>
                <Text style={styles.sectionTitle}>{section.category}</Text>
              </View>
              <View style={styles.tipsListContainer}>
                {section.tips.map((tip, tipIndex) => (
                  <View key={tipIndex} style={styles.tipItem}>
                    <Text style={styles.tipBullet}>•</Text>
                    <Text style={styles.tipText}>{tip}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.emergencyBox}>
          <Text style={styles.emergencyTitle}>🚨 Em caso de emergência</Text>
          <Text style={styles.emergencyText}>
            SAMU: 192 | Bombeiros: 193 | Polícia: 190
          </Text>
          <Text style={styles.emergencySubtext}>
            Sempre carregue um documento de identificação e informações de contato de emergência.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  tipsContainer: {
    gap: 20,
    marginBottom: 20,
  },
  tipSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    flex: 1,
  },
  tipsListContainer: {
    gap: 8,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  tipBullet: {
    fontSize: 16,
    color: '#2E7D32',
    marginRight: 10,
    marginTop: 2,
  },
  tipText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    lineHeight: 20,
  },
  emergencyBox: {
    backgroundColor: '#FFEBEE',
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#F44336',
  },
  emergencyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F44336',
    marginBottom: 10,
  },
  emergencyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F44336',
    marginBottom: 8,
  },
  emergencySubtext: {
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
  },
});

export default SafetyTipsScreen;

