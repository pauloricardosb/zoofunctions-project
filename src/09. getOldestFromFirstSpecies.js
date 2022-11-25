const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const firstAnimal = data.species
    .find((animal) => animal.id === animalId).residents;
  const higherAge = Math.max(...firstAnimal.map((animal) => animal.age));
  const oldestAnimal = firstAnimal.find((animal) => animal.age === higherAge);

  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
