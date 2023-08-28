import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ImageDetail = ({ title, image, score }) => {
  return (
    <View>
      <Image source={image}></Image>
      <Text style={styles.text}>{title}</Text>
      <Text style={score > 5 ? styles.scorePass : styles.scoreFail}>Score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },
  scorePass: {
    color: 'green',
  },
  scoreFail: {
    color: 'red',
  },
});

export default ImageDetail;
