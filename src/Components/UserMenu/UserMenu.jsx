import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { useAuth } from "../../hooks";
import css from "./UserMenu.module.css";
import Button from "@mui/material/Button";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Button
        type="button"
        variant="contained"
        size="medium"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </Button>
    </div>
  );
};
