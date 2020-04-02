// korzystając z funkcji .filter stwórz funkcję filterWith(arr, filter) 
// filtrowanie arraya z obiektami po stringu, tak aby 0 znaków w filtrze
//  oznaczało cały array, jeśli od 0 do 3 to ma nic nie filtrować, 
//  a powyżej 3 ma filtrować po każdym kluczu w obiekcie

const humans = [
    {name:"Marcin", age: 10} ,
    {name:"AGnueszka", age: 16},
    {name:"Monika", age: 22},
    {name:"Piotrek", age: 31}
    
];

const filterWith = (arr, filter) => {
if (filter.length === 0){
    return arr;
} else if (filter.length >0 && filter.length <= 3){
    return arr; 

} else { 
    return arr.filter( user => {
    if (filter.length >= 3) {
      return  user.age > 18 
    }
  });
    
};


}
console.log (filterWith(humans,"pouidwbib"))