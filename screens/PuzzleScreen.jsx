import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import useStore from '../store/store';

export default function PuzzleScreen({ navigation }) {
  const [input, setInput] = useState('');
  const correctCode = '1234';
  const [solved, setSolved] = useState(false);

  const handleSubmit = () => {
    if (input === correctCode) {
      setSolved(true);
    } else {
      alert('Wrong code! Try again.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Puzzle: Enter the correct code to proceed.</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20,
        }}
        onChangeText={setInput}
        value={input}
        placeholder='Enter code'
      />
      <Button title='Submit' onPress={handleSubmit} />
      {solved && (
        <View>
          <Text>Code Correct! You’ve unlocked a new path.</Text>
          <Button
            title='Continue'
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      )}
    </View>
  );
}
