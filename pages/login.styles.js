import tw from "tailwind-styled-components";

export const LoginWrapper = tw.div`flex flex-col h-screen w-screen bg-gray-200 p-4`; // p-4 adds padding in all directions and squeezes it down in the middle

export const SignInButtonContainer = tw.button`bg-black text-white text-center py-4 mt-8 self-center w-full`;

export const UberLogoContainer = tw.img`h-20 w-auto object-contain self-start`;

export const TitleContainer = tw.div`text-5xl pt-4 text-gray-500`;

export const HeadImageContainer = tw.img`object-contain w-full`;
