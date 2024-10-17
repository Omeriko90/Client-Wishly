import { BrowserRouter, Route, Routes } from "react-router-dom";
import "src/App.css";
import Home from "src/components/Home";
import PublicList from "src/components/Public/PublicList";
import Admin from "src/routes/Admin";
import AppHeader from "src/components/AppHeader";
import { Container } from "@mui/material";
import Login from "src/components/Public/Login";
import Signup from "src/components/Public/SignUp";

function App() {
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
            <Route path="/" element={<Home />} />
            <Route path="/public/*" element={<PublicList />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
