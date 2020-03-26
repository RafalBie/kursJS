// function findCarInLot(car) {
//     for (var i = 0; i < lot.length; i++) {
//     if (car === lot[i])  
//     {
//         return i;
//     } 
//     } return -1;
// }
//     var chevy = {
//          make: "Chevy",
//         model: "Bel Air" 
//     };
//     var taxi = {
//     make: "Webville Motors",
//     model: "Taxi" };
//     var fiat1 = { make: "Fiat",
//     model: "500" };
//     var fiat2 = { make: "Fiat",
//     model: "500" };
//     var lot = [chevy, taxi, fiat1, fiat2];
//     // var loc1 = findCarInLot(fiat2); 
//     console.log(findCarInLot(fiat2));
//     var loc2 = findCarInLot(taxi); 
//     console.log(findCarInLot(taxi));
//     var loc3 = findCarInLot(chevy); 
//     var loc4 = findCarInLot(fiat1);

    // function lieDetectorTest() {
    //      var lies = 0;
    //     var stolenDiamond = {
    //         x: !null};
    //      if (stolenDiamond.x) {
    //     console.log("You stole the diamond"); 
    //     lies++;
    //      }
    //     var car = {
    //     keysInPocket: !null };
    //     if (car.keysInPocket) {
    //     console.log("Uh oh, guess you stole the car!");
    //      lies++;
    //     }
    //     if (car.emptyGasTank) {
    //     console.log("You drove the car after you stole it!");
    //      lies++;
    //     }
    //     var foundYouAtTheCrimeScene = ["Rafal"];
    //      if (foundYouAtTheCrimeScene) {
    //     console.log("A sure sign of guilt");  
    //     lies++;
    //      }
    //     if (foundYouAtTheCrimeScene[0]) 
    //     { console.log("Caught with a stolen item!");
    //      lies++;
    //     }
    //     var yourName = "Rafal";
    //      if (yourName) {
    //     console.log("Guess you lied about your name"); 
    //     lies++;
    //     } return lies;
    //         }
    //     var numberOfLies = lieDetectorTest(); 
    //     console.log("You told " + numberOfLies + " lies!"); 
    //     if (numberOfLies >= 3) {
    //     console.log("Guilty as charged"); 
    // }

//  var name = "Jenny";
//    var phone = "8609";
//     var fact = "This is a prime number";
// var songName = phone + "/" + name;
// var index = phone.indexOf("-");
// if (fact.substring(10, 15) === "prime") {
//  console.log(fact);
//  }


function quack(num) {
    for (var i = 0; i < num; i++) {
     console.log("Quack!");
}
}
    var fly = function(num) {
    for (var i = 0; i < num; i++) {
    console.log("Flying!"); 
        }
    }
    var superFly = fly; 
    superFly(2);
    
    // var superQuack = quack; 
    // superQuack(3);
    quack (4)