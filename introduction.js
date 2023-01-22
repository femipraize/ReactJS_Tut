let displayColors = function(mesage, ...colors) {
    console.log(mesage);
    

    for(let i in colors){
        console.log(colors[i]);
    }
}

let mesage = "List of colors"

let colorArray = ['Orange', 'Red', 'Indigo'];
displayColors(mesage, ...colorArray)

function createPerson(firstName, lastName){
    let fullName = firstName + " " + lastName;
    return {firstName, lastName, fullName}
}

let p = createPerson("Femi", "Ogbangwor");
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);