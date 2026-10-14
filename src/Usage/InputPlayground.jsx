import { useState } from "react";
import TextInput from "../components/ui/Input/TextInput";
import PasswordInput from "../components/ui/Input/PasswordInput";

const InputPlayground = () => {
  return (
    <main className="min-h-screen space-y-8 bg-gray-50 p-8 text-gray-900">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Helper Text</h2>

        <TextInput
          id="firstName"
          name="firstName"
          label="First Name"
          placeholder="Enter your first name"
          helperText={"Enter your legal first name."}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Error State</h2>

        <TextInput
          id="email"
          name="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
        />
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Error State</h2>

        <PasswordInput
          id="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
          helperText={"Set a strong password"}
        />
        <PasswordInput
          id="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
          helperText={"Set a strong password"}
          required
        />
      </section>
    </main>
  );
};

export default InputPlayground;
