import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from './src/screens/Login';

import {
  useFonts,
  Raleway_400Regular,
  Raleway_600SemiBold,
  Raleway_700Bold
} from '@expo-google-fonts/raleway'
import { Register } from './src/screens/Register';


const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_600SemiBold,
    Raleway_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="register"
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;