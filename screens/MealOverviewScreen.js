import { CATEGORIES, MEALS } from '../data/dummyData';
import MealsList from '../components/mealsList/MealsList';
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

  return <MealsList displayedMeals={displayedMeals} />;
}

export default MealOverviewScreen;
