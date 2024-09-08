import { Route, Routes } from "react-router-dom";
import PublicList from "src/components/Public/PublicList";

function Public() {
  return (
    <Routes>
      <Route path="/list/:id" element={<PublicList />} />
    </Routes>
  );
}

export default Public;
