import { Route, Routes } from "react-router-dom";
import ListDetails from "src/components/Admin/ListDetails";
import UserEventsList from "src/components/Admin/UserEventsList";
import PublicList from "src/components/Public/PublicList";

function Admin() {
  return (
    <Routes>
      <Route path="/list/add" element={<PublicList />} />
      <Route path="/list/:id" element={<ListDetails />} />
      <Route path="/lists" element={<UserEventsList />} />
    </Routes>
  );
}

export default Admin;
