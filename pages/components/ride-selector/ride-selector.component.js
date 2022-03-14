import React, { useEffect, useState } from "react";
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

const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState(0); // rideDuration is how long it takes to go from point a to point b

  // get rideDuration from mapbox API
  useEffect(() => {
    const rideDuration = fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${pickupCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYW50cmFuMDkiLCJhIjoiY2t6MWE5NmdmMWM4bTJxbXZmbnVha2V6NyJ9.a9TqbWLxc_SMUp-MYqBndQ`
    )
      .then((res) => res.json())
      // .then((data) => console.log((data.routes[0].duration * 3) / 60));
      .then((data) => {
        if (data.routes[0]) {
          setRideDuration(data.routes[0].duration / 60); // data.routes[0].duration is in seconds
        }
      });
    return () => setRideDuration(0); // clean up after component is unmounted
  }, [pickupCoordinates, dropoffCoordinates]);

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
            <PriceContainer>
              {"$" + (rideDuration * car.multiplier * 3).toFixed(2)}
            </PriceContainer>
          </CarContainer>
        ))}
      </CarListContainer>
    </RideSelectorWrapper>
  );
};

export default RideSelector;
