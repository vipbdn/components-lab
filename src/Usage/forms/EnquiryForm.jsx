import { useState } from "react";
import TextInput from "../../components/ui/Input/TextInput";
import TextArea from "../../components/ui/Input/TextArea";
import RadioGroup from "../../components/ui/Input/RadioGroup";
import Button from "../../components/ui/button/Button";

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  enquiryType: "general",
  message: "",
};

const enquiryOptions = [
  { label: "General enquiry", value: "general" },
  { label: "Sales enquiry", value: "sales" },
  { label: "Technical support", value: "support" },
  { label: "Partnership", value: "partnership" },
];

const EnquiryForm = () => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry submitted:", values);
    // Replace with your API call.
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl p-6">
      <h2 className="mb-2 text-2xl font-bold">Send an Enquiry</h2>
      <p className="mb-6 text-sm text-gray-500">
        Fill in your details and tell us how we can help.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextInput
          name="fullName"
          label="Full Name"
          value={values.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          autoComplete="name"
          required
        />

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

        <TextInput
          name="phone"
          label="Phone Number"
          value={values.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          inputMode="tel"
          autoComplete="tel"
        />

        <div className="sm:col-span-2">
          <RadioGroup
            name="enquiryType"
            label="Enquiry Type"
            options={enquiryOptions}
            value={values.enquiryType}
            onChange={handleChange}
          />
        </div>

        <div className="sm:col-span-2">
          <TextArea
            name="message"
            label="Your Message"
            value={values.message}
            onChange={handleChange}
            placeholder="Describe your enquiry..."
            rows={5}
            required
          />
        </div>

        <div className="sm:col-span-2">
          <Button type="submit">Submit Enquiry</Button>
        </div>
      </div>
    </form>
  );
};

export default EnquiryForm;
