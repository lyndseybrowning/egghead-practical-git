const sum = (...values) => {
  return values.reduce((sum, val) => sum + val, 0);
};

console.log(sum(1, 2, 3, 4, 5));
