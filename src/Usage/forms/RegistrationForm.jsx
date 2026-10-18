import React, { useState } from "react";
import TextInput from "../../components/ui/Input/TextInput";
import Button from "../../components/ui/button/Button";
import TextArea from "../../components/ui/Input/TextArea";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};
const RegistrationForm = () => {
  const [userDetails, setUserDetails] = useState(initialValues);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails, "NAMASTE");
    setUserDetails(initialValues);
  };
  return (
    <div className="max-w-2xl bg-amber-100 rounded p-5 m-auto">
      <h1 className="text-4xl font-bold text-center p-4">Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            label="First Name"
            name="firstName"
            value={userDetails.firstName}
            placeholder="Enter first name"
            onChange={handleOnChange}
            required
          />

          <TextInput
            label="Last Name"
            name="lastName"
            value={userDetails.lastName}
            placeholder="Enter last name"
            onChange={handleOnChange}
          />

          <TextInput
            label="Email"
            name="email"
            type="email"
            value={userDetails.email}
            placeholder="Enter email"
            onChange={handleOnChange}
            required
          />

          <TextInput
            label="Phone Number"
            name="phone"
            value={userDetails.phone}
            placeholder="Enter phone number"
            onChange={handleOnChange}
          />

          <div className="col-span-2">
            <TextArea
              label="Enter your message"
              name="message"
              value={userDetails.message}
              placeholder="Write your message here..."
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="col-span-2 text-center">
            <Button type="submit">Register</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
