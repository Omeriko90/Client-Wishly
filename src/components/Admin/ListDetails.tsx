import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import useGetList from "src/hooks/useGetList";
import ListForm from "../common/ListForm";

function ListDetails() {
  const { pathname } = useLocation();
  const id = pathname.split("/")[3];
  const { data: list } = useGetList(id);

  return <Box>{list && <ListForm defaultValues={list} />}</Box>;
}

export default ListDetails;
