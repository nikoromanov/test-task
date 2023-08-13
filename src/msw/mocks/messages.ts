import { IMessage } from "../../pages/Messages/model/types";

import dayjs from "dayjs";
import { getRandomItemFromArr } from "../helpers";
import { mockDetailedUsers, mockUsers } from "./users";
import { MY_PROFILE } from "../../app/constants/constants";

const today = dayjs().format();
const yesterday = dayjs().add(-1, "days").format();

const mocktexts = [
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maxime blanditiis in. Ullam consequuntur nobis mollitia vitae, odit quae aperiam.",
  "Some message",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maxime blanditiis in. Ullam consequuntur nobis mollitia vitae, odit quae aperiam.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maxime blanditiis in. Ullam consequuntur nobis mollitia vitae, odit quae aperiam.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maxime blanditiis in. Ullam consequuntur nobis mollitia vitae, odit quae aperiam.",
  "Hello world",
  "Some another message",
];

const generateMockMessages = (count: number) => {
  const res: IMessage[] = [];

  for (let i = 0; i < count; i++) {
    res.push({
      id: i + 1,
      author: getRandomItemFromArr([...mockUsers, MY_PROFILE]),
      createdAt: i < 10 ? today : yesterday,
      text: getRandomItemFromArr(mocktexts),
    });
  }

  return res;
};

export const mockMessages = generateMockMessages(100);

export const mockMessagesFilters = [
  {
    type: "select",
    options: mockDetailedUsers.map((user) => ({
      value: user.id,
      label: user.name,
    })),
    label: "Author",
  },
];

export type IMessagesFilters = typeof mockMessagesFilters;
