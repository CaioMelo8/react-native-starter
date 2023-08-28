import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.view}>
      <Button title='Increase' onPress={() => setCounter(counter + 1)} />
      <Button title='Decrease' onPress={() => setCounter(counter - 1)} />

      <Text style={styles.textCounter}>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 16,
  },
  textCounter: {
    fontSize: 24,
  },
});

export default CounterScreen;
