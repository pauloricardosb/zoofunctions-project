const data = require('../data/zoo_data');

const getSchedule = (dayName) => {
  const schedule = {};
  const days = Object.keys(data.hours);
  days.forEach((day) => {
    if (day === 'Monday') {
      schedule[day] = 'CLOSED';
    } else {
      schedule[day] = `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`;
    }
  });
  if (dayName) {
    return { [dayName]: schedule[dayName] };
  }
  return schedule;
}

module.exports = getSchedule;