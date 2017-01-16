/**
 * Created by PC on 1/11/17.
 */
console.log("Hello World");
console.log("This is my first try!");

var person ={
    name : 'Cindy',
    age : 22,
    'middle-school' : 'SFLS',
    tags : ['js','json','web'],
    city: 'Pittsburgh'
};

console.log(person['middle-school']);
console.log('toString'in person);
console.log(person.hasOwnProperty('middle-school'));