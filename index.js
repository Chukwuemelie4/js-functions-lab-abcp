// write your code below!
// 1 begins
function happyHolidays(){
  return 'Happy holidays!'
}
console.log (happyHolidays())
/*
3. Write a function named `happyHolidayTo`. This function should accept two parameters, the holiday you want to wish them well for,
 and the name of the person you're wishing well. This function should return the string `` `Happy ${holiday}, ${name}!` ``
4. Write a function named `holidayCountdown`. This function should accept two parameters,
the holiday name and number of days till that holiday. The function should return the string `` `It's ${days} days until ${holiday}!` ``
*/
// 2 begins
function happyHolidaysTo(name){
return `Happy holidays, ${name}!`
}
console.log(happyHolidaysTo(Adrienne))
// 3 begins
function happyHolidayTo(holiday,name){
  return `Happy ${holiday}, ${name}!`
}
console.log(happyHolidayTo(Valentine day, Jennifer))
// 4 begins
function holidayCountdown(holiday,days){
  return `It's ${days} days until ${holiday}!`
}
console.log(holidayCountdown(your birthday,4))
