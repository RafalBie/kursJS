const user = (name = "", age) => {
 let userName = name;
 let userAge = age;

 function showName() {
  console.log(`Cześć ${userName}, ${userAge >= 18 ? 'Możesz kupić piwo' : 'Nie mozesz kupić piwa'}`);
 }

 return showName
}

