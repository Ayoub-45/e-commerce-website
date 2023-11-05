import { signInwithGooglePopup } from "../../utils/firebase.utils";

export default function SignIn() {
  const logUserGoogle = async function () {
    const response = await signInwithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logUserGoogle}>Sign in with Google Popup</button>
    </div>
  );
}
