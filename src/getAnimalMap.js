const data = require('../data/zoo_data');

const objAnimalNames = (animal, options) => {
  const { sex, sorted } = options;
  const { residents } = data.species.find(({ name }) => name === animal);
  const objAnimalResidents = {
    [animal]: residents.map(({ name }) => name),
  };
  if (sex) {
    const arraySex = residents.filter((resident) => resident.sex === sex);
    objAnimalResidents[animal] = arraySex.map(({ name }) => name);
  }
  if (sorted) {
    objAnimalResidents[animal].sort();
  }
  return objAnimalResidents;
};

function getAnimalMap(options) {
  const defaultObj = {
    NE: data.species.filter(({ location }) => location === 'NE').map(({ name }) => name),
    NW: data.species.filter(({ location }) => location === 'NW').map(({ name }) => name),
    SE: data.species.filter(({ location }) => location === 'SE').map(({ name }) => name),
    SW: data.species.filter(({ location }) => location === 'SW').map(({ name }) => name),
  };
  const insertAnimals = () => {
    defaultObj.NE = defaultObj.NE.map((animal) => objAnimalNames(animal, options));
    defaultObj.NW = defaultObj.NW.map((animal) => objAnimalNames(animal, options));
    defaultObj.SE = defaultObj.SE.map((animal) => objAnimalNames(animal, options));
    defaultObj.SW = defaultObj.SW.map((animal) => objAnimalNames(animal, options));
  };
  if (!options || !options.includeNames) {
    return defaultObj;
  }
  insertAnimals();
  return defaultObj;
}
module.exports = getAnimalMap;
