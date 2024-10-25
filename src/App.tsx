import { BrowserRouter, Route, Routes } from "react-router-dom";
import "src/App.css";
import Home from "src/components/Home";
import PublicList from "src/components/Public/PublicList";
import Admin from "src/routes/Admin";
import AppHeader from "src/components/AppHeader";
import { Container } from "@mui/material";
import { useQueryClient } from "react-query";
import { useEffect } from "react";
import Login from "src/components/Login";
import Signup from "src/components/SignUp";

function App() {
  const queryClient = useQueryClient();

  const handleWindowSizeChange = () => {
    queryClient.setQueryData("isMobile", window.innerWidth <= 768);
  };

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <AppHeader />
      <Container
        maxWidth="md"
        sx={{
          paddingTop: 10,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/public/*" element={<PublicList />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
