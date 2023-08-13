import { IIdAndName } from "../../../app/types/common";

export interface IDetailedUser extends IIdAndName {
  image: string;
  description: string;
  gender: string;
  birthdate: string;
  address: string;
}
