// korzystając z funkcji .reduce stwórz agregację liter alfabetu
//  do postacji array of arrays, tak aby losowo 4-7 liczb stanowiło 
//  jeden array - grupa tych arrayów ma być wynikiem tego zadania

const alphabet = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 'ś', 't', 'u', 'w', 'y', 'z', 'ź', 'ż'];




const randomSlices = (min, max) => {
        return Math.floor(Math.random()*(max-min+1)+min)
    } 
    
const arrPush = (arr) => {
    let indexA = randomSlices(4,7);
    const arrayOfArray = [];
    for(let i=0; i< arr.lenght; i += indexA ){
        let indexA = randomSlices(4,7);
        arrayOfArray.push(arr.slice(i, i + indexA )); 
         } 
         console.log(arrayOfArray);
        };
arrPush (alphabet)

