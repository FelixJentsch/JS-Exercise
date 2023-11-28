console.clear();

const cities = [
  {
    name: "Berlin",
    language: "German",
    country: "Germany",
    population: 3645000,
  },
  {
    name: "Vienna",
    language: "German",
    country: "Austria",
    population: 1897000,
  },
  { name: "Paris", language: "French", country: "France", population: 2161000 },
  { name: "Rome", language: "Italian", country: "Italy", population: 2873000 },
  {
    name: "Madrid",
    language: "Spanish",
    country: "Spain",
    population: 3223000,
  },
];

function getCitiesByLanguage(cities, language) {
  const filteredCities = cities.filter((city) => city.language === language);
  return filteredCities;
}
const germanCities = getCitiesByLanguage(cities, "German");
/* console.log(germanCities); */

// write a function callled 'getCitiesByLanguages'
// that takes an array of cities and a language as parameter
// and returns all cities where the passed language is spoken

function getCitiesBiggerThan(cities, population) {
  const citiesByPop = cities.filter((city) => city.population > population);
  return citiesByPop;
}

const bigCity = getCitiesBiggerThan(cities, 2200000);
/* console.log(bigCity); */

// write a function called 'getCitiesByggerThan'
// that takes an array of cities and a number as parameter
// and returns all the cities with more people than the passed number

function getCountries(cities) {
  const countries = cities.map((city) => city.country);
  return countries;
}

const countryNames = getCountries(cities);
console.log(countryNames);
// write a function called 'getCountries'
// that takes an array of cities
// and returns an array of strings containing the corresponding countries

// remember to set your expectation before!
//
// console.log(getCitiesByLanguages(..., ...)); // should log ...
