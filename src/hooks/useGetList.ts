import { useQuery } from "react-query";
import Api from "../api";

function useGetList(listId: string) {
  return useQuery(["list", listId], async () => {
    const list = await Api.getList(listId);
    return list.data;
  });
}

export default useGetList;
