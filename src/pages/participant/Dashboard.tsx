import { ParticipantLayout } from "../../components/layouts/ParticipantLayout";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { logout } from "../../store/reducers/userSlice";
import {
  decrement,
  increment,
  incrementByFive,
  reset,
} from "../../store/reducers/participantSlice";

export const ParticipantDashboard: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const handleReset = () => {
    dispatch(reset());
  };

  const handleIncrementByFive = () => {
    dispatch(incrementByFive());
  };

  const userRole = useSelector((state: RootState) => state.user.role);
  const participantCount = useSelector(
    (state: RootState) => state.participant.value
  );
  return (
    <ParticipantLayout>
      <h1>{`The ${userRole} dashboard`}</h1>
      <p>
        Welcome, Participant! Here you can view your existing entries and update
        them.
      </p>
      <p>User count: {participantCount}</p>
      <button id={"part-increment-cta"} onClick={handleIncrement}>
        Increase Count
      </button>
      <button id={"part-decrement-cta"} onClick={handleDecrement}>
        Decrease Count
      </button>
      <button id={"part-increment-five-cta"} onClick={handleIncrementByFive}>
        Increase by 5
      </button>
      <button id={"part-reset-cta"} onClick={handleReset}>
        Reset Count
      </button>
      <button id={"part-dashboard-logout"} onClick={handleLogout}>
        Logout
      </button>
    </ParticipantLayout>
  );
};
