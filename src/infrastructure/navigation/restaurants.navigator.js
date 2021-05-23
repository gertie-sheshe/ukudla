import React from "react";
import { Text } from "react-native";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();

const Deets = () => <Text>Restaurant Detail</Text>;

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen name="RestaurantDetail" component={Deets} />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
