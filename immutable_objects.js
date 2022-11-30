const myName = "Mouayad";

console.log(myName);


const personData = {
    name: "Mouayad",
    age: 19,
    car: "Camaro ZL1"
};

console.log(personData);


const personDataTwo = {
    ...personData,
    job: ""
};

console.log(personDataTwo);


const personDataThree = {
    ...personDataTwo,
    job: "Programmer"
};

console.log(personDataThree);


const { job, ...newPerson} = personDataThree;

console.log(newPerson);