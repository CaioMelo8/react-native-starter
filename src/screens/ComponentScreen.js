import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
  const name = 'Caio Melo';

  return (
    <View style={{ padding: 16 }}>
      <Text style={styles.title}>Getting started with React Native</Text>
      <Text style={styles.subtitle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 45 },
  subtitle: { fontSize: 20 },
});

export default ComponentScreen;
