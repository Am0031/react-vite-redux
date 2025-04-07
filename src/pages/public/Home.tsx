import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Your one-stop shop for anything village-show related</h1>
      <p>
        Click here if you are a judge or have already registered and want to
        check or amend your submission.
      </p>
      <button id={"home-login-cta"} onClick={() => navigate("/login")}>
        Login
      </button>
      <p>Click here if you want to start a new registration.</p>
      <button id={"home-register-cta"} onClick={() => navigate("/register")}>
        Start registration
      </button>
    </div>
  );
};
