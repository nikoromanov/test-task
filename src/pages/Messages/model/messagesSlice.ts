import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IMessage, IMessageFilter } from "./types";
import { IMessagesFilters } from "../../../msw/mocks/messages";
import { generateStorageKey } from "../../../shared/lib/utils/generateStorageKey";

export interface MessagesState {
  messages: Record<string, IMessage[]>;
  allMessagesCount: Record<string, number>;
  isPending: boolean;
  isLoading: boolean;
  filtersData: IMessagesFilters | null;
  appliedFilter: Partial<IMessageFilter>;
}

const initialState: MessagesState = {
  messages: {},
  allMessagesCount: {},
  isPending: false,
  isLoading: false,
  filtersData: null,
  appliedFilter: {},
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setInitialMessages: (
      state,
      action: PayloadAction<{
        messages: IMessage[];
        count: number;
        key: string;
        filter: Partial<IMessageFilter>;
      }>
    ) => {
      const { messages, count, key, filter } = action.payload;
      state.messages[key] = messages;
      state.allMessagesCount[key] = count;
      state.appliedFilter = filter;
    },
    addMessages: (
      state,
      action: PayloadAction<{ messages: IMessage[]; key: string }>
    ) => {
      const { messages, key } = action.payload;
      state.messages[key] = [...(state.messages[key] ?? []), ...messages];
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsPending: (state, action: PayloadAction<boolean>) => {
      state.isPending = action.payload;
    },
    optimisticAddMessage: (state, action: PayloadAction<IMessage>) => {
      const currentMessagesKey = generateStorageKey(state.appliedFilter);
      state.messages[currentMessagesKey] = [
        action.payload,
        ...(state.messages[currentMessagesKey] ?? []),
      ];
      state.allMessagesCount[currentMessagesKey]++;
    },
    updateId: (
      state,
      action: PayloadAction<{ oldId: number; newId: number }>
    ) => {
      const { oldId, newId } = action.payload;
      const currentMessagesKey = generateStorageKey(state.appliedFilter);
      const index = state.messages[currentMessagesKey]?.findIndex(
        (msg) => msg.id === oldId
      );

      const message = state.messages[currentMessagesKey]?.[index];

      if (!message) return;

      message.id = newId;
      message.isPending = false;
    },
    setMsgError: (state, action: PayloadAction<number>) => {
      const currentMessagesKey = generateStorageKey(state.appliedFilter);
      const index = state.messages[currentMessagesKey]?.findIndex(
        (msg) => msg.id === action.payload
      );

      const message = state.messages[currentMessagesKey]?.[index];

      if (!message) return;

      message.isPending = false;
      message.isError = true;
    },
    setFiltersData: (state, action: PayloadAction<IMessagesFilters>) => {
      state.filtersData = action.payload;
    },
  },
});

export const messagesActions = messagesSlice.actions;

export default messagesSlice.reducer;
