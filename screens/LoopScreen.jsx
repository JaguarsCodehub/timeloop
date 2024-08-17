import React from 'react';
import { View, Text, Button } from 'react-native';
import useStore from '../store/store';

export default function LoopScreen({ navigation }) {
  const loopNumber = useStore((state) => state.loopNumber);
  const incrementLoop = useStore((state) => state.incrementLoop);

  const handleNextLoop = () => {
    incrementLoop(); // Increment the loop count

    if (loopNumber >= 3) {
      // After 3 loops, navigate to Loop2Screen
      navigation.navigate('Loop2');
    } else {
      // Continue to the next loop
      navigation.navigate('Loop');
    }

    console.log("Loop Number: ",loopNumber)
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Current Loop: {loopNumber}</Text>
      <Button title='Complete Loop' onPress={handleNextLoop} />
    </View>
  );
}
