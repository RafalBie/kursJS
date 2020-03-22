// korzystając z funkcji .filter stwórz funkcję filterWith(arr, filter) 
// filtrowanie arraya z obiektami po stringu, tak aby 0 znaków w filtrze
//  oznaczało cały array, jeśli od 0 do 3 to ma nic nie filtrować, 
//  a powyżej 3 ma filtrować po każdym kluczu w obiekcie

const humans = ["Marcin", "Ania", "Agnieszka", "Monika", "Piotrek"];

const filterWith = (arr, filter) => {
if (filter.length === 0){
    return arr;
} else if (filter.length >0 && filter.length <= 3){
    return arr; 
} else { 
    const woman = humans.filter(function(name) {
        return name.substr(-1) === "a";
    });
}


}
console.log (filterWith(humans))