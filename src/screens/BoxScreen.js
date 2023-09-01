import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View>
      <View style={styles.view}>
        <View style={[styles.box, styles.box1]}></View>
        <View style={[styles.box, styles.box2]}></View>
        <View style={[styles.box, styles.box3]}></View>
        <View style={[styles.box, styles.box4]}></View>
        <View style={[styles.box, styles.box5]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  box: {
    height: 50,
    width: 50,
    borderWidth: 2,
  },
  box1: {
    backgroundColor: 'rgba(255, 0, 0, 0.4)',
    borderColor: 'rgb(255, 0, 0)',
  },
  box2: {
    backgroundColor: 'rgba(0, 255, 0, 0.4)',
    borderColor: 'rgb(0, 255, 0)',
    marginTop: 48,
  },
  box3: {
    backgroundColor: 'rgba(0, 255, 0, 0.4)',
    borderColor: 'rgb(0, 255, 0)',
    top: 48,
  },
  box4: {
    backgroundColor: 'rgba(0, 255, 0, 0.4)',
    borderColor: 'rgb(0, 255, 0)',
    alignSelf: 'flex-end',
  },
  box5: {
    backgroundColor: 'rgba(0, 0, 255, 0.4)',
    borderColor: 'rgb(0, 0, 255)',
  },
});

export default BoxScreen;
