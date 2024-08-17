import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import useStore from '../store/store';

export default function Loop2Screen({ navigation }) {
  const clues = useStore((state) => state.clues);
  const addClue = useStore((state) => state.addClue);
  const hasClue = useStore((state) => state.hasClue);

  useEffect(() => {
    // Check if the clue has already been found
    if (!hasClue('Key Found')) {
      // Simulate the player finding a clue (e.g., by interacting with a library shelf)
      addClue('Key Found');
      // Navigate to the ClueScreen to show the new clue
      navigation.navigate('Clue');
    }
  }, [clues, addClue, hasClue, navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Day 2: The Clue</Text>
      <Text>You found a key in the library.</Text>
      <Button title='Continue' onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
