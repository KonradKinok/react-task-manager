import { useDispatch } from "react-redux";
import { logOut } from "../../redux/operations/auth.operation";
import css from "./UserMenu.module.scss";
import { useAuth } from "../../hooks";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
