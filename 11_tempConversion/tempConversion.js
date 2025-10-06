const convertToCelsius = function(degrees) {
  let celcius = Math.round(((degrees - 32) * 5 / 9)*10)/10;
  return celcius;
};

const convertToFahrenheit = function(degrees) {
  let fahrenheit = Math.round(((degrees * 9 / 5) + 32)*10)/10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
