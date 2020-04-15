// zaprojektuj 3 funkcje
// const arr = [0,1,2,3,4,5,6]
// powerXOfEven(array, power) => podnosi do potęgi power tylko nieparzyste liczby w arrayu
// removeEachThirdElement(array) => usuwa co trzeci element
// sumOfSquares(array) => sumuje podniesione do kwadratu wartości
// do pierwszego wykorzystaj .map
// do drugiej . filter
// do 3 .reduce

const arr = [0,1,2,3,4,5,6]

// zad 1
const powerXOfEven = (array,power) => {
    const newArr =[];
  function odd (){

    for(let el of arr){
        if(el % 2 == 0){
            newArr.push(el)
        }
    }
  }
 odd(arr);
  return newArr;
  }
  const multiply = (item) => {
    return Math.pow(item, power)
  };
console.log(powerXOfEven(arr,multiply))


// zad 2

const removeEachThirdElement = arr.filter(function(el) {
return el

}).slice(3,6);
console.log (removeEachThirdElement)


// zad 3

const sumOfSquares =  arr.reduce(function(prev, next){
    return Math.pow((prev+next),2)

})

console.log (sumOfSquares)




