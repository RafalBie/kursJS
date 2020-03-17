 // 8) Stwórz funkcję generateHuman() która będzie tworzyć obiekt o podanej niżej
//  strukturze ale o losowych wartościach
 // {name, surname, email:(w oparciu o name i surname), age:(przedział 18-85),
//  country:oneOf([PL,UK,USA])}
 // losowe name i surname. https://www.json-generator.com/.
// Dodatkowe pola - phoneNr - random 9 numbers,
 // oraz _id = objectId() - wykorzystać bibliotekę  https://www.npmjs.com/package/uuid


   persons = [
      {"name": "Jan", "surname": "Kowalski"},
      {"name": "John", "surname": "Smith"},
      {"name": "Robin", "surname": "Kenedy"},],
   countries =['PL', 'UK', 'USA'],
   emails =  ['gmail.com', 'onet.pl', 'gazeta.pl']


   const genaratePerson = Math.floor(Math.random() * persons.length);
   const generateEmail = Math.floor(Math.random() * emails.length);
   const generateAge = function (minAge,maxAge){
      return Math.floor(Math.random() * (maxAge - minAge + 1) + minAge);
   }
   const generateCountry = Math.floor(Math.random() * countries.length);

   const generatedPerson = () => {
   person =  persons[genaratePerson],
   country =  countries[generateCountry],
   email =  emails[generateEmail],
   age = generateAge
   // return genaratePerson;
      }
   


   // function displayPerson (genaratedPerson){
   //    Console.log ()
   // }
   // var x = y();
   // displayPerson(x);

