import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
export default function App() {
  let { fontsLoaded } = useFonts({
    Thin: Inter_100Thin,
    ExtraLight: Inter_200ExtraLight,
    Light: Inter_300Light,
    Regular: Inter_400Regular,
    Medium: Inter_500Medium,
    SemiBold: Inter_600SemiBold,
    Bold: Inter_700Bold,
    ExtraBold: Inter_800ExtraBold,
    Black: Inter_900Black,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>IN BOOKS</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5DCC3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Bold',
    fontSize: 130,
    color: '#9A9483',
  },
});
