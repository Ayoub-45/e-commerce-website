import SignInForm from "../../components/sign-in-form/sign-in.component.js";
import SignUpForm from "../../components/sign-up-form/sign-up.component.js";
import "./authentication.style.scss";
export default function Authentication() {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
