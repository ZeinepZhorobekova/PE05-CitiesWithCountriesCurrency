import { Text, View, StyleSheet } from 'react-native'
import { colors } from '../theme'

const CenterMessage = ({ message }) => (
  <View style={styles.emptyContainer}>
    <Text style={styles.message}>{message}</Text>
  </View>
)

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4f8',
    borderRadius: 10,
    margin: 20,
  },
  message: {
    fontSize: 20,
    color: colors.primary,
    textAlign: 'center',
  }
})

export default CenterMessage
