import { Box, Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import GiftList from "../GiftList";
import useGetList from "src/hooks/useGetList";

function PublicList() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const id = pathname.split("/")[3];
  const { data: list } = useGetList(id);
  const handleBack = () => navigate("/");
  console.log(id, list);
  return (
    <Box
      sx={{
        width: 850,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h1">{list?.title}</Typography>
      <GiftList />
      <Button variant="contained" color="primary" onClick={handleBack}>
        Back
      </Button>
    </Box>
  );
}

export default PublicList;
