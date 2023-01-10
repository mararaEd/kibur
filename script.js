'use strict';

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFisrtWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher order functions
// const transformer = function (str, fn) {
//   console.log(`original String: ${str}`);
//   console.log(`Transformed String: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascprit is the best!', upperFisrtWord);
// transformer('Javascprit is the best!', oneWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('hello')('1');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(this);
//     console.log(`${name} booked ${flightNum} ${this.iataCode}`);
//     this.bookings.push({
//       flight: `${flightNum}${this.iataCode}`,
//       name,
//     });
//   },
// };

// lufthansa.book(233, 'Jonas Schmedtmann');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// book.call(eurowings, 234, 'John Wick');

// //// Partial application using bind
// // const addTax = (rate, value) => value + value * rate;

// // console.log(addTax(0.1, 10));

// // const addVATPortugal = addTax.bind(null, 0.23);
// // console.log(addVATPortugal(100));

// // Partial application using high order functions
// const addTax = rate => value => value + value * rate;

// const addVATPortugal = addTax(0.23);
// console.log(addVATPortugal(100));

//////////////// CODING CHALLENGE #1
// const poll = {
//   question: 'What is your favorite programming language?',
//   options: ['0: Javascpript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     const ans = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(write option number)`
//       )
//     );

//     this.options[ans] && this.answers[ans]++;
//     this.displayResults();
//   },

//   displayResults(type = 'string') {
//     let answers = this.answers;
//     if (!answers) answers = this;

//     if (type === 'string')
//       return console.log(`Poll results are: ${answers.join(', ')}`);
//     console.log(answers);
//   },
// };

// const registerNewAnswer = poll.registerNewAnswer.bind(poll);

// document.querySelector('.poll').addEventListener('click', registerNewAnswer);

// // BONUS
// const data1 = [5, 2, 3];
// const data2 = [1, 5, 3, 9, 6, 1];

// const displayResults = poll.displayResults;

// displayResults.call(data1);
// displayResults.call(data2, 'array');

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();

// let f;
// const g = function () {
//   const a = 23;

//   f = function () {
//     console.log(a * 2);
//   };
// };

// g();

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  header.addEventListener('click', handler);
  function handler() {
    header.style.color = 'blue';
  }
})();
