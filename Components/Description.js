import { View, Text, StyleSheet } from 'react-native';
function Description({ text }) {
  return (
    <View style={styles.Description}>
      <Text style={styles.Descriptiontext}>{text}</Text>
    </View>
  );
}

export default Description;

const styles = StyleSheet.create({
  Description: {
    width: '100%',
    height: '100%',
  },
  Descriptiontext: {
    fontFamily: 'Inter_300Light',
    fontSize: 30,
    color: '#9A9483',
  },
});
