const randomNumber = () => {
  let number = Math.floor(Math.random() * 1000000) + 100000;
  if (number > 1000000) {
    number = number - 100000;
  }

  return number;
};

export default randomNumber;
