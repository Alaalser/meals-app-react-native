import { CATEGORIES } from '../data/dummyData';
import { FlatList } from 'react-native';
import CategoriesGridTile from '../components/CategoriesGridTile';

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealOverviewScreen', {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoriesGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}

// import { CATEGORIES } from '../data/dummyData';
// import { FlatList } from 'react-native';
// import CategoriesGridTile from '../components/CategoriesGridTile';

// function renderCategoryItem(itemData, navigation) {
//   return (
//     <CategoriesGridTile
//       title={itemData.item.title}
//       color={itemData.item.color}
//       onPress={() => {
//         navigation.navigate('MealOverviewScreen', {
//           categoryId: itemData.item.id,
//         });
//       }}
//     />
//   );
// }

// export default function CategoriesScreen( { navigation } ) {
//   return (
//     <FlatList
//       data={CATEGORIES}
//       renderItem={itemData => renderCategoryItem(itemData, navigation)}
//       numColumns={2}
//     />
//   );
// }
