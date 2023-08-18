import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IDetailedUser } from "./types";

export interface UsersState {
  users: Record<string, IDetailedUser>;
  isLoading: Record<string, boolean>;
}

const initialState: UsersState = {
  users: {},
  isLoading: {},
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ id: number; user: IDetailedUser }>
    ) => {
      const { id, user } = action.payload;

      state.users[id] = user;
    },
    setIsLoading: (
      state,
      action: PayloadAction<{ id: number; status: boolean }>
    ) => {
      const { id, status } = action.payload;

      state.isLoading[id] = status;
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;
