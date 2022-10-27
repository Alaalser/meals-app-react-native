import { StyleSheet, FlatList, View } from 'react-native';
import MealsItem from '../MealsItem';
import { useNavigation } from '@react-navigation/native';

const MealsList = ({ displayedMeals }) => {
  const navigation = useNavigation();

  const renderMealItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate('MealDetailsScreen', {
        mealId: item.id,
      });
    };

    return (
      <MealsItem
        id={item.id}
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        onPress={pressHandler}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
