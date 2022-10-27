import React from 'react';
import { View, Pressable, Text, StyleSheet, Platform } from 'react-native';

function CategoriesGridTile({ title, color, onPress }) {
  return (
    <View style={styles.getItem}>
      <Pressable
        android_ripple={{ color: '#cccccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressedButton : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoriesGridTile;

const styles = StyleSheet.create({
  getItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  pressedButton: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,

    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
