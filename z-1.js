//1) Utwórz funkcję, która jako argument przyjmuje Twój rok urodzenia. 
//Funkcja powinna zwrócić Twój aktualny wiek.
 

const birthday = (birth)=> {
    const date= new Date();
    const now = date.getFullYear();   
    return now - birth;
    }  
    const age = birthday(1975)
console.log(age)

