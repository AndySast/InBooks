import { Card } from 'react-native-shadow-cards';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
function Btton({ text, rut }) {
  return (
    <TouchableOpacity onPress={rut}>
      <Card style={styles.card}>
        <View style={styles.button}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

export default Btton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 220,
    height: 55,
    backgroundColor: '#9A9483',
    borderRadius: 50,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 220,
    height: 55,
    borderRadius: 50,
  },
  text: {
    fontFamily: 'Inter_700Bold',
    fontSize: 40,
    color: '#E5DCC3',
  },
});
