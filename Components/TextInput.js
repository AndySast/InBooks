import { View, TextInput, StyleSheet } from 'react-native';

function TextInputs({ placeholder, password }) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={placeholder} secureTextEntry={password ? true : false} />
    </View>
  );
}

export default TextInputs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 400,
    height: 66,
    color: '#AAA492',
    fontFamily: 'Inter_300Light',
    fontSize: 40,
  },
});
