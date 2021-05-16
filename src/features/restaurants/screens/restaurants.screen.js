import React, { useContext } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import { Searchbar } from "react-native-paper";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

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

const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
