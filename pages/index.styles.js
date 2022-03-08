import tw from "tailwind-styled-components"; // Create a Tailwind Styled Component with Tailwind rules that you can render directly

export const Wrapper = tw.div`flex flex-col h-screen`; // h-screen -> height: 100vh;

export const ActionItemsContainer = tw.div`flex-1 p-4`;

export const HeaderContainer = tw.div`flex justify-between items-center`;

export const UberLogoContainer = tw.img`h-28`;

export const ProfileContainer = tw.div`flex items-center`;

export const NameContainer = tw.div`mr-4 w-20 text-sm`;

export const UserImgContainer = tw.img`h-12 w-12 rounded-full border border-gray-200 p-px`; // to show the border, enable some padding

export const ActionsButton = tw.div`flex flex-row`;

export const ActionButton = tw.div` flex flex-col bg-gray-200 flex-1 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl`;

export const ActionButtonImgContainer = tw.img`h-3/5`;

export const InputButton = tw.div`h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8`;
