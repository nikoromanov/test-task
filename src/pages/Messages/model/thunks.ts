import { Dispatch } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { MY_PROFILE } from "../../../app/constants/constants";
import { RootState } from "../../../app/store/store";
import { generateStorageKey } from "../../../shared/lib/utils/generateStorageKey";
import { messagesApi } from "./api";
import { messagesActions } from "./messagesSlice";
import { IMessageFilter } from "./types";

export const getMessages =
  (offset: number, filter: Partial<IMessageFilter>) =>
  (dispatch: Dispatch, getState: () => RootState) => {
    dispatch(messagesActions.setIsLoading(true));
    const key = generateStorageKey(filter);
    messagesApi
      .getMessages(offset, filter)
      .then(({ data }) => {
        if (!getState().messages.messages[key]?.length) {
          dispatch(
            messagesActions.setInitialMessages({
              messages: data.results,
              count: data.count,
              key,
              filter,
            })
          );
        } else {
          dispatch(
            messagesActions.addMessages({ messages: data.results, key })
          );
        }
      })
      .catch((err) => {
        //handle error
      })
      .finally(() => {
        dispatch(messagesActions.setIsLoading(false));
      });
  };

export const sendMessage = (text: string) => (dispatch: Dispatch) => {
  const id = Date.now();
  dispatch(messagesActions.setIsPending(true));
  dispatch(
    messagesActions.optimisticAddMessage({
      id,
      author: MY_PROFILE,
      text,
      createdAt: dayjs().format(),
      isPending: true,
    })
  );
  messagesApi
    .sendMessage(text)
    .then(({ data }) => {
      dispatch(messagesActions.updateId({ oldId: id, newId: data.id }));
    })
    .catch(() => {
      dispatch(messagesActions.setMsgError(id));
    })
    .finally(() => {
      dispatch(messagesActions.setIsPending(false));
    });
};

export const getMessagesFilters = () => (dispatch: Dispatch) => {
  messagesApi
    .getFilters()
    .then(({ data }) => {
      dispatch(messagesActions.setFiltersData(data));
    })
    .catch((err) => {
      //handle error
    });
};
