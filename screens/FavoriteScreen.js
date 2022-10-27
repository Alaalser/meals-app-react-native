import { StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummyData';
import { FavoriteContext } from '../store/context/FavoriteContextProvider';
import { useContext } from 'react';
import MealsList from '../components/mealsList/MealsList';
const FavoriteScreen = () => {
  const favoriteIds = useContext(FavoriteContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteIds.ids.includes(meal.id)
  );

  return <MealsList displayedMeals={favoriteMeals} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
