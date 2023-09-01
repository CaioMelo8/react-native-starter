import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ padding: 16 }}>
      <Text style={styles.text}>Hi there!</Text>
      <Button title="Go to Box" onPress={() => navigation.navigate('Box')} />
      <Button
        title="Go to Color"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go to Component"
        onPress={() => navigation.navigate('Component')}
      />
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Image"
        onPress={() => navigation.navigate('Image')}
      />
      <Button title="Go to List" onPress={() => navigation.navigate('List')} />
      <Button
        title="Go to Square"
        onPress={() => navigation.navigate('Square')}
      />
      <Button title="Go to Text" onPress={() => navigation.navigate('Text')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: { fontSize: 30 },
});

export default HomeScreen;
