import { BrowserRouter, Route, Routes } from "react-router-dom";
import "src/App.css";
import Home from "src/components/Home";
import PublicList from "src/components/Public/PublicList";
import Admin from "src/routes/Admin";
import AppHeader from "src/components/AppHeader";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <AppHeader />
      <Container
        maxWidth="md"
        sx={{
          paddingTop: 10,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/public/*" element={<PublicList />} />
            <Route path="/admin/*" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
