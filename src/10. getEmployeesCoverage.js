const data = require('../data/zoo_data');

const getEmployeesCoverage = (idOrName) => {
  const employees = {};
  data.employees.forEach((employee) => {
    employees[`${employee.firstName} ${employee.lastName}`] = employee.responsibleFor.map((animalId) => data.animals.find((animal) => animal.id === animalId).name);
  });
  if (idOrName) {
    const employee = data.employees.find((e) => e.id === idOrName || e.firstName === idOrName || e.lastName === idOrName);
    return { [`${employee.firstName} ${employee.lastName}`]: employees[`${employee.firstName} ${employee.lastName}`] };
  }
  return employees;
}

module.exports = getEmployeesCoverage;