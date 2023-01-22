import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({ title, color, navigation, target }) => {
  return (
    <Pressable
      style={[styles.button, { backgroundColor: color }]}
      onPress={() => navigation.navigate(target)}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    elevation: 3,
    backgroundColor: 'black',
    marginBottom: 10,
    borderRadius: 20,
    width: 200,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default CustomButton;
