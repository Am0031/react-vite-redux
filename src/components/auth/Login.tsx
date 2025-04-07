import { useNavigate } from "react-router-dom";

import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setUserRole } from "../../store/reducers/userSlice";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (role: "participant" | "judge" | "admin") => {
    dispatch(setUserRole(role)); // Dispatch the role to the Redux store
    navigate("/dashboard"); // Navigate to the dashboard
  };

  return (
    <div>
      <h2>Login as:</h2>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <button
          id={"participant-login"}
          onClick={() => handleLogin("participant")}
        >
          Participant
        </button>
        <button id={"judge-login"} onClick={() => handleLogin("judge")}>
          Judge
        </button>
        <button id={"admin-login"} onClick={() => handleLogin("admin")}>
          Admin
        </button>
      </Box>
    </div>
  );
};
