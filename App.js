import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealOverviewScreen from './screens/MealOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',

        animationEnabled: true,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        sceneContainerStyle: {
          backgroundColor: 'white',
        },
        drawerContentStyle: {
          backgroundColor: 'white',
        },
        drawerActiveBackgroundColor: '#f4511e',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'black',
        drawerInactiveBackgroundColor: 'white',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={
          ({ title: 'All categories ' },
          {
            drawerIcon: ({ size, color }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          })
        }
      />
      <Drawer.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="DrawerScreen"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealOverviewScreen"
            component={MealOverviewScreen}
            options={{
              title: 'Meal Overview',
              headerRight: () => (
                <Text style={{ paddingRight: 10 }}>Right</Text>
              ),
            }}
          />
          <Stack.Screen
            name="MealDetailsScreen"
            component={MealDetailsScreen}
            options={{
              title: 'About the meal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
