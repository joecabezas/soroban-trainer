export const generateRandomNumer = (numberOfDigits) => {
  const min = Math.pow(10, numberOfDigits - 1);
  const max = Math.pow(10, numberOfDigits) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateNumbers = (numberOfNumbers, numberOfDigits) => {
  const arr = [];
  while (arr.length < numberOfNumbers) {
    arr.push(generateRandomNumer(numberOfDigits));
  }
  return arr;
};
