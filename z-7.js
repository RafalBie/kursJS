
// 7) arraye mają zbudowane metody .map .filter i .reduce.
// Zbuduj 3 funkcję map(array, mapFn), filter(array, filterFn) i reduce(array, reduceFn)
//  w których stworzysz własną implementację funkcji wbudowanych, 
// Twoje funkcje mają działać tak samo jak te wbudowane

const array = [1,2,3,4,5,6]

const map = (array,mapFn) => {
    const mapArray = [];
    for (let i=0; i<array.length; i++) {
        const result = mapFn(array[i]);
        mapArray.push(result);
       
    }
    return mapArray;
};
const multiply = (el) => {
    return el * 3;
  };
console.log(map(array,multiply))



const filter = (array,filterFn) => {
    const mapArray = [];
    for (let i=0; i<array.length; i++) {
        // const result = filterFn(array[i]);
        // mapArray.push(result);
        const result = filterFn(array[i]);
        if (result == true) {
            mapArray.push(result);
        }
    
    }
    return mapArray;
};
const evenNum = (el) => {
    return el % 2 === 0;
  };
console.log(filter(array, evenNum))




const reduce = (array, reduceF, highScore) => {
    
    // let reduceF;
    for(i=0;  i < array.length; i++)  {
        reduceFn = i  + array[i]; 
        // console.log(reduceF);
        if (array[i] > highScore) {
        } 
    } 
    highScore = array[i];
    return highScore;
};
const highScore = reduce(array);
const data = [];

for (var i = 0; i < array.length; i++) 
{ if (array[i] == highScore) {
 data.push(i);
}
}
console.log(reduce(data,highScore));



