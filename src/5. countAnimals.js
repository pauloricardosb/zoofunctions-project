const data = require('../data/zoo_data');

function getAnimals() {
  const animalCount = {};
  data.species.forEach((animal) => {
    animalCount[animal.name] = animal.residents.length;
    return animalCount;
  });
  return animalCount;
}

function countAnimals(animal) {
  if (!animal) {
    return getAnimals();
  }

  const { specie } = animal;
  const animalFound = data.species.find((ani) => ani.name === specie);

  if (Object.keys(animal).length === 1) {
    return animalFound.residents.length;
  }
  const countSex = animalFound.residents.filter((ani) => ani.sex === 'female');
  return countSex.length;
}

console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;
