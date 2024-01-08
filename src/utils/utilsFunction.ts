export const CompareWithStringify = (obj: object, target: object) => {
  return JSON.stringify(obj) === JSON.stringify(target);
};
