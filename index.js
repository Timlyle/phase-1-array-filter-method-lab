// Code your solution here
function findMatching(driversNamesArray, driverName) {
    return driversNamesArray.filter(driver => driver.toUpperCase() === driverName.toUpperCase())

};

function fuzzyMatch(driverArray, string) {
    return driverArray.filter(driver => driver.startsWith(string))

};

function matchName(driverObjs, string) {
    return driverObjs.filter(driverObjs => driverObjs.name === string)

};

//    return driverObjs.filter(driverObjs => driverObjs['name'] === string)

//person1['lastname'] = 'Rossi';

//matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.


//text.startsWith("Hello");


  /*const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]*/