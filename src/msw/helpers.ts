export const getRandomItemFromArr = <T extends any>(arr: T[]) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

export const sleep = (time: number = 500) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(void 0);
    }, time);
  });
};
