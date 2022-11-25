const data = require('../data/zoo_data');

function isManager(id) {
  const managers = data.employees.reduce((manager, employee) =>
    [...manager, ...employee.managers], []);
  return managers.includes(id);
}

function getRelatedEmployees(managerId) {
  const managerColaborators = data.employees
    .filter((employee) => employee.managers.includes(managerId));

  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return managerColaborators.map((people) => `${people.firstName} ${people.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
