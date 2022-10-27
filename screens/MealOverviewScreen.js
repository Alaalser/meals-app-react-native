import { View, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummyData';
import MealsItem from '../components/MealsItem';
import { useLayoutEffect } from 'react';

function MealOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === categoryId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryId]);

  function renderMealItem({ item }) {
    function pressHandler() {
      navigation.navigate('MealDetailsScreen', {
        mealId: item.id,
      });
    }

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
  }

  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
