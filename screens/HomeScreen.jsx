import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to The Infinite Dusk</Text>
      <Button title='Start' onPress={() => navigation.navigate('Loop')} />
      <Button title='View Clues' onPress={() => navigation.navigate('Clue')} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center' 
    },
    image: {}
})