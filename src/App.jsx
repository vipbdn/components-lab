import AccountRegistrationForm from "./Usage/forms/AccountRegistrationForm";
import EnquiryForm from "./Usage/forms/EnquiryForm";
import QuoteRequestForm from "./Usage/forms/QuoteRequestForm";
import RegistrationForm from "./Usage/forms/RegistrationForm";

const App = () => {
  return (
    <main className="min-h-screen space-y-10 bg-gray-50 p-8 text-gray-900">
      <RegistrationForm />
      <EnquiryForm />
      <AccountRegistrationForm />
      <QuoteRequestForm />
    </main>
  );
};

export default App;
