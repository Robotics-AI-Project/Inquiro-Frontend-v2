import { ROUTES } from "@/constants/nav";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

export { AuthErrorCodes, linkWithCredential } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAhpbffV-qmVUUHt-9sSBhrDTAge7QxcZo",
  authDomain: "inquiro-ai.firebaseapp.com",
  projectId: "inquiro-ai",
  storageBucket: "inquiro-ai.appspot.com",
  messagingSenderId: "476929284335",
  appId: "1:476929284335:web:83db0db81c2bc9d9f5a31a",
  measurementId: "G-9B438QE7X5",
};

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

auth.useDeviceLanguage();

type OAuthSignIn = {
  method: "GOOGLE";
};

export const signIn = async (param: OAuthSignIn) => {
  switch (param.method) {
    case "GOOGLE":
      return signInWithRedirect(auth, new GoogleAuthProvider());
    default:
      throw new Error("Invalid sign in method");
  }
};

export const signOut = async () => {
  await auth.signOut();
  window.location.replace(ROUTES.SIGN_IN);
};
