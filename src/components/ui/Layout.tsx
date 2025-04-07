import { Container, Box } from "@mui/material";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Navbar />
      <Container
        component="main"
        sx={{
          flexGrow: 1,
          mt: 10,
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
