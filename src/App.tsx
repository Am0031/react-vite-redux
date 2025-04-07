import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Home as PublicHome } from "./pages/public/Home";
import { About } from "./pages/public/About";
import { ParticipantDashboard } from "./pages/participant/Dashboard";
import { JudgeDashboard } from "./pages/judge/Dashboard";
import { AdminDashboard } from "./pages/admin/Dashboard";
import { Login } from "./components/auth/Login";
import "./App.css";
import { ReactNode } from "react";
import Layout from "./components/ui/Layout";
import { EntryForm } from "./pages/public/EntryForm";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<PublicHome />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<EntryForm />} />
                <Route path="/login" element={<Login />} />
                <Route
                  element={
                    <ProtectedRoute>
                      <DashboardWrapper />
                    </ProtectedRoute>
                  }
                >
                  <Route path="/dashboard" element={<DashboardWrapper />} />
                </Route>
              </Routes>
            </Layout>
          </Router>
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  );
};

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const userRole = useSelector((state: RootState) => state.user.role);

  if (!userRole) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

const DashboardWrapper = () => {
  const userRole = useSelector((state: RootState) => state.user.role);

  if (!userRole) {
    return <Navigate to="/login" />;
  }

  switch (userRole) {
    case "participant":
      return <ParticipantDashboard />;
    case "judge":
      return <JudgeDashboard />;
    case "admin":
      return <AdminDashboard />;
    default:
      return <Navigate to="/" />;
  }
};

export default App;
