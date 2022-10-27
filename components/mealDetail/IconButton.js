import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const IconButton = ({ onPress, icon, color }) => {
  return (
    <Pressable
      onPress={onPress}
      styles={({ pressed }) => pressed && pressed.styles}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
