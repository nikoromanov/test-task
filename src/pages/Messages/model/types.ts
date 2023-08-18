import { IIdAndName } from "../../../app/types/common";

export interface IMessage {
  id: number;
  author: IIdAndName & { image: string };
  text: string;
  createdAt: string;
  isPending?: boolean;
  isError?: boolean;
}

export interface IMessageFilter {
  authorId: number;
}
