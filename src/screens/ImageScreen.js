import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View style={{ padding: 16 }}>
      <ImageDetail title='Forest' image={require('../../assets/imgs/forest.jpg')} score='10' />
      <ImageDetail title='Beach' image={require('../../assets/imgs/beach.jpg')} score='4' />
      <ImageDetail title='Mountain' image={require('../../assets/imgs/mountain.jpg')} score='6' />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
