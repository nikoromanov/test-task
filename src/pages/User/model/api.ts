import { httpService } from "../../../app/core/httpService";

export const usersApi = {
  getDetailedUser: (id: number) => {
    return httpService.getUser(id);
  },
};
