import tw from "tailwind-styled-components";

export const ConfirmWrapper = tw.div`relative flex flex-col h-screen`;

export const RideContainer = tw.div`flex flex-col flex-1 h-1/2`; // flex-1: RideContainer takes the same space as Map (also having flex-1) inside ConfirmContainer. These 2 containers take as much space as possible in ConfirmContainer

export const ConfirmButtonContainer = tw.div`border-t-2`;

export const ConfirmContainer = tw.div`bg-black text-white my-4 mx-4 py-4 text-center text-xl`;

export const ButtonContainer = tw.div`absolute z-10 left-3 top-3 bg-white rounded-full cursor-pointer shadow-md`;

export const BackButtonContainer = tw.img`h-full object-contain`;
