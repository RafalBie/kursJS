//6) Masz daną tablicę: const numbers = [2, 5, 7, 10, 34, 16, 879, 1]. 
//Napisz funkcję, która zwróci nową tablicę zawierającą tylko parzyste liczby
 //z tablicy numbers.

 const numbers = [2, 5, 7, 10, 34, 16, 879, 1];
 const even = numbers.filter(function(el){
       return  el % 2 === 0;
 });
 console.log(even)