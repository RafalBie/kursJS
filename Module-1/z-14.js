// stwórz funkcję randomChoice(array, elements = 5)
// która z array wybiera losowo tyle elementów ile jest w elements
// elementy mają być wybierane losowo i nie powtarzać się
// żeby działało tak
// const array = [0,1,2,3,4,5,6,7,8,9] i elements = 3
// i wynik funkcji może być np [7,4,9]
const array = [0,1,2,3,4,5,6,7,8,9];
let elements = [];
const randomChoice = (array, elements = 5) => {

// const elementsFromArray = array[Math.floor(Math.random() * array.length)];
for (let i = 0; i < 3; i++) {
    
    elements += Math.floor(Math.random() * array.length);
    
    
   
   
   
    // console.log(elements);

}

return elements

  



}


console.log(randomChoice(array,elements))