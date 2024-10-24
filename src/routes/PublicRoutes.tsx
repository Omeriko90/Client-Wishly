import { Box, Theme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Login from "src/components/Login";
import Signup from "src/components/SignUp";

function PublicRoutes() {
  return (
    <Box
      sx={{
        display: "flex",
        width: { md: 850, sm: 600, xs: "100%" },
        alignItems: (theme: Theme) =>
          theme.breakpoints.down("lg") ? "flex-start" : "center",
        height: "100%",
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Box>
  );
}

export default PublicRoutes;
