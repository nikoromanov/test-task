import axios from "axios";
import { IMessageFilter } from "./types";

export const messagesApi = {
  getMessages: (offset: number, filter: Partial<IMessageFilter> = {}) => {
    return axios.get("https://api.com/messages/", {
      params: { offset, limit: 20, ...filter },
    });
  },
  sendMessage: (text: string) => {
    return axios.post("https://api.com/messages/", {
      text,
    });
  },
  getFilters: () => {
    return axios.get("https://api.com/messages/filters/");
  },
};
