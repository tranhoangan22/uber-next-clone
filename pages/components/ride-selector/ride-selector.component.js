import React from "react";
import { carList } from "../../data/carList";
import {
  RideSelectorWrapper,
  TitleContainer,
  CarListContainer,
  CarContainer,
  CarImgContainer,
  CarDetailsContainer,
  ServiceContainer,
  TimeContainer,
  PriceContainer,
} from "./ride-selector.styles";

const RideSelector = () => {
  return (
    <RideSelectorWrapper>
      <TitleContainer>Choose a ride, or swipe up for more</TitleContainer>
      <CarListContainer>
        {carList.map((car, index) => (
          <CarContainer key={index}>
            <CarImgContainer src={car.imgUrl} />
            <CarDetailsContainer>
              <ServiceContainer>{car.service}</ServiceContainer>
              <TimeContainer>5 minutes away</TimeContainer>
            </CarDetailsContainer>
            <PriceContainer>$24.0</PriceContainer>
          </CarContainer>
        ))}
      </CarListContainer>
    </RideSelectorWrapper>
  );
};

export default RideSelector;
