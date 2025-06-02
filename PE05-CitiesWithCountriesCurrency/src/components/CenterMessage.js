import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../theme';

const CenterMessage = ({
  message,
  icon = null,
  fontSize = 20,
  textColor = colors.primary,
  backgroundColor = '#f0f4f8'
}) => (
  <View style={[styles.emptyContainer, { backgroundColor }]}>
    {icon && <View style={styles.icon}>{icon}</View>}
    <Text style={[styles.message, { fontSize, color: textColor }]}>
      {message}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  message: {
    textAlign: 'center',
    marginTop: 10,
  },
  icon: {
    marginBottom: 10,
  }
});

export default CenterMessage;
