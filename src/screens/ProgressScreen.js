import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProgressScreen = ({ navigation }) => {
  const [progressData, setProgressData] = useState({
    totalDistance: 0,
    totalTime: 0,
    totalTrips: 0,
    caloriesBurned: 0,
    co2Saved: 0,
    currentStreak: 0,
    longestStreak: 0,
    weeklyGoal: 50, // km
    monthlyGoal: 200, // km
  });

  const [weeklyProgress, setWeeklyProgress] = useState([
    { day: 'Seg', distance: 8.5, completed: true },
    { day: 'Ter', distance: 12.3, completed: true },
    { day: 'Qua', distance: 5.2, completed: true },
    { day: 'Qui', distance: 0, completed: false },
    { day: 'Sex', distance: 0, completed: false },
    { day: 'Sáb', distance: 0, completed: false },
    { day: 'Dom', distance: 0, completed: false },
  ]);

  const [achievements, setAchievements] = useState([
    { id: 1, title: 'Primeiro Pedal', description: 'Complete sua primeira viagem', unlocked: true, icon: '🚴' },
    { id: 2, title: 'Explorador', description: 'Use 3 rotas diferentes', unlocked: true, icon: '🗺️' },
    { id: 3, title: 'Eco Warrior', description: 'Economize 10kg de CO2', unlocked: true, icon: '🌱' },
    { id: 4, title: 'Maratonista', description: 'Pedale 100km em um mês', unlocked: false, icon: '🏃' },
    { id: 5, title: 'Consistente', description: 'Mantenha uma sequência de 7 dias', unlocked: false, icon: '📅' },
    { id: 6, title: 'Campeão', description: 'Alcance o top 10 do ranking', unlocked: false, icon: '🏆' },
  ]);

  useEffect(() => {
    loadProgressData();
  }, []);

  const loadProgressData = async () => {
    try {
      const savedData = await AsyncStorage.getItem('progressData');
      if (savedData) {
        setProgressData(JSON.parse(savedData));
      } else {
        // Dados iniciais simulados
        const initialData = {
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
        setProgressData(initialData);
        await AsyncStorage.setItem('progressData', JSON.stringify(initialData));
      }
    } catch (error) {
      console.error('Erro ao carregar dados de progresso:', error);
    }
  };

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const getWeeklyDistance = () => {
    return weeklyProgress.reduce((total, day) => total + day.distance, 0);
  };

  const getWeeklyProgressPercentage = () => {
    return Math.min((getWeeklyDistance() / progressData.weeklyGoal) * 100, 100);
  };

  const getMonthlyProgressPercentage = () => {
    return Math.min((progressData.totalDistance / progressData.monthlyGoal) * 100, 100);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Meu Progresso</Text>
          <Text style={styles.subtitle}>Acompanhe sua evolução</Text>
        </View>

        {/* Estatísticas Principais */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{progressData.totalDistance.toFixed(1)}</Text>
            <Text style={styles.statLabel}>km percorridos</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{progressData.totalTrips}</Text>
            <Text style={styles.statLabel}>viagens</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{formatTime(progressData.totalTime)}</Text>
            <Text style={styles.statLabel}>tempo total</Text>
          </View>
        </View>

        {/* Metas */}
        <View style={styles.goalsContainer}>
          <Text style={styles.sectionTitle}>🎯 Metas</Text>
          
          <View style={styles.goalCard}>
            <View style={styles.goalHeader}>
              <Text style={styles.goalTitle}>Meta Semanal</Text>
              <Text style={styles.goalProgress}>
                {getWeeklyDistance().toFixed(1)} / {progressData.weeklyGoal} km
              </Text>
            </View>
            <View style={styles.progressBar}>
              <View 
                style={[styles.progressFill, { width: `${getWeeklyProgressPercentage()}%` }]} 
              />
            </View>
          </View>

          <View style={styles.goalCard}>
            <View style={styles.goalHeader}>
              <Text style={styles.goalTitle}>Meta Mensal</Text>
              <Text style={styles.goalProgress}>
                {progressData.totalDistance.toFixed(1)} / {progressData.monthlyGoal} km
              </Text>
            </View>
            <View style={styles.progressBar}>
              <View 
                style={[styles.progressFill, { width: `${getMonthlyProgressPercentage()}%` }]} 
              />
            </View>
          </View>
        </View>

        {/* Progresso Semanal */}
        <View style={styles.weeklyContainer}>
          <Text style={styles.sectionTitle}>📅 Esta Semana</Text>
          <View style={styles.weeklyChart}>
            {weeklyProgress.map((day, index) => (
              <View key={index} style={styles.dayColumn}>
                <View style={[
                  styles.dayBar,
                  { height: Math.max(day.distance * 4, 4) },
                  day.completed && styles.dayBarCompleted
                ]} />
                <Text style={styles.dayDistance}>{day.distance > 0 ? day.distance.toFixed(1) : '-'}</Text>
                <Text style={styles.dayLabel}>{day.day}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Impacto Ambiental */}
        <View style={styles.impactContainer}>
          <Text style={styles.sectionTitle}>🌱 Impacto Ambiental</Text>
          <View style={styles.impactStats}>
            <View style={styles.impactCard}>
              <Text style={styles.impactValue}>{progressData.co2Saved.toFixed(1)} kg</Text>
              <Text style={styles.impactLabel}>CO2 economizado</Text>
            </View>
            <View style={styles.impactCard}>
              <Text style={styles.impactValue}>{progressData.caloriesBurned}</Text>
              <Text style={styles.impactLabel}>calorias queimadas</Text>
            </View>
          </View>
        </View>

        {/* Conquistas */}
        <View style={styles.achievementsContainer}>
          <Text style={styles.sectionTitle}>🏆 Conquistas</Text>
          <View style={styles.achievementsList}>
            {achievements.map((achievement) => (
              <View 
                key={achievement.id} 
                style={[
                  styles.achievementCard,
                  !achievement.unlocked && styles.achievementCardLocked
                ]}
              >
                <Text style={styles.achievementIcon}>{achievement.icon}</Text>
                <View style={styles.achievementInfo}>
                  <Text style={[
                    styles.achievementTitle,
                    !achievement.unlocked && styles.achievementTitleLocked
                  ]}>
                    {achievement.title}
                  </Text>
                  <Text style={[
                    styles.achievementDescription,
                    !achievement.unlocked && styles.achievementDescriptionLocked
                  ]}>
                    {achievement.description}
                  </Text>
                </View>
                {achievement.unlocked && (
                  <Text style={styles.achievementCheck}>✅</Text>
                )}
              </View>
            ))}
          </View>
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
  statsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 25,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  goalsContainer: {
    marginBottom: 25,
  },
  goalCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  goalProgress: {
    fontSize: 14,
    color: '#2E7D32',
    fontWeight: '600',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2E7D32',
    borderRadius: 4,
  },
  weeklyContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  weeklyChart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 120,
  },
  dayColumn: {
    alignItems: 'center',
    flex: 1,
  },
  dayBar: {
    width: 20,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    marginBottom: 8,
  },
  dayBarCompleted: {
    backgroundColor: '#2E7D32',
  },
  dayDistance: {
    fontSize: 10,
    color: '#666',
    marginBottom: 4,
  },
  dayLabel: {
    fontSize: 12,
    color: '#333',
    fontWeight: '600',
  },
  impactContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  impactStats: {
    flexDirection: 'row',
    gap: 15,
  },
  impactCard: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#E8F5E8',
    borderRadius: 8,
  },
  impactValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 5,
  },
  impactLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  achievementsContainer: {
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
  achievementsList: {
    gap: 12,
  },
  achievementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
  },
  achievementCardLocked: {
    opacity: 0.5,
  },
  achievementIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  achievementTitleLocked: {
    color: '#999',
  },
  achievementDescription: {
    fontSize: 14,
    color: '#666',
  },
  achievementDescriptionLocked: {
    color: '#999',
  },
  achievementCheck: {
    fontSize: 20,
  },
});

export default ProgressScreen;

