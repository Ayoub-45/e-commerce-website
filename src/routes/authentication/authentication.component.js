import SignInForm from "../../components/sign-in-form/sign-in.component.js";
import SignUpForm from "../../components/sign-up-form/sign-up.component.js";
import { AuthenticationContainer } from "./authentication.style.jsx";
export default function Authentication() {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
}
