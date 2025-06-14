import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RoutesScreen = ({ navigation }) => {
  const routes = [
    {
      name: 'Centro - Zona 7',
      distance: '5.2 km',
      difficulty: 'Fácil',
      description: 'Rota segura com ciclovias bem sinalizadas'
    },
    {
      name: 'Parque do Ingá - UEM',
      distance: '3.8 km',
      difficulty: 'Fácil',
      description: 'Percurso arborizado ideal para iniciantes'
    },
    {
      name: 'Centro - Aeroporto',
      distance: '8.5 km',
      difficulty: 'Moderado',
      description: 'Rota com algumas subidas, boa para exercitar'
    },
    {
      name: 'Volta Completa - Parques',
      distance: '12.3 km',
      difficulty: 'Difícil',
      description: 'Circuito pelos principais parques da cidade'
    }
  ];

  const getDifficultyColor = (difficulty) => {
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Rotas para Ciclistas</Text>
          <Text style={styles.subtitle}>Escolha sua rota ideal</Text>
        </View>

        <View style={styles.routesContainer}>
          {routes.map((route, index) => (
            <TouchableOpacity key={index} style={styles.routeCard}>
              <View style={styles.routeHeader}>
                <Text style={styles.routeName}>{route.name}</Text>
                <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor(route.difficulty) }]}>
                  <Text style={styles.difficultyText}>{route.difficulty}</Text>
                </View>
              </View>
              <Text style={styles.routeDistance}>{route.distance}</Text>
              <Text style={styles.routeDescription}>{route.description}</Text>
              <TouchableOpacity style={styles.viewRouteButton}>
                <Text style={styles.viewRouteButtonText}>Ver no Mapa</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>💡 Dica</Text>
          <Text style={styles.infoText}>
            Sempre use equipamentos de segurança e respeite as leis de trânsito. 
            Prefira rotas com ciclovias quando disponíveis.
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
  },
  routesContainer: {
    gap: 15,
    marginBottom: 20,
  },
  routeCard: {
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
  routeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  routeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  difficultyBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  difficultyText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  routeDistance: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E7D32',
    marginBottom: 8,
  },
  routeDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  viewRouteButton: {
    backgroundColor: '#2E7D32',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  viewRouteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  infoBox: {
    backgroundColor: '#E8F5E8',
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2E7D32',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});

export default RoutesScreen;

