/**
 * Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38
Hint: Use Date() object in javascript
 */
function getCurrentDay() {
  const date = new Date();
  let options = {
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
console.log(getCurrentDay());
