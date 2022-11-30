const personData = [
    {
        id: 1,
        name: "Mouayad",
        age: 19
    }
];

console.log(personData);


const personDataTwo = [
    ...personData,
    {
        cars: ""
    }
];

console.log(personDataTwo);


const updatePersonData = personDataTwo.map(changeAge);
function changeAge(personDataTwo) {
    if (personDataTwo.id === 1) {
        return {
            ...personDataTwo,
            car: "Camaro ZL1"
        }
    }
    return personDataTwo;
}

const reducedPersonData = updatePersonData.filter((updatePersonData) => {
    return updatePersonData.id !== 2;
})

console.log(reducedPersonData);


const reviews  = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];
const total = reviews.reduce((a, g) => a + g);
const average = total / reviews.length;

console.log(average);


const numbers  = reviews.reduce((sum, rev) => {

    if (rev >= 4) {
        sum.good++;
    } 
    else if (rev >= 2.5) {
        sum.ok++;
    } 
    else if (rev < 2) {
        sum.bad++;
    }
    return sum;
}, 
{
    good: 0,
    ok: 0,
    bad: 0
});

console.log(numbers);