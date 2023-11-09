import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentsFromAuth,
} from "../../utils/firebase.utils";
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
    console.log(formFields);
  }
  function resetFieldsForm() {
    setFormFields(defaultFormFields);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    console.log(password, confirmPassword);
    if (password !== confirmPassword) {
      alert("password is not match");
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
    <div>
      <h1>Sign up with your emails and password</h1>
      <form>
        <label>Display Name</label>
        <input
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />
        <label>Confirm Password</label>
        <input
          type="Password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
          required
        />
        <button type="submit" onClick={handleSubmit}>
          Sign up
        </button>
      </form>
    </div>
  );
}
