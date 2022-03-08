import tw from "tailwind-styled-components";

export const RideSelectorWrapper = tw.div`flex-1 overflow-y-scroll flex flex-col`; // `flex flex-col` makes it possible to enable scrolling only in CarListContainer and keep TitleContainer "sticky"

export const TitleContainer = tw.div`text-gray-500 text-center text-xs py-2 border-b`;

export const CarListContainer = tw.div`overflow-y-scroll`;

export const CarContainer = tw.div`flex p-4 items-center`;

export const CarImgContainer = tw.img`h-14 mr-4`;

export const CarDetailsContainer = tw.div`flex-1`; // CartDetailsContainer automatically has flex-direction: column
export const ServiceContainer = tw.div`font-medium`;
export const TimeContainer = tw.div`text-xs text-blue-500`;

export const PriceContainer = tw.div`text-sm`;
