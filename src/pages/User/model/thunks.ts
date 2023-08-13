import { Dispatch } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store/store";
import { usersApi } from "./api";
import { usersActions } from "./usersSlice";

export const getUser =
  (id: string) => (dispatch: Dispatch, getState: () => RootState) => {
    if (!getState().users.users[id]) {
      dispatch(usersActions.setIsLoading({ id, status: true }));
    }
    usersApi
      .getDetailedUser(id)
      .then(({ data }) => {
        dispatch(usersActions.setUser({ id, user: data }));
      })
      .catch((err) => {
        //handle error
      })
      .finally(() => {
        dispatch(usersActions.setIsLoading({ id, status: false }));
      });
  };
