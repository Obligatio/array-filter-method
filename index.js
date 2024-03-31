// finding matching drivers
function findMatching(drivers,searchString){
    return drivers.filter(driver => driver.toLowerCase()===searchString.toLowerCase());
}

// function to fuzzy match drivers
function fuzzyMatch(drivers,searchString){
    return drivers.filter(driver => driver.toLowerCase().startsWith(searchString.toLowerCase()));
}

// function to match driver names
function matchName(driverObjects,searchString){
    return driverObjects.filter(driver => driver.name.toLowerCase() === searchString.toLowerCase());
}

//finding matching drivers
function findMatching(drivers,searchString){
    return drivers.filter(driver => driver.toLowerCase()===searchString.toLowerCase());
}

// function to fuzzy match drivers
function fuzzyMatch(drivers,searchString){
    return drivers.filter(driver => driver.toLowerCase().startsWith(searchString.toLowerCase()));
}

// function to match driver names
function matchName(driverObjects,searchString){
    return driverObjects.filter(driver => driver.name.toLowerCase() === searchString.toLowerCase());
}

//Test
const drivers = ['Mark', 'David', 'Alice', 'Bob'];
const driverObjects = [
    {name: 'Mark', hommetown: 'Ohio'},
    {name : 'David', hometown: 'Texas'},
    {name : 'Alice', hometown: 'Carlifonia'},
    {name : 'Bob', hometown: 'Philladelphia'},
];

console.log(findMatching(drivers, 'A'));
console.log(fuzzyMatch(drivers, 'B'));
console.log(matchName(driverObjects, 'Amanda'));
