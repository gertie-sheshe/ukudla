import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";

import RestaurantInfoCard from "../components/restaurant-info-card";

const isAndroid = Platform.OS === "android";

const RestaurantsScreen = () => (
  <SafeAreaView style={styles.main}>
    <View style={styles.searchContainer}>
      <Searchbar placeholder="Search" />
    </View>
    <View style={styles.listContainer}>
      <RestaurantInfoCard />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  searchContainer: {
    padding: 16,
  },
  listContainer: {
    padding: 16,
    flex: 1,
    backgroundColor: "blue",
  },
});

export default RestaurantsScreen;
