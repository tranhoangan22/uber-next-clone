import Map from "./components/map/map.component";
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import tw from "tailwind-styled-components"; // Create a Tailwind Styled Component with Tailwind rules that you can render directly

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

const Wrapper = tw.div`flex flex-col h-screen`; // h-screen -> height: 100vh;

const ActionItemsContainer = tw.div`flex-1 p-4`;

const HeaderContainer = tw.div`flex justify-between items-center`;

const UberLogoContainer = tw.img`h-28`;

const ProfileContainer = tw.div`flex items-center`;

const NameContainer = tw.div`mr-4 w-20 text-sm`;

const UserImgContainer = tw.img`h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer`; // to show the border, enable some padding: ;

const ActionsButton = tw.div`flex flex-row`;

const ActionButton = tw.div` flex flex-col bg-gray-200 flex-1 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl`;

const ActionButtonImgContainer = tw.img`h-3/5`;

const InputButton = tw.div`h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8`;
