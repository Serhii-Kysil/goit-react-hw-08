import { LoginForm } from "../Components/LoginForm/LoginForm";
import DocumentTitle from "../Components/DocumentTitle";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default function Login() {
  return (
    <div style={styles.container}>
      <DocumentTitle>Login</DocumentTitle>
      <div>
        <LoginForm />
      </div>
    </div>
  );
}
