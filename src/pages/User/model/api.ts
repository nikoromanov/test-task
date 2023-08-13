import axios from "axios";

export const usersApi = {
  getDetailedUser: (id: string) => {
    return axios.get(`https://api.com/users/${id}`);
  },
};
