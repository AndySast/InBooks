import { View, Text, StyleSheet } from 'react-native';

function SettingsUser() {
  return (
    <View style={styles.container}>
      <Text>SettingsUser</Text>
    </View>
  );
}

export default SettingsUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
