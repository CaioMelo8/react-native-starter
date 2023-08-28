import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
  const characters = [
    { name: 'Leon S Kennedy', age: 35 },
    { name: 'Ada Wong', age: 30 },
    { name: 'Claire Redfield', age: 34 },
    { name: 'Chris Redfield', age: 32 },
    { name: 'Jill Valentine', age: 33 },
    { name: 'Rebecca Chambers', age: 24 },
    { name: 'Barry Burton', age: 47 },
    { name: 'Albert Wesker', age: 42 },
    { name: 'Sherry Birkin', age: 20 },
    { name: 'Steve Burnside', age: 38 },
    { name: 'Jake Muller', age: 23 },
    { name: 'Helena Harper', age: 26 },
    { name: 'Kurtis Stryker', age: 29 },
  ];

  return (
    <View style={{ padding: 16 }}>
      <FlatList
        data={characters}
        keyExtractor={character => character.name}
        renderItem={({ item }) => <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 16,
  },
});

export default ListScreen;
