import tw from "tailwind-styled-components";

export const SearchWrapper = tw.div`bg-gray-200 h-screen`;

export const ButtonContainer = tw.div`bg-white px-4 cursor-pointer`;

export const BackButtonContainer = tw.img`h-12`;

export const InputContainer = tw.div`flex flex-row bg-white items-center px-4 mb-2`;

export const FromToIconsContainer = tw.div`w-10 flex flex-col mr-2 items-center`;

export const CircleContainer = tw.img`h-2.5`;

export const LineContainer = tw.img`h-10`;

export const SquareContainer = tw.img`h-3`;

export const InputBoxesContainer = tw.div`flex flex-col flex-1`; // flex-1 makes it as big as possible, it will take the remaining space left from FromToIconsContainer

export const InputBoxContainer = tw.input`h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none`; // padding on y axis (top, bottom)

export const PlusIconContainer = tw.img`w-10 h-10 bg-gray-200 rounded-full ml-3`;

export const SavedPlacesContainer = tw.div`flex flex-row items-center bg-white px-4 py-2`;

export const StarIconContainer = tw.img`bg-gray-400 w-10 h-10 p-2 rounded-full mr-2`;

export const ConfirmLocationContainer = tw.div`bg-black text-white text-center mt-2 mx-4 px-4 py-3 text-2xl cursor-pointer`;

// export const ConfirmLocationButtonContainer = tw.button` bg-black text-white flex flex-row justify-center items-center px-24 py-2 m-4 cursor-pointer text-xl whitespace-nowrap`;
