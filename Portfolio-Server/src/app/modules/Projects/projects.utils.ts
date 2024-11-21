export const areArraysEqualUnorderedDeep = (arr1: string[], arr2: string[]) => {
  if (arr1.length !== arr2.length) return false;

  const stringifyAndSort = (arr: string[]) =>
    arr.map((item) => JSON.stringify(item)).sort();

  const sortedArr1 = stringifyAndSort(arr1);
  const sortedArr2 = stringifyAndSort(arr2);

  return sortedArr1.every((value, index) => value === sortedArr2[index]);
};
