import { RegisterForm } from "../Components/RegisterForm/RegisterForm";
import DocumentTitle from "../Components/DocumentTitle";

export default function Register() {
  return (
    <>
      <DocumentTitle>Register</DocumentTitle>
      <div>
        <RegisterForm />
      </div>
    </>
  );
}
