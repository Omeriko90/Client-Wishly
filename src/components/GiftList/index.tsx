import { Box } from "@mui/material";
import useGetListWishes from "src/hooks/useGetListWishes";
import { default as WishType } from "src/types/wish";
import Wish from "components/GiftList/Wish";
import { useState } from "react";
import WishDetailsDialog from "./WishDetailsDialog";

function GiftList() {
  const [selectedWish, setSelectedWish] = useState<string | null>(null);

  const { data: wishes } = useGetListWishes("66c98a6b262f8f3e5840e608");

  const handleWhishClick = (id: string) => {
    setSelectedWish(id);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        {wishes?.map((wish: WishType) => (
          <Wish key={wish._id} wish={wish} onClick={handleWhishClick} />
        ))}
      </Box>
      {selectedWish && (
        <WishDetailsDialog
          wishId={selectedWish}
          onClose={() => setSelectedWish(null)}
        />
      )}
    </>
  );
}

export default GiftList;
