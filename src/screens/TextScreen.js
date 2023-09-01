import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');

  return (
    <View style={styles.view}>
      <Text style={styles.label}>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize={'none'}
        autoCorrect={false}
        textContentType={'password'}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      {password.length < 5 && (
        <Text style={styles.text}>
          Password must be longer than 5 characters.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginVertical: 8,
  },
  text: {
    color: 'red',
    fontSize: 12,
  },
});

export default TextScreen;
