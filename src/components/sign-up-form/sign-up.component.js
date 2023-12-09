import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentsFromAuth,
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { SignUpContainer } from "./sign-up.style";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export default function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

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
    console.log(password, confirmPassword);
    if (password !== confirmPassword) {
      alert("Password is not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentsFromAuth(user, { displayName });

      resetFieldsForm();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot use the same email to create an account");
        console.error("User creation encountered error ", err.message);
      }
    }
  }
  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your emails and password</span>
      <form>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />
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
        <FormInput
          label="Confirm Password"
          type="Password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
          required
        />
        <Button type="submit" onClick={handleSubmit}>
          Sign up
        </Button>
      </form>
    </SignUpContainer>
  );
}
