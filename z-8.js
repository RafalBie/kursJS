 // 8) Stwórz funkcję generateHuman() która będzie tworzyć obiekt o podanej niżej
//  strukturze ale o losowych wartościach
 // {name, surname, email:(w oparciu o name i surname), age:(przedział 18-85),
//  country:oneOf([PL,UK,USA])}
 // losowe name i surname. https://www.json-generator.com/.
// Dodatkowe pola - phoneNr - random 9 numbers,
 // oraz _id = objectId() - wykorzystać bibliotekę  https://www.npmjs.com/package/uuid
         
 
  const  x = {
    people: 

  [
      {name: "Jan", surname: "Kowalski"},
      {name: "John", surname: "Smith"},
      {name: "Robin", surname: "Kenedy"},
   ],
   countries: ['PL', 'UK', 'USA'],
   
    // randomPeople: function (dataH){
    //   const people = dataH.people
    //   return people[Math.floor(Math.random() * people.length)];
      
    // },
  }

  
  const generateHuman = (people, countries)=> {
        const  newHuman = {
          randomPeople: function (dataH){
              const people = dataH.people
              return people[Math.floor(Math.random() * people.length)];
              
            },
            
            // randomCountries: function (dataH){
            //   const countries = dataH.countries;
            //   return countries[Math.floor(Math.random() * countries.length)];
            // },
            
        };
       console.log (newHuman);
       console.log (newHuman.randomPeople());
         
       const randomHuman = (dataH) =>{
        const Human = gernder.randomPeople(dataH)
        // newHuman.surname = …
        // newHuman.country = countries.randomCountries(dataH)
        // newHuman.age = …
        return {
            'name':Human.name
        }

      // newHuman.name = people.name.randomPeople()
      // return{
      //   newHuman
      // };
      
        
        
       };
        console.log (newHuman)
      }
     generateHuman(x)
     
 

  // const generator = () => { 
  //        const indexName = Math.floor(Math.random() * people.length);
  //        // console.log (`${persons[indexName]}`);
  //        return  people[indexName] 
  //     };
  //     const generator2 = () =>{
  //       const indexContries = Math.floor(Math.random() * countries.length);
  //       return countries[indexContries] 
  //     };
  //     function generators(generator,generator2) {
        
  //       console.log(generator,generator2)
  //     };
  //     generators(people,countries)

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