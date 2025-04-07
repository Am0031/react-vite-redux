import { AdminLayout } from "../../components/layouts/AdminLayout";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { logout } from "../../store/reducers/userSlice";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../store/reducers/adminSlice";
import { useState } from "react";

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState<number>(0);
  const userRole = useSelector((state: RootState) => state.user.role);
  const adminCount = useSelector((state: RootState) => state.admin.value);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(incrementAmount));
  };

  return (
    <AdminLayout>
      <h1>{`The ${userRole} dashboard`}</h1>
      {userRole === "admin" ? (
        <>
          <p>Welcome, Admin! Here you can manage administrative tasks.</p>
          <p>Admin count: {adminCount}</p>
          <button id={"admin-increment-cta"} onClick={handleIncrement}>
            Increase Count
          </button>
          <button id={"admin-decrement-cta"} onClick={handleDecrement}>
            Decrease Count
          </button>
          <div style={{ margin: "20px" }}>
            <input
              type="number"
              value={incrementAmount}
              onChange={(e) => setIncrementAmount(Number(e.target.value))} // Update state on input change
              placeholder="Enter amount"
              style={{ marginRight: "10px" }}
            />
            <button
              id={"admin-increment-amount-cta"}
              onClick={handleIncrementByAmount}
            >
              Increment by Amount
            </button>
          </div>
          <button id={"admin-dashboard-logout"} onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Unauthorized access. Please log in with an admin account.</p>
      )}
    </AdminLayout>
  );
};
