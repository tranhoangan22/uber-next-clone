import React, { useEffect, useState } from "react";
import { carList } from "../../data/carList";
import tw from "tailwind-styled-components";

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

const RideSelectorWrapper = tw.div`flex-1 overflow-y-scroll flex flex-col`; // `flex flex-col` makes it possible to enable scrolling only in CarListContainer and keep TitleContainer "sticky"

const TitleContainer = tw.div`text-gray-500 text-center text-xs py-2 border-b`;

const CarListContainer = tw.div`overflow-y-scroll`;

const CarContainer = tw.div`flex p-4 items-center`;

const CarImgContainer = tw.img`h-14 mr-4`;

const CarDetailsContainer = tw.div`flex-1`; // CartDetailsContainer automatically has flex-direction: column
const ServiceContainer = tw.div`font-medium`;
const TimeContainer = tw.div`text-xs text-blue-500`;

const PriceContainer = tw.div`text-sm`;

export default RideSelector;
