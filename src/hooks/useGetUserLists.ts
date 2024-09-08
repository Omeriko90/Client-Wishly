import { useQuery, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import Api from "src/api";
import { RootState } from "src/store";
import List from "src/types/list";

function useGetUserLists() {
  const queryCleint = useQueryClient();
  const userId = useSelector((state: RootState) => state.users.userId);
  console.log(userId);
  return useQuery(["user-lists", userId], async () => {
    const lists = await Api.getUserLists(userId);
    lists?.data?.forEach((list: List) => {
      queryCleint.setQueryData(["list", list._id], list);
    });
    return lists.data;
  });
}

export default useGetUserLists;