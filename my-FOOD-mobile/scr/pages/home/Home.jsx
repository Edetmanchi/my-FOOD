

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Cart from './Cart';
import Notification from './Notification';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Notification" component={Notification} />

      </Tab.Navigator>
    // </NavigationContainer>
  );
}