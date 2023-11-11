import SignInForm from "../../components/sign-in-form/sign-in.component";
import SignUpForm from "../../components/sign-up-form/sign-up.component";
import "./authentication.style.scss";
export default function Authentication() {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
