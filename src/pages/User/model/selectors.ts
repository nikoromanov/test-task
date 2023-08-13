import { RootState } from "../../../app/store/store";

export const userDetailedSelecor = (state: RootState) => state.users.users;

export const userDetailedIsLoadingSelecor = (state: RootState) =>
  state.users.isLoading;
