const array = [4, 3, 2, 1];

const obj = array.reduce((acc, curr, index) => {
  acc[index] = curr;
  console.log(acc);
  return acc;
}, {});
