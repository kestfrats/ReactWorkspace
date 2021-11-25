const number = 1; // Primitive Type
const num2 = number; //Copied Type

console.log(num2);

// Primitive Type
const person = {
    name: 'Max'
};

// Copied Type (Can Be altered from any point which also updates primitive)
const secondPerson = person;
person.name = 'Manu';

console.log(secondPerson);


const person2 = {
    name: 'Max'
};

const secondPerson2 = {
    ...person2
};

//Doesn't alter primitive
person2.name = 'Manu';

console.log(secondPerson2);

