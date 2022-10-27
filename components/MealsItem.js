import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const MealsItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#cccccc' }}
        style={({ pressed }) => (pressed ? styles.pressedButton : null)}
        onPress={onPress}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}m</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealsItem;

const styles = StyleSheet.create({
  mealItem: {
    overflow: 'hidden',
    margin: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  pressedButton: {
    opacity: 0.5,
  },
});
