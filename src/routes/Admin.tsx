import { Box, Theme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import AddList from "src/components/Admin/AddList";
import EditList from "src/components/Admin/EditList";
import ListDetails from "src/components/Admin/ListDetails";
import UserEventsList from "src/components/Admin/UserEventsList";

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
        <Route path="/list/add" element={<AddList />} />
        <Route path="/list/:id" element={<ListDetails />} />
        <Route path="/list/:id/edit" element={<EditList />} />
        <Route path="/lists" element={<UserEventsList />} />
      </Routes>
    </Box>
  );
}

export default Admin;
