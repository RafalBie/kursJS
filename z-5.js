// 5) Stwórz tablicę zawierającą 15 wyrazów. Utwórz funkcję która jako argument przyjmuje wyraz. 
//Funkcja ma sprawdzić czy fraza występuje w tablicy. Jeśli tak ma zwrócić informacje o tym elemencie (pozycja, wartość). 
//Jeśli nie, zwraca powiadomienie że szukanej frazy brak w tablicy.

const tab = ['marcin','tomek','kasia','marysia','weronika','rafal','ola','tola','gaba','alex','zdzichu','krzysio','zenek','gienek','bea'];

// const check = tab.every(function(el){
//     for (let i=0; i<level.length; i++){
//         return el.i===i;
//     }
//     console.log(check);
// })
// const world = tab.every(function(name){
//     if (tab.includes(name) ){
//         console.log(name+tab.indexOf(name))
//     } else {
//         console.log("brak frazy w tablicy")
//     }
// });
// console.log (world)

const searchworld = world => {
    if (tab.includes(world)){
        return world+tab.indexOf(world)
    } 
       else return "brak frazy w tablicy"
    
};
console.log (searchworld('tomek'))
console.log (searchworld('rafal'))
console.log (searchworld('totot'))
