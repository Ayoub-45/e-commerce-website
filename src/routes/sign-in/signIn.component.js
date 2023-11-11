import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInwithGooglePopup,
  signInwithGoogleRedirect,
  createUserDocumentsFromAuth,
} from "../../utils/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up.component";
export default function SignIn() {
  useEffect(function () {
    const createDoc = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentsFromAuth(response.user);
        console.log(userDocRef);
      }
    };
    createDoc();
  }, []);
  const logUserGoogle = async function () {
    const { user } = await signInwithGooglePopup();
    const userDocRef = await createUserDocumentsFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <div>
        <h1>Sign In page</h1>
        <button onClick={logUserGoogle}>Sign in with Google Popup</button>
        <button onClick={signInwithGoogleRedirect}>
          Sign in with Google Redirect
        </button>
      </div>
      <SignUpForm />
    </div>
  );
}
