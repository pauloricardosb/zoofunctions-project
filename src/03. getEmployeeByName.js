const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return !employeeName ? {}
    : data.employees.find((employee) => employee.firstName === employeeName
    || employee.lastName === employeeName);
}

module.exports = getEmployeeByName;
