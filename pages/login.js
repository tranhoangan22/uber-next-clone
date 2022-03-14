import React, { useEffect } from "react";
import {
  LoginWrapper,
  SignInButtonContainer,
  UberLogoContainer,
  TitleContainer,
  HeadImageContainer,
} from "./login.styles";

import { Router, useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // if the user exists, go to the home page
        router.push("/");
      }
    });
  }, []);

  return (
    <LoginWrapper>
      <UberLogoContainer src="https://i.ibb.co/ZMhy8ws/uber-logo.png" />
      <TitleContainer>Log in to access your acount</TitleContainer>
      <HeadImageContainer src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <SignInButtonContainer onClick={() => signInWithPopup(auth, provider)}>
        Sign in with Google
      </SignInButtonContainer>
    </LoginWrapper>
  );
};

export default Login;

/**
 * For each of your app's pages that need information about the signed-in user, attach an observer to the global authentication object (`auth` object).
 * This observer gets called whenever the user's sign-in state changes.
 * Attach the observer using the onAuthStateChanged method. When a user successfully signs in, you can get information about the user in the observer.
 *
 * onAuthStateChanged()
 * If you attach a function to Firebase Authentication's onAuthStateChanged(), that function is called:
 *	- straight away with the current authentication state of the user AND
 *      - whenever the user's authentication state changes
 * Attaching a listener does not require any network traffic. It just returns the current known state,
 *  which the Firebase Authentication client tracks in memory and in local storage.
 */
