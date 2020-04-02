//2) Utwórz funkcję, która jako argument przyjmie trzy liczby. 
//Funkcja powinna zwrócić true jeśli z odcinków o długości przekazanych w argumentach 
//można zbudować trójkąt prostokątny, lub informację że z podanych długości nie można 
//utworzyć trójkąta prostokątnego
const  isTriangleRectangular = (a,b,c) => {
    if(
        typeof a === "number" &&
        typeof b === "number" &&
        typeof c === "number" &&
        a*a+b*b==c*c
        ){
    return true;
    } else if(a*a+b*b!=c*c){
    console.log("z podanych długości nie można utworzyć trójkąta prostokątnego")
    }
 }
isTriangleRectangular(2,3,4)