const LAST_DATE = new Date("2021-09-02");

const getDaysSinceLastCentury = () =>
  Math.round(Math.abs((new Date() - LAST_DATE) / (24 * 60 * 60 * 1000)));

document.getElementById(
  "days-since-count"
).textContent = `${getDaysSinceLastCentury()} Days`;
