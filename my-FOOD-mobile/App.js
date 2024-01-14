import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Preview from './scr/onboarding-screen/Preview';
import Home from './scr/pages/home/Home';
// import  {Preview} from './scr/index'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="onboardingScreen" component={Preview} />
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


