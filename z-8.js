 // 8) Stwórz funkcję generateHuman() która będzie tworzyć obiekt o podanej niżej
//  strukturze ale o losowych wartościach
 // {name, surname, email:(w oparciu o name i surname), age:(przedział 18-85),
//  country:oneOf([PL,UK,USA])}
 // losowe name i surname. https://www.json-generator.com/.
// Dodatkowe pola - phoneNr - random 9 numbers,
 // oraz _id = objectId() - wykorzystać bibliotekę  https://www.npmjs.com/package/uuid
         
 
      const people = [
        {name: "Jan", surname: "Kowalski"},
        {name: "John", surname: "Smith"},
        {name: "Robin", surname: "Kenedy"},]
      const countries =  ["PL", "UK", "USA"];
      const email =  ["gmal.com", "wp.pl", "op.pl"];
   
    
      const idxForPerson = Math.floor(Math.random() * people.length);
      const idxForCountry = Math.floor(Math.random() * countries.length);
      const idxForEmail = Math.floor(Math.random() * email.length);
      
        console.log (idxForEmail)
        // console.log (idxForCountry)
        const generateHuman = () => {
          selectedPerson = people[idxForPerson];
          selectedCountry = countries[idxForCountry];
          selectedEmail = email[idxForEmail];
          const age = (minAge, maxAge) => {
            return Math.floor(Math.random() * (maxAge - minAge + 1) + minAge);}
        console.log (selectedEmail); 
        return{
          name: selectedPerson.name,
          surname: selectedPerson.surname,
          countries: selectedCountry,
          email: selectedEmail,
          age: age(18,85),
          }
        };
          console.log(generateHuman(people,countries)) 

        
  
  
  
  
  