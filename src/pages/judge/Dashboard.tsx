import { JudgeLayout } from "../../components/layouts/JudgeLayout";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { logout } from "../../store/reducers/userSlice";
import {
  decrement,
  doubleScore,
  increment,
  resetScore,
} from "../../store/reducers/judgeSlice";

export const JudgeDashboard: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userRole = useSelector((state: RootState) => state.user.role);
  const judgeCount = useSelector((state: RootState) => state.judge.value);

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
  const handleResetScore = () => {
    dispatch(resetScore());
  };

  const handleDoubleScore = () => {
    console.log("Double Score button clicked!");
    dispatch(doubleScore());
  };

  return (
    <JudgeLayout>
      <h1>{`The ${userRole} Dashboard`}</h1>
      <p>Welcome, Judge! Here you can proceed with judging categories.</p>
      <p>Judge count: {judgeCount}</p>
      <button id={"judge-increment-cta"} onClick={handleIncrement}>
        Increase Count
      </button>
      <button id={"judge-decrement-cta"} onClick={handleDecrement}>
        Decrease Count
      </button>
      <button id={"judge-double-score-cta"} onClick={handleDoubleScore}>
        Double Score
      </button>
      <button id={"judge-reset-cta"} onClick={handleResetScore}>
        Reset Score
      </button>
      <button id={"judge-dashboard-logout"} onClick={handleLogout}>
        Logout
      </button>
    </JudgeLayout>
  );
};
