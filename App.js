import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";

const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.main}>
        <View style={styles.searchContainer}>
          <Searchbar placeholder="Search" />
        </View>
        <View style={styles.listContainer}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

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
