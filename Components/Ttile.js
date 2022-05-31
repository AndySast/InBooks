import { View, Text, StyleSheet } from 'react-native';
function Title({ content }) {
  return (
    <View style={styles.title}>
      <Text style={styles.titletext}>{content}</Text>
    </View>
  );
}
export default Title;

const styles = StyleSheet.create({
  title: {
    flex: 1,
    alignItems: 'center',
  },
  titletext: {
    fontSize: 60,
    fontFamily: 'Inter_500Medium',
    color: '#9A9483',
  },
});
