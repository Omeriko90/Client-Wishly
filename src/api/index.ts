import Wish from "src/types/wish";
import api from "./api";
import User from "src/types/user";
import List from "src/types/list";
import { AxiosResponse } from "axios";

interface ApiType {
  getUserLists: (userId: string) => Promise<AxiosResponse<User[]>>;
  getList: (listId: string) => Promise<AxiosResponse<List>>;
  getListWishes: (listId: string) => Promise<AxiosResponse<Wish[]>>;
  updateListDetails: (
    listId: string,
    list: List
  ) => Promise<AxiosResponse<List>>;
  updateListWishes: (
    listId: string,
    wishes: Wish[]
  ) => Promise<AxiosResponse<Wish[]>>;
  deleteListWishes: (
    listId: string,
    wishIds: string[]
  ) => Promise<AxiosResponse<boolean>>;
}

const Api: ApiType = {
  getUserLists: (userId: string) => api.get(`/user/${userId}/lists`),
  getList: (listId: string) => api.get(`/list/${listId}`),
  getListWishes: (listId: string) => api.get(`/list/${listId}/wishes`),
  updateListDetails: (listId: string, list: List) =>
    api.put(`/list/${listId}`, list),
  updateListWishes: (listId: string, wishes: Wish[]) =>
    api.put(`/list/${listId}/wishes`, { wishes }),
  deleteListWishes: (listId: string, wishIds: string[]) =>
    api.delete(`/list/${listId}/wishes`, { data: { wishIds } }),
};

export default Api;
