import { useState } from "react";
import Link from "next/link";
import tw from "tailwind-styled-components";

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

const SearchWrapper = tw.div`bg-gray-200 h-screen`;

const ButtonContainer = tw.div`bg-white px-4 cursor-pointer`;

const BackButtonContainer = tw.img`h-12`;

const InputContainer = tw.div`flex flex-row bg-white items-center px-4 mb-2`;

const FromToIconsContainer = tw.div`w-10 flex flex-col mr-2 items-center`;

const CircleContainer = tw.img`h-2.5`;

const LineContainer = tw.img`h-10`;

const SquareContainer = tw.img`h-3`;

const InputBoxesContainer = tw.div`flex flex-col flex-1`; // flex-1 makes it as big as possible, it will take the remaining space left from FromToIconsContainer

const InputBoxContainer = tw.input`h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none`; // padding on y axis (top, bottom)

const PlusIconContainer = tw.img`w-10 h-10 bg-gray-200 rounded-full ml-3`;

const SavedPlacesContainer = tw.div`flex flex-row items-center bg-white px-4 py-2`;

const StarIconContainer = tw.img`bg-gray-400 w-10 h-10 p-2 rounded-full mr-2`;

const ConfirmLocationContainer = tw.div`bg-black text-white text-center mt-2 mx-4 px-4 py-3 text-2xl cursor-pointer`;

export default Search;
