const name = require("../country/state/city/index.js");
const getFirstNames = require("../utilities/utils/index.js");

function getPeopleInCity(name) {
  return getFirstNames(name);
}

getPeopleInCity(name);

module.exports = getPeopleInCity;
