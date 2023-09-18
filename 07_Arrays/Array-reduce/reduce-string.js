const cities = ["Vancouver", "Berlin", "Seattle", "Toronto"];

const concatCities = cities.reduce((concatStrings, city) => {
  return concatStrings + city + "-";
}, "");

console.log(concatCities);
