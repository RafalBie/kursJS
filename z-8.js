 // 8) Stwórz funkcję generateHuman() która będzie tworzyć obiekt o podanej niżej
//  strukturze ale o losowych wartościach
 // {name, surname, email:(w oparciu o name i surname), age:(przedział 18-85),
//  country:oneOf([PL,UK,USA])}
 // losowe name i surname. https://www.json-generator.com/.
// Dodatkowe pola - phoneNr - random 9 numbers,
 // oraz _id = objectId() - wykorzystać bibliotekę  https://www.npmjs.com/package/uuid
         
 
  const  persons = 

  [
      {"name": "Jan", "surname": "Kowalski"},
      {"name": "John", "surname": "Smith"},
      {"name": "Robin", "surname": "Kenedy"},
   ];
   

        
 

  const generator = (persons) => { 
         const indexName = Math.floor(Math.random() * persons.length);
         // console.log (`${persons[indexName]}`);
         return  persons[indexName] 
      };
     console.log (generator(persons))
     
   const generateHuman = (generator) => {
       const person = generator;
         return {
      name: generator.name,
      }
   };
   
       console.log(generateHuman(persons,generator))




   
   //  countries: ['PL', 'UK', 'USA'],
   // const emails =  ['gmail.com', 'onet.pl', 'gazeta.pl'];
    // generateEmail = Math.floor(Math.random() * emails.length),
      // generateAge(minAge,maxAge){
      //    return Math.floor(Math.random() * (maxAge - minAge + 1) + minAge);
      // 
      // generateCountry = Math.floor(Math.random() * countries.length),
 

 // country: countries.generateCountry,
      // email: emails.generateEmail,
      // age: generateAge (18,85),