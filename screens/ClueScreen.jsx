import React from 'react';
import { View, Text, FlatList } from 'react-native';
import useStore from '../store/store';

export default function ClueScreen() {
  const clues = useStore((state) => state.clues);
  console.log(clues)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Clues You've Found:
      </Text>
      {clues.length > 0 ? (
        <FlatList
          data={clues}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Text style={{ fontSize: 18 }}>{item}</Text>
          )}
        />
      ) : (
        <Text>No clues found yet. Keep exploring!</Text>
      )}
    </View>
  );
}
