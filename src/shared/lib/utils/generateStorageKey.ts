import { DEFAULT_KEY } from "../../../app/constants/constants";

export const generateStorageKey = <T extends Record<string, unknown>>(
  props: T
) => {
  const entries = Object.entries(props);

  if (!entries.length) {
    return DEFAULT_KEY;
  }

  const sortedEntries = entries.sort(([key1], [key2]) => {
    if (key1 > key2) {
      return 1;
    } else {
      return -1;
    }
  });

  return sortedEntries.map(([_, value]) => value).join("_");
};
