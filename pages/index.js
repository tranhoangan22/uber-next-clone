import Head from "next/head";
import Image from "next/image";
import { Wrapper, ActionItemsContainer } from "./index.styles";
import Map from "./components/map/map.component";
import Link from "next/link";

import {
  HeaderContainer,
  UberLogoContainer,
  ProfileContainer,
  NameContainer,
  UserImgContainer,
  ActionsButton,
  ActionButton,
  ActionButtonImgContainer,
  InputButton,
} from "./index.styles";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItemsContainer>
        {/* Header */}
        <HeaderContainer>
          <UberLogoContainer src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <ProfileContainer>
            <NameContainer>An Tran</NameContainer>
            <UserImgContainer src="https://lh3.googleusercontent.com/a-/AOh14GibPUSL4NcVGWWIueEsRAqnhflUj5STYAfbrqK9Kg=s576-p-rw-no" />
          </ProfileContainer>
        </HeaderContainer>
        <ActionsButton>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImgContainer src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImgContainer src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImgContainer src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionsButton>
        <InputButton>Where to</InputButton>
      </ActionItemsContainer>
    </Wrapper>
  );
}
