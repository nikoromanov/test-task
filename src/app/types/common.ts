export interface IIdAndName {
  id: number;
  name: string;
}

export type AtLeastOne<T> = { [K in keyof T]: Pick<T, K> }[keyof T];
