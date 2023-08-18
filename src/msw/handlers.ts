import { nanoid } from "@reduxjs/toolkit";
/* import { rest, RestRequest } from "msw";
import { FORBIDDEN_WORD, MY_PROFILE } from "../app/constants/constants";
import { IMessage } from "../pages/Messages/model/types";
import { sleep } from "../mock/helpers";
import { mockMessages, mockMessagesFilters } from "../mock/mocks/messages";
import { mockDetailedUsers, mockUsers } from "../mock/mocks/users";

export const handlers = [
  rest.get("https://api.com/messages/", async (req, res, ctx) => {
    const offset = +(req.url.searchParams.get("offset") ?? 0);
    const limit = +(req.url.searchParams.get("limit") ?? 0);
    const userId = req.url.searchParams.get("authorId");

    let filteredData: IMessage[] = mockMessages;

    if (userId !== undefined && userId !== null) {
      filteredData = mockMessages.filter((msg) => msg.author.id === +userId!);
    }

    const slicedData = filteredData.slice(offset, offset + limit);

    await sleep();

    return res(
      ctx.status(200),
      ctx.json({ results: slicedData, count: filteredData.length })
    );
  }),

  rest.get("https://api.com/users/:id", async (req, res, ctx) => {
    const { id } = req.params;

    const user = mockDetailedUsers.find((user) => +user.id === +id);

    await sleep(700);

    if (!user) {
      return res(ctx.status(400), ctx.json({ error: "User not found" + id }));
    }

    return res(ctx.status(200), ctx.json(user));
  }),

  rest.get("https://api.com/messages/filters/", async (req, res, ctx) => {
    await sleep();
    return res(ctx.status(200), ctx.json(mockMessagesFilters));
  }),
];
 */
