import { Box, Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import WishList from "../WishList";
import useGetList from "src/hooks/useGetList";

function PublicList() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const id = pathname.split("/")[3];
  const { data: list } = useGetList(id);

  const handleBack = () => navigate("/");

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h1">{list?.title}</Typography>
      <WishList listId={id} withUserSelection />
      <Button variant="contained" color="primary" onClick={handleBack}>
        Back
      </Button>
    </Box>
  );
}

export default PublicList;
