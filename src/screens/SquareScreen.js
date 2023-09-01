import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {
  let color;
  let value;

  switch (action.type) {
    case 'update_red':
      color = 'red';
      break;
    case 'update_green':
      color = 'green';
      break;
    case 'update_blue':
      color = 'blue';
      break;
    default:
      color = null;
      break;
  }

  if (color) {
    value = state[color] + action.payload;

    return { ...state, [color]: Math.max(0, Math.min(255, value)) };
  } else {
    return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View style={styles.container}>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatch({ type: 'update_red', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'update_red', payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ type: 'update_green', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'update_green', payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ type: 'update_blue', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'update_blue', payload: -1 * COLOR_INCREMENT })
        }
      />

      <View
        style={{
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
          width: 100,
          height: 100,
          marginVertical: 8,
        }}
      ></View>

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
