const sum = (...values) => {
  return values.reduce((sum, val) => {
    return sum + val;
  }, 0);
};

console.log(sum(1, 2, 3, 4, 5));
