import { RootState } from "../../../app/store/store";

export const messagesSelector = (state: RootState) => state.messages.messages;

export const messagesCountSelector = (state: RootState) =>
  state.messages.allMessagesCount;

export const messagesLoadingSelector = (state: RootState) =>
  state.messages.isLoading;

export const messagesPendingSelector = (state: RootState) =>
  state.messages.isPending;

export const messagesFiltersSelector = (state: RootState) =>
  state.messages.filtersData;
