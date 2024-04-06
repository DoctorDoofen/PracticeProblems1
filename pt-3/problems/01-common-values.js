/*
    Common values in two objects:
        Given two objects, return an array of values that are present in both objects

    const cat = {color: 'white', legs: 4, favoriteFood: 'sushi'};
    const bunny = {color: 'white', favoriteFood: 'carrots'};
    const human = {hobbies: ['running', 'painting'], legs: 4, favoriteFood: 'sushi'};
    const vehicle = { wheels: 4, color: 'red'};

    console.log(commonValues(cat, bunny)); // prints ['white']
    console.log(commonValues(cat, human)); // prints [4, 'sushi']
    console.log(commonValues(human, vehicle)); // prints [4]
    
*/

function commonValues(obj1, obj2) {
    let value1 = Object.values(obj1);
    let value2 = Object.values(obj2)
    console.log()
    let same = [];

    for (let val1 of value1) {
        for (let val2 of value2) {
            if (val1 === val2) same.push(val1)
        }
    }
    return same;
}
const cat = { color: 'white', legs: 4, favoriteFood: 'sushi' };
const bunny = { color: 'white', favoriteFood: 'carrots' };
const human = { hobbies: ['running', 'painting'], legs: 4, favoriteFood: 'sushi' };
const vehicle = { wheels: 4, color: 'red' };

console.log(commonValues(cat, bunny)); // prints ['white']
console.log(commonValues(cat, human)); // prints [4, 'sushi']
console.log(commonValues(human, vehicle)); // prints [4]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = commonValues;
} catch (e) {
    module.exports = null;
}
