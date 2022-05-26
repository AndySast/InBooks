import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import * as Animatable from 'react-native-animatable';
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
import { ease, linear } from 'react-native/Libraries/Animated/Easing';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <Animatable.Image animation="zoomIn" duration={700} source={require('./assets/Logos/LogoW.png')} style={styles.logo} />
      <Animatable.Text animation="zoomIn" delay={700} duration={700} style={styles.text}>
        IN{'\n'}BOOKS
      </Animatable.Text>
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
    fontFamily: 'Inter_700Bold',
    fontSize: 100,
    color: '#9A9483',
  },
  logo: {
    width: 280,
    height: 225,
    marginBottom: 150,
  },
  newtext: {
    textAlign: 'center',
    fontFamily: 'Inter_700Bold',
    fontSize: 80,
    color: '#9A9483',
  },
});
