import { Box, Theme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import AddList from "src/components/Admin/AddList";
import EditList from "src/components/Admin/EditList";
import ListDetails from "src/components/Admin/ListDetails";
import UserEventsList from "src/components/Admin/UserEventsList";
import Login from "src/components/Login";
import Signup from "src/components/SignUp";

function Admin() {
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
        <Route path="/list/add" element={<AddList />} />
        <Route path="/list/:id" element={<ListDetails />} />
        <Route path="/list/:id/edit" element={<EditList />} />
        <Route path="/lists" element={<UserEventsList />} />
      </Routes>
    </Box>
  );
}

export default Admin;
