import { StyleSheet } from 'react-native';
import { createContext, useState } from 'react';

export const FavoriteContext = createContext({
  ids: [],
  add: (id) => {},
  remove: (id) => {},
});

const FavoriteContextProvider = ({ children }) => {
  const [favIds, setFavIds] = useState([]);

  const add = (id) => {
    setFavIds((currentIds) => [...currentIds, id]);
  };

  const remove = (id) => {
    setFavIds((currentIds) => currentIds.filter((mealId) => mealId !== id));
  };

  const value = { ids: favIds, add, remove };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;

const styles = StyleSheet.create({});
