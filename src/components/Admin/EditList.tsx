import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Theme,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import useGetList from "src/hooks/useGetList";
import ListForm from "src/components/common/ListForm";
import WishList from "src/components/WishList";
import { useState } from "react";
import WishesListForm, {
  FormValues,
} from "src/components/common/WishesListForm";
import useGetListWishes from "src/hooks/useGetListWishes";
import { Close, Edit } from "@mui/icons-material";
import useUpdateListWishes from "src/hooks/useUpdateListWishes";
import useDeleteListWishes from "src/hooks/useDeleteListWishes";
import useUpdateListDetails from "src/hooks/useUpdateListDetails";
import List from "src/types/list";

function EditList() {
  const { pathname } = useLocation();
  const naviagete = useNavigate();
  const id = pathname.split("/")[3];
  const { data: list } = useGetList(id);
  const { data: wishes } = useGetListWishes(id);
  const [openDialog, setOpenDialog] = useState(false);
  const { mutateAsync: updateWishes } = useUpdateListWishes(id);
  const { mutateAsync: deleteWishes } = useDeleteListWishes(id);
  const { mutateAsync: updateList } = useUpdateListDetails(id);

  const handleCloseDialog = () => setOpenDialog(false);
  const handleAddClick = () => setOpenDialog(true);
  const backToList = () => naviagete(`/admin/list/${id}`);

  const handleWishesChange = async (
    data: FormValues,
    wishesToRemove: string[]
  ) => {
    try {
      await Promise.all([
        updateWishes(data.wishes),
        deleteWishes(wishesToRemove),
      ]);
      handleCloseDialog();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveUpdate = async (values: List) => {
    try {
      await updateList(values);
      backToList();
    } catch {
      console.error("Error updating list");
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {list && (
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                marginBottom: 2,
              }}
            >
              <ListForm
                defaultValues={list}
                onSubmit={handleSaveUpdate}
                header={
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        size="large"
                        variant="text"
                        onClick={backToList}
                        sx={{
                          marginInlineEnd: 1,
                          color: "#7a7a7a",
                          "&:hover": {
                            color: "#7a7a7a",
                            backgroundColor: "#c3c3c33b",
                          },
                        }}
                      >
                        cancel
                      </Button>
                      <Button
                        type="submit"
                        size="large"
                        variant="contained"
                        color="primary"
                      >
                        Save
                      </Button>
                    </Box>
                    <Typography
                      variant="h2"
                      sx={{
                        marginBottom: (theme: Theme) =>
                          theme.breakpoints.down("lg") ? 2 : 1,
                      }}
                    >
                      Edit List
                    </Typography>
                  </Box>
                }
              />
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ marginBottom: 2, textAlign: "start" }}
                >
                  Wishes
                </Typography>
                <Box py={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Edit />}
                    onClick={handleAddClick}
                  >
                    Edit Wishes
                  </Button>
                </Box>
              </Box>
              <WishList listId={id} />
            </Box>
          </Box>
        )}
      </Box>
      {openDialog && (
        <Dialog open maxWidth="lg" onClose={handleCloseDialog}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 2,
              paddingInlineStart: 4,
            }}
          >
            <Typography variant="h4">Add Wishes</Typography>
            <IconButton
              sx={{ alignSelf: "baseline" }}
              onClick={handleCloseDialog}
            >
              <Close />
            </IconButton>
          </Box>
          <DialogContent sx={{ padding: 2 }}>
            <WishesListForm wishes={wishes} onSubmitForm={handleWishesChange} />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

export default EditList;
