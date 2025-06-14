import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
  const menuItems = [
    {
      title: 'Rotas para Ciclistas',
      description: 'Encontre as melhores rotas e ciclovias',
      screen: 'Routes'
    },
    {
      title: 'Dicas de Segurança',
      description: 'Aprenda sobre segurança no trânsito',
      screen: 'SafetyTips'
    },
    {
      title: 'Pontos de Apoio',
      description: 'Localize bebedouros, bicicletários e mais',
      screen: 'SupportPoints'
    },
    {
      title: 'Meu Progresso',
      description: 'Acompanhe sua evolução',
      screen: 'Progress'
    },
    {
      title: 'Comunidade',
      description: 'Rankings, desafios e recompensas',
      screen: 'Community'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>VaiDeBike Maringá</Text>
          <Text style={styles.subtitle}>Mobilidade sustentável para todos</Text>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuDescription}>{item.description}</Text>
            </TouchableOpacity>
          ))}
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
    marginBottom: 30,
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  menuContainer: {
    gap: 15,
  },
  menuItem: {
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
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 5,
  },
  menuDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;

