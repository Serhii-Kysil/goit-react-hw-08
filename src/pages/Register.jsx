import { RegisterForm } from "../Components/RegisterForm/RegisterForm";
import DocumentTitle from "../Components/DocumentTitle";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default function Register() {
  return (
    <div style={styles.container}>
      <DocumentTitle>Register</DocumentTitle>
      <div>
        <RegisterForm />
      </div>
    </div>
  );
}
