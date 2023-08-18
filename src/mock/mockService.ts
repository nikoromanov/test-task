import { sleep } from "./helpers";
import { IMessage } from "../pages/Messages/model/types";
import { mockMessages, mockMessagesFilters } from "./mocks/messages";
import { nanoid } from "@reduxjs/toolkit";
import { FORBIDDEN_WORD } from "../app/constants/constants";
import { AxiosError } from "axios";
import { mockDetailedUsers } from "./mocks/users";

export const mockService = {
  getMessages: async ({
    offset,
    limit,
    authorId,
  }: {
    offset: number;
    limit: number;
    authorId?: number;
  }) => {
    let filteredData: IMessage[] = mockMessages;
    if (authorId !== undefined && authorId !== null) {
      filteredData = mockMessages.filter((msg) => msg.author.id === +authorId!);
    }

    const slicedData = filteredData.slice(offset, offset + limit);

    await sleep();

    return {
      status: 200,
      data: { results: slicedData, count: filteredData.length },
    };
  },
  sendMessage: async (text: string) => {
    const newId = Date.now();

    await sleep();

    if (text === FORBIDDEN_WORD) {
      throw new AxiosError("Message contains forbidden word", "400");
    }

    return {
      status: 200,
      data: { id: newId },
    };
  },
  getMessageFilters: async () => {
    await sleep();

    return {
      status: 200,
      data: mockMessagesFilters,
    };
  },
  getUser: async (id: number) => {
    await sleep(700);

    const user = mockDetailedUsers.find((user) => user.id === id);

    if (!user) {
      throw new AxiosError("User not found", "404");
    }

    return {
      status: 200,
      data: user,
    };
  },
};
