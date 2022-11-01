const data = require('../data/zoo_data');

const childPrice = data.prices.child;
const adultPrice = data.prices.adult;
const seniorPrice = data.prices.senior;

function countEntrants(entrants) {
  let object;

  return entrants.reduce((entrantsObject, person) => {
    object = entrantsObject;
    const { age } = person;

    if (age < 18) {
      object.child += 1;
    } else if (age >= 50) {
      object.senior += 1;
    } else { object.adult += 1; }

    return object;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const ages = countEntrants(entrants);
  const { child, adult, senior } = ages;

  return (childPrice * child) + (adultPrice * adult) + (seniorPrice * senior);
}

module.exports = { calculateEntry, countEntrants };
