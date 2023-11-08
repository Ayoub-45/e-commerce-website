import {
  signInwithGooglePopup,
  createUserDocumentsFromAuth,
} from "../../utils/firebase.utils";

export default function SignIn() {
  const logUserGoogle = async function () {
    const { user } = await signInwithGooglePopup();
    const userDocRef = await createUserDocumentsFromAuth(user);
    
  };
  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logUserGoogle}>Sign in with Google Popup</button>
    </div>
  );
}
