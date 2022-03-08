import { useState } from "react";
import Link from "next/link";
import {
  SearchWrapper,
  ButtonContainer,
  BackButtonContainer,
  InputContainer,
  FromToIconsContainer,
  CircleContainer,
  LineContainer,
  SquareContainer,
  InputBoxesContainer,
  InputBoxContainer,
  PlusIconContainer,
  SavedPlacesContainer,
  StarIconContainer,
  ConfirmLocationContainer,
  ConfirmLocationButtonContainer,
} from "./search.styles";

const Search = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");

  return (
    <SearchWrapper>
      <Link href="/">
        <ButtonContainer>
          <BackButtonContainer src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </ButtonContainer>
      </Link>
      <InputContainer>
        <FromToIconsContainer>
          <CircleContainer src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <LineContainer src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <SquareContainer src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </FromToIconsContainer>
        <InputBoxesContainer>
          <InputBoxContainer
            value={pickupLocation}
            onChange={(event) => setPickupLocation(event.target.value)}
            placeholder="Enter pickup location"
          />
          <InputBoxContainer
            value={dropoffLocation}
            onChange={(event) => setDropoffLocation(event.target.value)}
            placeholder="Where to?"
          />
        </InputBoxesContainer>
        <PlusIconContainer src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>

      <SavedPlacesContainer>
        <StarIconContainer src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlacesContainer>

      {/* Pass data between pages with Link */}
      <Link
        href={{
          pathname: "/confirm",
          query: {
            pickupLocation,
            dropoffLocation,
          },
        }}
      >
        <ConfirmLocationContainer>Confirm Locations</ConfirmLocationContainer>
      </Link>
    </SearchWrapper>
  );
};

export default Search;
