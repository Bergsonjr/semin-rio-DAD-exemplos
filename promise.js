const promiseExample = (number) => {
  return Promise.resolve(number)
    .then((val) => {
      return Promise.resolve(val * val);
    })
    .then((val) => {
      return { resultado: val };
    });
};

module.exports = promiseExample;
