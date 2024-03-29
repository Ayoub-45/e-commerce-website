import { useState } from "react";
import { ButtonsContainer, SignInContainer } from "./sign-in.style";

import {
  signAuthUserWithEmailAndPassword,
  signInwithGooglePopup,
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
const defaultFormFields = {
  email: "",
  password: "",
};
export default function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  function handleChange(event) {
    const { name, value } = event.target;
    setFormFields((formFields) => {
      return { ...formFields, [name]: value };
    });
  }
  function resetFieldsForm() {
    setFormFields(defaultFormFields);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await signAuthUserWithEmailAndPassword(email, password);
      if (response === undefined) throw new Error("No data entered ");

      resetFieldsForm();
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-email":
          alert("No user found with this email");
          break;
        case "auth/invalid-login-credentials":
          alert("Wrong password ! Please check your password");
          break;
        default:
          console.error(err);
      }
    }
  }
  const signInWithGoogle = async function () {
    const { user } = await signInwithGooglePopup();
  };
  return (
    <SignInContainer>
      <h2>I already have an Account</h2>
      <span>Sign in with your email and password</span>
      <form>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />
      </form>
      <ButtonsContainer>
        <Button type="submit" onClick={handleSubmit}>
          Sign in
        </Button>
        <Button
          type="button"
          onClick={signInWithGoogle}
          buttonType={BUTTON_TYPE_CLASSES.google}
        >
          Google Sign in
        </Button>
      </ButtonsContainer>
    </SignInContainer>
  );
}
