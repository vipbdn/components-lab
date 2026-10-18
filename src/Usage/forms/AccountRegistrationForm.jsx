import { useState } from "react";
import TextInput from "../../components/ui/Input/TextInput";
import PasswordInput from "../../components/ui/Input/PasswordInput";
import Button from "../../components/ui/button/Button";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const AccountRegistrationForm = () => {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.password !== values.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    console.log("Registration data:", {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
    });

    // Send the registration data to your backend.
    // Never log or store plaintext passwords in production.
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl p-6">
      <h2 className="mb-6 text-2xl font-bold">Create Your Account</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextInput
          name="firstName"
          label="First Name"
          value={values.firstName}
          onChange={handleChange}
          placeholder="First name"
          autoComplete="given-name"
          required
        />

        <TextInput
          name="lastName"
          label="Last Name"
          value={values.lastName}
          onChange={handleChange}
          placeholder="Last name"
          autoComplete="family-name"
          required
        />

        <div className="sm:col-span-2">
          <TextInput
            name="email"
            label="Email Address"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </div>

        <PasswordInput
          name="password"
          label="Password"
          value={values.password}
          onChange={handleChange}
          placeholder="Create a password"
          autoComplete="new-password"
          required
        />

        <PasswordInput
          name="confirmPassword"
          label="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          autoComplete="new-password"
          error={error}
          required
        />

        <div className="sm:col-span-2">
          <Button type="submit">Create Account</Button>
        </div>
      </div>
    </form>
  );
};

export default AccountRegistrationForm;
