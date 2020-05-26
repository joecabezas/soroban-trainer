export const createRange = (min, max) => {
  return Array(max).fill(0).map((_, i) => min + i);
};

export const createOptionsFromArray = (arr) => {
  return arr.reduce((hash, item) => {
    hash[item] = item; return hash;
  }, {});
};

export const createIndexedOptionsFromArray = (arr) => {
  return arr.reduce((hash, item, index) => {
    hash[index] = item; return hash;
  }, {});
};
