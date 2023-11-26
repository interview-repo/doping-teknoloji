export const getKeys = Object.keys as <T extends object>(
  obj: T
) => Readonly<Array<keyof T>>;
