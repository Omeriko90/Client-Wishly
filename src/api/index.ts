import api from "./api";

const Api = {
  getUserLists: (userId: string) => api.get(`/user/${userId}/lists`),
  getList: (listId: string) => api.get(`/list/${listId}`),
  getListWishes: (listId: string) => api.get(`/list/${listId}/wishes`),
};

export default Api;
