import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import { Searchbar } from "react-native-paper";

import RestaurantInfoCard from "../components/restaurant-info-card";
import { SafeArea } from "../../../components/utility/safe-area-component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>
    <RestaurantList
      data={[{ name: "1" }, { name: "2" }, { name: "4" }, { name: "5" }]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);

export default RestaurantsScreen;
