import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";

import { StyleSheet } from "react-native";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//   },
// });
