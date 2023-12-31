import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View style={styles.container}>
      <Button
        title="Add a Color"
        onPress={() => setColors([...colors, randomRGB()])}
      />
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View
            style={{ height: 100, width: 100, backgroundColor: item }}
          ></View>
        )}
      ></FlatList>
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default ColorScreen;
