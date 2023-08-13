import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import messagesSlice from "../../pages/Messages/model/messagesSlice";
import usersSlice from "../../pages/User/model/usersSlice";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const store = configureStore({
  reducer: {
    messages: messagesSlice,
    users: usersSlice,
  },
});
