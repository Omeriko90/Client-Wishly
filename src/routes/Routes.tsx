import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "src/components/Home";
import Login from "src/components/Login";
import Signup from "src/components/SignUp";
import Admin from "src/routes/Admin";
import Public from "src/routes/Public";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/public/*" element={<Public />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
