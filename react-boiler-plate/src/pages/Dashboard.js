import { useSelector, useDispatch } from "react-redux";
import { logout } from "../feature/auth/authSlice";


export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Welcome {user?.email}</h2>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
