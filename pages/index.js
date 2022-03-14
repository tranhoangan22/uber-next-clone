import { Wrapper, ActionItemsContainer } from "./index.styles";
import Map from "./components/map/map.component";
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";

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
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // we can get the current user by attaching an event listener to the global authentication object, by using the onAuthStateChanged function
    return onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        });
      } else {
        setUser(null);
        router.push("/login");
      }
    });
  }, []);
  // by returning onAuthStateChanged(..), we unsubscribe from the observer.  https://stackoverflow.com/questions/42762443/how-can-i-unsubscribe-to-onauthstatechanged
  // Refresher: if the function in useEffect (which gets executed after the component is rendered..) returns a function, that function gets executed when the component is unmounted -> avoid memory leak..

  return (
    <Wrapper>
      <Map />
      <ActionItemsContainer>
        {/* Header */}
        <HeaderContainer>
          <UberLogoContainer src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <ProfileContainer>
            <NameContainer>{user && user.name}</NameContainer>
            <UserImgContainer
              src={user && user.photoUrl}
              onClick={() => signOut(auth)}
            />
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
