import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoopScreen from './screens/LoopScreen';
import Loop2Screen from './screens/Loop2Screen';
import ClueScreen from './screens/ClueScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Loop' component={LoopScreen} />
        <Stack.Screen name='Loop2' component={Loop2Screen} />
        <Stack.Screen name='Clue' component={ClueScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
