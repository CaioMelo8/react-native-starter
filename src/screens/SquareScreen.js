import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {
  let color;

  switch (action.color) {
    case 'red':
    case 'green':
    case 'blue':
      color = action.color;
      break;
    default:
      color = null;
  }

  if (color) {
    return { ...state, [color]: state[color] + action.value };
  } else {
    return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View style={styles.container}>
      <ColorCounter
        onIncrease={() => dispatch({ color: 'red', value: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ color: 'red', value: -1 * COLOR_INCREMENT })}
        color='Red'
      />
      <ColorCounter
        color='Green'
        onIncrease={() => dispatch({ color: 'green', value: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ color: 'green', value: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color='Blue'
        onIncrease={() => dispatch({ color: 'blue', value: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ color: 'blue', value: -1 * COLOR_INCREMENT })}
      />

      <View
        style={{
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
          width: 100,
          height: 100,
          marginVertical: 8,
        }}></View>

      <View style={{ marginVertical: 8 }}>
        <Text>
          Red: {state.red}, Green: {state.green}, Blue: {state.blue}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default SquareScreen;
