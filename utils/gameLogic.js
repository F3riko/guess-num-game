const generateRandomNumber = (min, max, exclusion) => {
  let randomNum;
  do {
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (randomNum === exclusion);
  return randomNum;
};

export { generateRandomNumber };
