import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CommunityScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('ranking');

  const rankingData = [
    { id: 1, name: 'Ana Silva', points: 2850, distance: 185.2, position: 1, avatar: '👩' },
    { id: 2, name: 'Carlos Santos', points: 2720, distance: 172.8, position: 2, avatar: '👨' },
    { id: 3, name: 'Maria Oliveira', points: 2650, distance: 168.5, position: 3, avatar: '👩' },
    { id: 4, name: 'João Pedro', points: 2480, distance: 155.3, position: 4, avatar: '👨' },
    { id: 5, name: 'Você', points: 2350, distance: 148.7, position: 5, avatar: '🚴', isCurrentUser: true },
    { id: 6, name: 'Lucia Costa', points: 2280, distance: 142.1, position: 6, avatar: '👩' },
    { id: 7, name: 'Roberto Lima', points: 2150, distance: 135.8, position: 7, avatar: '👨' },
    { id: 8, name: 'Fernanda Rocha', points: 2080, distance: 128.9, position: 8, avatar: '👩' },
  ];

  const challenges = [
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

  const rewards = [
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

  const getPositionIcon = (position) => {
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

  const getProgressPercentage = (progress, target) => {
    return Math.min((progress / target) * 100, 100);
  };

  const renderRanking = () => (
    <View style={styles.tabContent}>
      <Text style={styles.sectionTitle}>🏆 Ranking Mensal</Text>
      <View style={styles.rankingContainer}>
        {rankingData.map((user) => (
          <View 
            key={user.id} 
            style={[
              styles.rankingItem,
              user.isCurrentUser && styles.currentUserItem
            ]}
          >
            <View style={styles.rankingPosition}>
              <Text style={styles.positionText}>
                {getPositionIcon(user.position)}
              </Text>
            </View>
            <Text style={styles.userAvatar}>{user.avatar}</Text>
            <View style={styles.userInfo}>
              <Text style={[
                styles.userName,
                user.isCurrentUser && styles.currentUserName
              ]}>
                {user.name}
              </Text>
              <Text style={styles.userStats}>
                {user.points} pts • {user.distance.toFixed(1)} km
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  const renderChallenges = () => (
    <View style={styles.tabContent}>
      <Text style={styles.sectionTitle}>🎯 Desafios Ativos</Text>
      <View style={styles.challengesContainer}>
        {challenges.map((challenge) => (
          <View key={challenge.id} style={styles.challengeCard}>
            <View style={styles.challengeHeader}>
              <Text style={styles.challengeTitle}>{challenge.title}</Text>
              <Text style={styles.challengeDays}>{challenge.daysLeft} dias</Text>
            </View>
            <Text style={styles.challengeDescription}>{challenge.description}</Text>
            
            <View style={styles.challengeProgress}>
              <View style={styles.progressInfo}>
                <Text style={styles.progressText}>
                  {typeof challenge.progress === 'number' && challenge.progress % 1 !== 0 
                    ? challenge.progress.toFixed(1) 
                    : challenge.progress} / {challenge.target}
                </Text>
                <Text style={styles.progressPercentage}>
                  {getProgressPercentage(challenge.progress, challenge.target).toFixed(0)}%
                </Text>
              </View>
              <View style={styles.progressBar}>
                <View 
                  style={[
                    styles.progressFill, 
                    { width: `${getProgressPercentage(challenge.progress, challenge.target)}%` }
                  ]} 
                />
              </View>
            </View>

            <View style={styles.challengeFooter}>
              <Text style={styles.challengeReward}>{challenge.reward}</Text>
              <Text style={styles.challengeParticipants}>
                {challenge.participants} participantes
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  const renderRewards = () => (
    <View style={styles.tabContent}>
      <Text style={styles.sectionTitle}>🎁 Recompensas</Text>
      <Text style={styles.userPoints}>Seus pontos: 2.350 ⭐</Text>
      
      <View style={styles.rewardsContainer}>
        {rewards.map((reward) => (
          <View key={reward.id} style={styles.rewardCard}>
            <View style={styles.rewardHeader}>
              <Text style={styles.rewardTitle}>{reward.title}</Text>
              <View style={[
                styles.categoryBadge,
                !reward.available && styles.categoryBadgeUnavailable
              ]}>
                <Text style={[
                  styles.categoryText,
                  !reward.available && styles.categoryTextUnavailable
                ]}>
                  {reward.category}
                </Text>
              </View>
            </View>
            
            <Text style={styles.rewardDescription}>{reward.description}</Text>
            
            <View style={styles.rewardFooter}>
              <Text style={styles.rewardPoints}>{reward.points} pontos</Text>
              <TouchableOpacity 
                style={[
                  styles.redeemButton,
                  !reward.available && styles.redeemButtonDisabled
                ]}
                disabled={!reward.available}
              >
                <Text style={[
                  styles.redeemButtonText,
                  !reward.available && styles.redeemButtonTextDisabled
                ]}>
                  {reward.available ? 'Resgatar' : 'Indisponível'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Comunidade</Text>
        <Text style={styles.subtitle}>Conecte-se e compete com outros ciclistas</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'ranking' && styles.activeTab]}
          onPress={() => setSelectedTab('ranking')}
        >
          <Text style={[styles.tabText, selectedTab === 'ranking' && styles.activeTabText]}>
            Ranking
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'challenges' && styles.activeTab]}
          onPress={() => setSelectedTab('challenges')}
        >
          <Text style={[styles.tabText, selectedTab === 'challenges' && styles.activeTabText]}>
            Desafios
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'rewards' && styles.activeTab]}
          onPress={() => setSelectedTab('rewards')}
        >
          <Text style={[styles.tabText, selectedTab === 'rewards' && styles.activeTabText]}>
            Recompensas
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        {selectedTab === 'ranking' && renderRanking()}
        {selectedTab === 'challenges' && renderChallenges()}
        {selectedTab === 'rewards' && renderRewards()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 10,
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
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 4,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#2E7D32',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  activeTabText: {
    color: '#fff',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  tabContent: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  userPoints: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 20,
    textAlign: 'center',
  },
  // Ranking Styles
  rankingContainer: {
    gap: 10,
  },
  rankingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  currentUserItem: {
    borderWidth: 2,
    borderColor: '#2E7D32',
    backgroundColor: '#E8F5E8',
  },
  rankingPosition: {
    width: 40,
    alignItems: 'center',
  },
  positionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userAvatar: {
    fontSize: 24,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  currentUserName: {
    color: '#2E7D32',
  },
  userStats: {
    fontSize: 14,
    color: '#666',
  },
  // Challenges Styles
  challengesContainer: {
    gap: 15,
  },
  challengeCard: {
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
  challengeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  challengeDays: {
    fontSize: 14,
    color: '#FF9800',
    fontWeight: '600',
  },
  challengeDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  challengeProgress: {
    marginBottom: 15,
  },
  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  progressPercentage: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2E7D32',
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
  challengeFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  challengeReward: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2E7D32',
  },
  challengeParticipants: {
    fontSize: 12,
    color: '#666',
  },
  // Rewards Styles
  rewardsContainer: {
    gap: 15,
  },
  rewardCard: {
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
  rewardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  rewardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  categoryBadge: {
    backgroundColor: '#E8F5E8',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryBadgeUnavailable: {
    backgroundColor: '#F5F5F5',
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2E7D32',
  },
  categoryTextUnavailable: {
    color: '#999',
  },
  rewardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  rewardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rewardPoints: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF9800',
  },
  redeemButton: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
  },
  redeemButtonDisabled: {
    backgroundColor: '#E0E0E0',
  },
  redeemButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  redeemButtonTextDisabled: {
    color: '#999',
  },
});

export default CommunityScreen;

