import React from "react";
import { Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16;
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
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
  },
});

export default RestaurantInfo;
