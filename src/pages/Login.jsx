import { LoginForm } from "../Components/LoginForm/LoginForm";
import DocumentTitle from "../Components/DocumentTitle";

export default function Login() {
  return (
    <>
      <DocumentTitle>Login</DocumentTitle>
      <div>
        <LoginForm />
      </div>
    </>
  );
}
