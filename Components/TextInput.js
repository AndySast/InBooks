import { View, TextInput, StyleSheet } from 'react-native';

function TextInputs({ placeholder, password, height }) {
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
    borderBottomWidth: 3,
    borderBottomColor: '#9A9483',
    width: '100%',
    height: 55,
    color: '#AAA492',
    fontFamily: 'Inter_300Light',
    fontSize: 30,
  },
});
