const addDays = require("date-fns/addDays");
module.exports = function (days) {
  const res = addDays(new Date(22, 7, 2020), days);
  return `${res.getDate()}-${res.getMonth + 1}-${res.getFullYear()}`;
};
