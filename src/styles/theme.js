import { StyleSheet } from 'react-native';

// Cores principais do aplicativo
export const colors = {
  primary: '#2E7D32',
  primaryLight: '#4CAF50',
  primaryDark: '#1B5E20',
  secondary: '#FF9800',
  secondaryLight: '#FFB74D',
  secondaryDark: '#F57C00',
  background: '#f5f5f5',
  surface: '#ffffff',
  error: '#F44336',
  warning: '#FF9800',
  info: '#2196F3',
  success: '#4CAF50',
  text: '#333333',
  textSecondary: '#666666',
  textLight: '#999999',
  border: '#E0E0E0',
  shadow: '#000000',
};

// Espaçamentos padronizados
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Tamanhos de fonte
export const fontSize = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 20,
  title: 24,
  heading: 28,
};

// Raios de borda
export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  round: 50,
};

// Sombras
export const shadows = {
  small: {
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  medium: {
    elevation: 3,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  large: {
    elevation: 5,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
};

// Estilos globais
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    padding: spacing.md,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: fontSize.title,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: fontSize.lg,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    ...shadows.medium,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.surface,
    fontSize: fontSize.md,
    fontWeight: 'bold',
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  buttonSecondaryText: {
    color: colors.primary,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    fontSize: fontSize.md,
    backgroundColor: colors.surface,
  },
  inputFocused: {
    borderColor: colors.primary,
  },
  badge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.round,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: fontSize.xs,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  flex1: {
    flex: 1,
  },
  textCenter: {
    textAlign: 'center',
  },
  textBold: {
    fontWeight: 'bold',
  },
  textPrimary: {
    color: colors.primary,
  },
  textSecondary: {
    color: colors.textSecondary,
  },
  textError: {
    color: colors.error,
  },
  textSuccess: {
    color: colors.success,
  },
  marginBottom: {
    marginBottom: spacing.md,
  },
  marginTop: {
    marginTop: spacing.md,
  },
  paddingHorizontal: {
    paddingHorizontal: spacing.md,
  },
  paddingVertical: {
    paddingVertical: spacing.md,
  },
});

// Estilos específicos para componentes
export const componentStyles = {
  progressBar: {
    height: 8,
    backgroundColor: colors.border,
    borderRadius: borderRadius.sm,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: borderRadius.sm,
  },
  tab: {
    flex: 1,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    borderRadius: borderRadius.md,
  },
  activeTab: {
    backgroundColor: colors.primary,
  },
  tabText: {
    fontSize: fontSize.md,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  activeTabText: {
    color: colors.surface,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  avatarText: {
    color: colors.surface,
    fontSize: fontSize.lg,
    fontWeight: 'bold',
  },
  chip: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.round,
    marginRight: spacing.xs,
    marginBottom: spacing.xs,
  },
  chipText: {
    color: colors.surface,
    fontSize: fontSize.xs,
    fontWeight: '600',
  },
};

export default {
  colors,
  spacing,
  fontSize,
  borderRadius,
  shadows,
  globalStyles,
  componentStyles,
};

