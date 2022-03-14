import React from "react";
import Map from "./components/map/map.component";

import Link from "next/link";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import RideSelector from "./components/ride-selector/ride-selector.component";
import {
  ConfirmWrapper,
  RideContainer,
  ConfirmButtonContainer,
  ConfirmContainer,
  ButtonContainer,
  BackButtonContainer,
} from "./confirm.styles";

const Confirm = () => {
  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

  // accessing the available parameters in the URL for this page (/confirm)
  const router = useRouter();
  const { pickupLocation, dropoffLocation } = router.query;

  // use fetch API to send a get request to mapbox to get coordinates from location name https://docs.mapbox.com/api/search/geocoding/
  const getPickupCoordinates = (pickupLocation) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickupLocation}.json?` + // "question mark" indicates query following parameters
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYW50cmFuMDkiLCJhIjoiY2t6MWE5NmdmMWM4bTJxbXZmbnVha2V6NyJ9.a9TqbWLxc_SMUp-MYqBndQ",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = (dropoffLocation) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoffLocation}.json?` + // "question mark" indicates query following parameters
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYW50cmFuMDkiLCJhIjoiY2t6MWE5NmdmMWM4bTJxbXZmbnVha2V6NyJ9.a9TqbWLxc_SMUp-MYqBndQ",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickupLocation);
    getDropoffCoordinates(dropoffLocation);
  }, [pickupLocation, dropoffLocation]);

  return (
    <ConfirmWrapper>
      <Link href="/search">
        <ButtonContainer>
          <BackButtonContainer src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </ButtonContainer>
      </Link>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />
        <ConfirmButtonContainer>
          <ConfirmContainer>Confirm UberX</ConfirmContainer>
        </ConfirmButtonContainer>
      </RideContainer>
    </ConfirmWrapper>
  );
};

export default Confirm;
