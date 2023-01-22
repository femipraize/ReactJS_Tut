let displayColors = function(mesage, ...colors) {
    console.log(mesage);
    

    for(let i in colors){
        console.log(colors[i]);
    }
}

let mesage = "List of colors"

let colorArray = ['Orange', 'Red', 'Indigo'];
displayColors(mesage, ...colorArray)