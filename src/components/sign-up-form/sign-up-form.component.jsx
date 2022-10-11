import { useState } from "react";
const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password, confirmPassword } = formFields;
  const handleChange = (event) => {
    const { name } = event;
  };
  return (
    <div>
      <h1>SignUp with Email and Password</h1>
      <form onSubmit={() => {}}>
        <label>Name</label>
        <input type="text" required onChange={handleChange} name="name" />
        <label>Email</label>
        <input type="email" required onChange={handleChange} name="email" />
        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
        />
        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
