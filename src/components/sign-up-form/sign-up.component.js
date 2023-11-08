import { useState } from "react";

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
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
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
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
