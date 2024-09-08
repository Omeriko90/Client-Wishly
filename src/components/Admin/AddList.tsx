import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Route2() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/");
  return (
    <div>
      <h1>Route2</h1>
      <Button variant="contained" color="primary" onClick={handleBack}>
        Back
      </Button>
    </div>
  );
}

export default Route2;
