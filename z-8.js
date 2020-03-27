 // 8) Stwórz funkcję generateHuman() która będzie tworzyć obiekt o podanej niżej
//  strukturze ale o losowych wartościach
 // {name, surname, email:(w oparciu o name i surname), age:(przedział 18-85),
//  country:oneOf([PL,UK,USA])}
 // losowe name i surname. https://www.json-generator.com/.
// Dodatkowe pola - phoneNr - random 9 numbers,
 // oraz _id = objectId() - wykorzystać bibliotekę  https://www.npmjs.com/package/uuid
         
 
  const  people = 

  [
      {"name": "Jan", "surname": "Kowalski"},
      {"name": "John", "surname": "Smith"},
      {"name": "Robin", "surname": "Kenedy"},
   ];
    const countries = ['PL', 'UK', 'USA'];
   

        
 

  const generator = () => { 
         const indexName = Math.floor(Math.random() * people.length);
         // console.log (`${persons[indexName]}`);
         return  people[indexName] 
      };
      const generator2 = () =>{
        const indexContries = Math.floor(Math.random() * countries.length);
        return countries[indexContries] 
      };
      function generators(generator,generator2) {
        
        console.log(generator,generator2)
      };
      generators(people,countries)
      
    //  console.log (generator(people))
    //  console.log (generator2(countries))
     
  //  const generateHuman = (generator) => {
  //      const person = generator;
  //        return {
  //     name: generator.name,
  //     }
  //  };
   
  //      console.log(generateHuman(persons,generator))




   
   //  
   // const emails =  ['gmail.com', 'onet.pl', 'gazeta.pl'];
    // generateEmail = Math.floor(Math.random() * emails.length),
      // generateAge(minAge,maxAge){
      //    return Math.floor(Math.random() * (maxAge - minAge + 1) + minAge);
      // 
      // generateCountry = Math.floor(Math.random() * countries.length),
 

 // country: countries.generateCountry,
      // email: emails.generateEmail,
      // age: generateAge (18,85),