import { useState } from "react";
import TextInput from "../../components/ui/Input/TextInput";
import TextArea from "../../components/ui/Input/TextArea";
import RadioGroup from "../../components/ui/Input/RadioGroup";
import Button from "../../components/ui/button/Button";

const initialValues = {
  name: "",
  email: "",
  service: "web-development",
  budget: "50000-100000",
  timeline: "1-month",
  requirements: "",
};

const serviceOptions = [
  { label: "Web Development", value: "web-development" },
  { label: "UI/UX Design", value: "ui-ux-design" },
  { label: "Mobile App", value: "mobile-app" },
  { label: "Other", value: "other" },
];

const budgetOptions = [
  { label: "Under ₹25,000", value: "under-25000" },
  { label: "₹25,000–₹50,000", value: "25000-50000" },
  { label: "₹50,000–₹1,00,000", value: "50000-100000" },
  { label: "Above ₹1,00,000", value: "above-100000" },
];

const timelineOptions = [
  { label: "Within 2 weeks", value: "2-weeks" },
  { label: "Within 1 month", value: "1-month" },
  { label: "Within 3 months", value: "3-months" },
  { label: "Flexible", value: "flexible" },
];

const QuoteRequestForm = () => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote request:", values);
    // Replace with your API call.
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-3xl p-6">
      <h2 className="mb-2 text-2xl font-bold">Request a Quote</h2>
      <p className="mb-6 text-sm text-gray-500">
        Share your requirements to receive a project estimate.
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextInput
          name="name"
          label="Full Name"
          value={values.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <TextInput
          name="email"
          label="Email Address"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />

        <div className="sm:col-span-2">
          <RadioGroup
            name="service"
            label="Service Required"
            options={serviceOptions}
            value={values.service}
            onChange={handleChange}
          />
        </div>

        <div className="sm:col-span-2">
          <RadioGroup
            name="budget"
            label="Estimated Budget"
            options={budgetOptions}
            value={values.budget}
            onChange={handleChange}
          />
        </div>

        <div className="sm:col-span-2">
          <RadioGroup
            name="timeline"
            label="Expected Timeline"
            options={timelineOptions}
            value={values.timeline}
            onChange={handleChange}
          />
        </div>

        <div className="sm:col-span-2">
          <TextArea
            name="requirements"
            label="Project Requirements"
            value={values.requirements}
            onChange={handleChange}
            placeholder="Describe the project, features, and goals..."
            rows={5}
            required
          />
        </div>

        <div className="sm:col-span-2">
          <Button type="submit">Request Quote</Button>
        </div>
      </div>
    </form>
  );
};

export default QuoteRequestForm;
