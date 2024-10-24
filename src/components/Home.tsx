import reactLogo from "../assets/react.svg";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Login from "src/components/Login";
import Signup from "src/components/SignUp";

function Home() {
  const navigate = useNavigate();

  const handleRoute1 = () => navigate("/public/list/66c98a6b262f8f3e5840e608");
  const handleRoute2 = () => navigate("/signup");
  const handleRoute3 = () => navigate("/login");

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Button onClick={handleRoute3} variant="contained" color="primary">
          Login
        </Button>
        <Button onClick={handleRoute1} variant="contained" color="primary">
          Go to Route1
        </Button>
        <Button onClick={handleRoute2} variant="contained" color="primary">
          Sign Up
        </Button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Home;
