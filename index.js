const addDays = require("date-fns/addDays");
let days = 1;
module.exports = function (days) {
  const res = addDays(new Date(2020, 7, 22), days);
  return `${res.getDate()}-${res.getMonth() + 1}-${res.getFullYear()}`;
};
//const res = addDays(new Date(2020, 7, 22), 1);
//console.log(res);
