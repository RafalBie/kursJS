
//1) Utwórz funkcję, która jako argument przyjmuje Twój rok urodzenia. 
//Funkcja powinna zwrócić Twój aktualny wiek.
let birth = ()=> {
    let date = new Date("1975");
    let yr = date.getFullYear();
    const result = yr - date;

    return result;

}  

//2) Utwórz funkcję, która jako argument przyjmie trzy liczby. 
//Funkcja powinna zwrócić true jeśli z odcinków o długości przekazanych w argumentach 
//można zbudować trójkąt prostokątny, lub informację że z podanych długości nie można 
//utworzyć trójkąta prostokątnego
const  triangle = (a,b,c) => {
    if(a*a+b*b==c*c){
    return true;
    } else if(a*a+b*b!=c*c){
    console.log("z podanych długości nie można utworzyć trójkąta prostokątnego")
    }
 }
// 3) Wygeneruj tablicę zawierającą 10 liczb losowych.

const tab = []
tab.length=10
getRandom = (min,max) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
getRandom(0,9)

// 4) Umieść 10 tablic wygenerowanych w zadaniu 3, w jednej tablicy.

// 5) Stwórz tablicę zawierającą 15 wyrazów. Utwórz funkcję która jako argument przyjmuje wyraz. 
//Funkcja ma sprawdzić czy fraza występuje w tablicy. Jeśli tak ma zwrócić informacje o tym elemencie (pozycja, wartość). 
//Jeśli nie, zwraca powiadomienie że szukanej frazy brak w tablicy.

const tab = ['marcin','tomek','kasia','marysia','weronika','rafal','ola','tola','gaba','alex','zdzichu','krzysio','zenek','gienek','bea']

const check = tab.every(function(el){
    for (let i=0; i<level.length; i++){
        return el.i===i;
    }
    console.log(check);
})





