const theDuplicator = (number) => number * 2;

function myNumberTrasformer(number, transformer) {
    return transformer(number);
}

console.log(myNumberTrasformer(2, theDuplicator));


const studentGrades = [ 
    {name: 'Joe', grade: 88},
    {name: 'Jen', grade: 94},
    {name: 'Steph', grade: 77},
    {name: 'Allen', grade: 60},
    {name: 'Gina', grade: 54},
  ];

const studentFeedback = [
    'Nice Job Joe, you got an b',
    'Excellent Job Jen, you got an a',
    'Well done Steph, you got an c',
    'What happened Allen, you got an d',
    'Not good Gina, you got an f',
]; 
  
const greet = (studentFeedback) => {
    function greetName(studentGrades) {
    if (studentGrades.grade >= 90) return `Excellent Job Jen, you got an a ${studentGrades.name}`;
    if (studentGrades.grade >= 80) return `Nice Job Joe, you got an b ${studentGrades.name}`;
    if (studentGrades.grade >= 70) return `Well done Steph, you got an c ${studentGrades.name}`;
    if (studentGrades.grade >= 60) return `What happened Allen, you got an d ${studentGrades.name}`;
    return `Not good Gina, you got an f ${studentGrades.name}`;

    }
    return greetName;
};

console.log(studentGrades.map(greet(studentFeedback)));


const R = require('./rambda.min.js');

const nameArray = ["Mouayad", "Domi", "Max"];

const halloFunction = R.curry((prefix, item) => prefix + item);
const halloName = R.map(halloFunction('Hallo, geht es dir gut '), nameArray);

console.log(halloName);


let counter = 0;

function increment(counter) {
    return counter + 1;
}

counter =  increment(counter);

console.log(counter);