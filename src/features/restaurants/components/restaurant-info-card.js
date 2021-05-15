import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
`;

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
  padding: 20px;
`;

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "that restaurant",
    icon,
    photos = [
      "https://www.sgs.co.ke/-/media/global/images/structural-website-images/hero-images/hero-agri-appetizers.jpg",
    ],
    address = "221b baker street",
    isOpenNow = true,
    rating = 4,
    isClosed,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

export default RestaurantInfo;
