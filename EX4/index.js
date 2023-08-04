/**
 * Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
@example 60°C is 140 °F
@example 45°F is 7.222222222222222°C
 */
function convertCelciusToFahrenheit(celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}
console.log(convertCelciusToFahrenheit(60));

function convertFahrenheitToCelcius(fahrenheit) {
  const celsius = (fahrenheit - 32) / 1.8;
  return celsius;
}
console.log(convertFahrenheitToCelcius(45));
