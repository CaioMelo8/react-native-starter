import React, { useReducer } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'update_counter':
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View style={styles.view}>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: 'update_counter', payload: 1 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: 'update_counter', payload: -1 })}
      />

      <Text style={styles.counter}>Current Count: {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: { padding: 16 },
  counter: { fontSize: 24 },
});

export default CounterScreen;
