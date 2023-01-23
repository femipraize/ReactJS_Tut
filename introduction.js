let displayColors = function(mesage, ...colors) {
    console.log(mesage);
    

    for(let i in colors){
        console.log(colors[i]);
    }
}

let mesage = "List of colors"

let colorArray = ['Orange', 'Red', 'Indigo'];
displayColors(mesage, ...colorArray)

function createPerson(firstName, lastName, age){
    let fullName = firstName + " " + lastName;
    return {
        firstName, 
        lastName, 
        fullName,
        isSenior: function(){
            return age>60;
        }
}
}

let p = createPerson("Femi", "Ogbangwor", 70);
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);
console.log(p.isSenior())

// Destructuring + rest
let employee = ["Femi", "Victor", "Male"];
let [fName, ...elements] = employee;

console.log(fName);
console.log(elements);