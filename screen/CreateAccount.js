import { Text, StyleSheet, View } from 'react-native';

function CreateAccount({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello, soon I will be the Create Account page</Text>
    </View>
  );
}
export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
