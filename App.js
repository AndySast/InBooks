import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Updating from './screen/updating';
import Login from './screen/Login';
import CreateAccount from './screen/CreateAccount';
import InitConfig from './screen/InitConfig';
import MyBooks from './screen/MyBooks';
import Book from './screen/SBook';
import MyWishes from './screen/MyWishes';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Updating} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false }} />
        <Stack.Screen name="InitConfig" component={InitConfig} options={{ headerShown: false }} />
        <Stack.Screen name="MyBooks" component={MyBooks} options={{ headerShown: false }} />
        <Stack.Screen name="Book" component={Book} options={{ headerShown: false }} />
        <Stack.Screen name="MyWishes" component={MyWishes} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
