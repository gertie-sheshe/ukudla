import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import styled from "styled-components/native";

import { Searchbar } from "react-native-paper";

import RestaurantInfoCard from "../components/restaurant-info-card";

const isAndroid = Platform.OS === "android";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
`;

const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>
    <ListContainer>
      <RestaurantInfoCard />
    </ListContainer>
  </SafeArea>
);

export default RestaurantsScreen;
