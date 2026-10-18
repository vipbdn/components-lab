import { useState } from "react";
import TextInput from "../components/ui/Input/TextInput";
import PasswordInput from "../components/ui/Input/PasswordInput";
import TextArea from "../components/ui/Input/TextArea";
import RadioGroup from "../components/ui/Input/RadioGroup";
import Select from "../components/select/Select";
const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];
const InputPlayground = () => {
  const [message, setMessage] = useState("");
  const [gender, setGender] = useState("male");
  const [city, setCity] = useState("");
  console.log(city, "city ");
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
        <TextArea
          id="text-area"
          label={"Message"}
          name={"message"}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </section>
      <div className="space-y-6">
        <RadioGroup
          id="gender"
          name="gender"
          label="Select gender"
          options={genderOptions}
          value={gender}
          onChange={(event) => setGender(event.target.value)}
          required
        />
      </div>
      <div className="space-y-6">
        <Select
          name="city"
          label="City"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          options={[
            { id: "delhi", name: "Delhi" },
            { id: "noida", name: "Noida" },
          ]}
        />
      </div>
    </main>
  );
};

export default InputPlayground;
