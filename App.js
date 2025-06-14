import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import RoutesScreen from './src/screens/RoutesScreen';
import SafetyTipsScreen from './src/screens/SafetyTipsScreen';
import SupportPointsScreen from './src/screens/SupportPointsScreen';
import ProgressScreen from './src/screens/ProgressScreen';
import CommunityScreen from './src/screens/CommunityScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2E7D32',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'VaiDeBike Maringá',
            headerShown: false
          }} 
        />
        <Stack.Screen 
          name="Routes" 
          component={RoutesScreen} 
          options={{ title: 'Rotas para Ciclistas' }} 
        />
        <Stack.Screen 
          name="SafetyTips" 
          component={SafetyTipsScreen} 
          options={{ title: 'Dicas de Segurança' }} 
        />
        <Stack.Screen 
          name="SupportPoints" 
          component={SupportPointsScreen} 
          options={{ title: 'Pontos de Apoio' }} 
        />
        <Stack.Screen 
          name="Progress" 
          component={ProgressScreen} 
          options={{ title: 'Meu Progresso' }} 
        />
        <Stack.Screen 
          name="Community" 
          component={CommunityScreen} 
          options={{ title: 'Comunidade' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

