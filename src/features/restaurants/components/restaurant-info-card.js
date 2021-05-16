import React from "react";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/index";
import { Text } from "../../../components/typography/index";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./restaurant-info-card.styles.js";

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Kilele Nyama",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.sgs.co.ke/-/media/global/images/structural-website-images/hero-images/hero-agri-appetizers.jpg",
    ],
    address = "221b baker street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text>{name}</Text>
        <Section>
          <Rating>
            {ratingArray?.map((index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
        </Section>
        <SectionEnd>
          {isClosedTemporarily && (
            <Text variant="error">CLOSED TEMPORARILY</Text>
          )}
          <Spacer position="left" size="large">
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          </Spacer>
          <Spacer position="left" size="large">
            <Icon source={{ uri: icon }} />
          </Spacer>
        </SectionEnd>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfo;
