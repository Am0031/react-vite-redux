import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemText,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { logout } from "../../store/reducers/userSlice";
import { toggleDrawer } from "../../store/reducers/menuSlice";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userRole = useSelector((state: RootState) => state.user.role);
  const drawerOpen = useSelector((state: RootState) => state.menu.drawerOpen);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleDrawerToggle = () => {
    dispatch(toggleDrawer());
  };

  return (
    <>
      <AppBar position="fixed" sx={{ width: "100%" }}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Village Show
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {userRole ? (
              <>
                <Typography variant="body1" sx={{ marginRight: 2 }}>
                  Role: {userRole}
                </Typography>
                <Button
                  id={"navbar-home"}
                  color="inherit"
                  onClick={() => navigate("/")}
                >
                  Home
                </Button>
                <Button
                  id={"navbar-logout"}
                  color="inherit"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                id={"navbar-login"}
                color="inherit"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            )}
            <Button
              id={"navbar-drawer"}
              color="inherit"
              onClick={handleDrawerToggle}
            >
              {drawerOpen ? "Close Menu" : "Open Menu"}{" "}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Menu Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{ width: 250, padding: 2 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <Button
            sx={{ marginBottom: "1rem" }}
            onClick={(e) => {
              e.stopPropagation();
              handleDrawerToggle();
            }}
          >
            X
          </Button>
          <List>
            <Button onClick={() => navigate("/login")}>
              <ListItemText primary="Profile" />
            </Button>
            <Button onClick={() => navigate("/register")}>
              <ListItemText primary="Settings" />
            </Button>
            <Button onClick={() => navigate("/")}>
              <ListItemText primary="Home" />
            </Button>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
