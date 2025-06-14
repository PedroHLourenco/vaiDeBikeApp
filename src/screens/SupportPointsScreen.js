import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SupportPointsScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', icon: '📍' },
    { id: 'water', name: 'Bebedouros', icon: '💧' },
    { id: 'pump', name: 'Bombas de Ar', icon: '🚲' },
    { id: 'bathroom', name: 'Banheiros', icon: '🚻' },
    { id: 'parking', name: 'Bicicletários', icon: '🅿️' }
  ];

  const supportPoints = [
    {
      id: 1,
      name: 'Parque do Ingá',
      address: 'Av. Euclides da Cunha, s/n',
      category: 'water',
      services: ['Bebedouro', 'Banheiro', 'Bicicletário'],
      hours: '06:00 - 22:00',
      distance: '1.2 km'
    },
    {
      id: 2,
      name: 'Terminal Rodoviário',
      address: 'Av. Tuiuti, 1500',
      category: 'parking',
      services: ['Bicicletário', 'Banheiro'],
      hours: '24 horas',
      distance: '2.8 km'
    },
    {
      id: 3,
      name: 'Posto Shell - Centro',
      address: 'Av. Brasil, 1234',
      category: 'pump',
      services: ['Bomba de Ar', 'Bebedouro'],
      hours: '06:00 - 22:00',
      distance: '0.5 km'
    },
    {
      id: 4,
      name: 'UEM - Campus Principal',
      address: 'Av. Colombo, 5790',
      category: 'parking',
      services: ['Bicicletário', 'Bebedouro', 'Banheiro'],
      hours: '06:00 - 22:00',
      distance: '4.2 km'
    },
    {
      id: 5,
      name: 'Praça da Catedral',
      address: 'Av. Tiradentes, Centro',
      category: 'water',
      services: ['Bebedouro', 'Banheiro'],
      hours: '24 horas',
      distance: '1.8 km'
    },
    {
      id: 6,
      name: 'Bike Shop Maringá',
      address: 'Rua Pioneiro João Domingos, 456',
      category: 'pump',
      services: ['Bomba de Ar', 'Manutenção'],
      hours: '08:00 - 18:00',
      distance: '3.1 km'
    }
  ];

  const getServiceIcon = (service) => {
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

  const filteredPoints = selectedCategory === 'all' 
    ? supportPoints 
    : supportPoints.filter(point => point.category === selectedCategory);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Pontos de Apoio</Text>
          <Text style={styles.subtitle}>Encontre suporte para sua jornada</Text>
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
          contentContainerStyle={styles.categoriesContent}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryButton,
                selectedCategory === category.id && styles.categoryButtonActive
              ]}
              onPress={() => setSelectedCategory(category.id)}
            >
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text style={[
                styles.categoryText,
                selectedCategory === category.id && styles.categoryTextActive
              ]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.pointsContainer}>
          {filteredPoints.map((point) => (
            <View key={point.id} style={styles.pointCard}>
              <View style={styles.pointHeader}>
                <Text style={styles.pointName}>{point.name}</Text>
                <Text style={styles.pointDistance}>{point.distance}</Text>
              </View>
              
              <Text style={styles.pointAddress}>{point.address}</Text>
              
              <View style={styles.servicesContainer}>
                {point.services.map((service, index) => (
                  <View key={index} style={styles.serviceItem}>
                    <Text style={styles.serviceIcon}>{getServiceIcon(service)}</Text>
                    <Text style={styles.serviceText}>{service}</Text>
                  </View>
                ))}
              </View>
              
              <View style={styles.pointFooter}>
                <Text style={styles.pointHours}>⏰ {point.hours}</Text>
                <TouchableOpacity style={styles.directionsButton}>
                  <Text style={styles.directionsButtonText}>Como Chegar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>💡 Contribua</Text>
          <Text style={styles.infoText}>
            Conhece um ponto de apoio que não está listado? Entre em contato conosco 
            para incluí-lo no mapa e ajudar outros ciclistas!
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
  categoriesContainer: {
    marginBottom: 20,
  },
  categoriesContent: {
    paddingHorizontal: 5,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  categoryButtonActive: {
    backgroundColor: '#2E7D32',
    borderColor: '#2E7D32',
  },
  categoryIcon: {
    fontSize: 16,
    marginRight: 5,
  },
  categoryText: {
    fontSize: 14,
    color: '#666',
  },
  categoryTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  pointsContainer: {
    gap: 15,
    marginBottom: 20,
  },
  pointCard: {
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
  pointHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  pointName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  pointDistance: {
    fontSize: 14,
    color: '#2E7D32',
    fontWeight: '600',
  },
  pointAddress: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 15,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E8',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  serviceIcon: {
    fontSize: 14,
    marginRight: 5,
  },
  serviceText: {
    fontSize: 12,
    color: '#2E7D32',
    fontWeight: '600',
  },
  pointFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pointHours: {
    fontSize: 14,
    color: '#666',
  },
  directionsButton: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 6,
  },
  directionsButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoBox: {
    backgroundColor: '#E3F2FD',
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});

export default SupportPointsScreen;

