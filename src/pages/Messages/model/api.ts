import { httpService } from "../../../app/core/httpService";
import { IMessageFilter } from "./types";

export const messagesApi = {
  getMessages: (offset: number, filter: Partial<IMessageFilter> = {}) => {
    return httpService.getMessages({
      offset,
      limit: 20,
      ...filter,
    });
  },
  sendMessage: (text: string) => {
    return httpService.sendMessage(text);
  },
  getFilters: () => {
    return httpService.getMessageFilters();
  },
};
