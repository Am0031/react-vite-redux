import { useNavigate } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { setUserRole } from "../../store/reducers/userSlice";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

interface LoginData {
  username: string;
  password: string;
}

interface LoginResponse {
  message: string;
}

const fakeApiLogin = (loginData: LoginData): Promise<LoginResponse> => {
  return new Promise((resolve) => {
    console.log("Processing:", loginData);
    setTimeout(() => {
      // Simulate a successful login response
      resolve({ message: "Login successful!" });
    }, 1000); // Simulate a 1 second delay
  });
};

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [tempUserRole, setTempUserRole] = useState<
    "participant" | "judge" | "admin" | null
  >(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation({
    mutationFn: fakeApiLogin,
    onSuccess: () => {
      console.log("Login successful!");
      handleLoginSuccess(tempUserRole);
    },
    onError: (error) => {
      console.error("Login failed:", error.message);
    },
  });

  const handleUserTypeSelection = (role: "participant" | "judge" | "admin") => {
    setTempUserRole(role);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ username, password });
  };

  const handleLoginSuccess = (role: any) => {
    dispatch(setUserRole(role)); // Dispatch the role to the Redux store
    navigate("/dashboard"); // Navigate to the dashboard
  };

  return (
    <div>
      <h2>Login Page</h2>
      {!tempUserRole ? (
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
            onClick={() => handleUserTypeSelection("participant")}
          >
            Participant
          </button>
          <button
            id={"judge-login"}
            onClick={() => handleUserTypeSelection("judge")}
          >
            Judge
          </button>
          <button
            id={"admin-login"}
            onClick={() => handleUserTypeSelection("admin")}
          >
            Admin
          </button>
        </Box>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <h3>Log in as {tempUserRole}</h3>
          <div>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit" disabled={loginMutation.isPending}>
            {loginMutation.isPending ? "Logging in..." : "Log In"}
          </button>
          {loginMutation.isPending && <CircularProgress />}
          {loginMutation.isError && (
            <p>An error occurred: {loginMutation.error.message}</p>
          )}
          {loginMutation.isSuccess && <p>Login successful!</p>}
        </form>
      )}
    </div>
  );
};
