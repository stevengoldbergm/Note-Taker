// Generate random numbers to use for unique note ids
const uuid = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  module.exports = uuid;