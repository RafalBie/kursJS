// stwórz sobie array z literami polskiego alfabetu a 
// potem stwórz kod na wszystkie metody for które istnieją w JS 
// a potem postaraj się za pomocą funkcji .map odtworzyć 
// działanie każdej funkcji for

const alphabet2 = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 'ś', 't', 'u', 'w', 'y', 'z', 'ź', 'ż'];
// alphabet2.map(console.log)

for (let i = 0; i < alphabet2.length; i++ ){
// console.log(alphabet2[i], i , alphabet2)
}
for (const element of alphabet2){
// console.log(element, alphabet2.indexOf(element),
//     alphabet2)
}
for (const idx in alphabet2){
console.log(alphabet2[idx], idx)
}
// const arraymap = alphabet2.map((element,index) => {
//     console.log(element+index);
//     return { 
//             element,
//             index
//     };
//     });
// const firletof = (element,index) => {
//     for (const el of alphabet2) {
//                 console.log(el);
//            }
// }

// const forWithI = (element,index) => {
//     for (let i = 0; i < alphabet2.length; i++ ) {
//         console.log( i, alphabet2[i]);}
    
// }
// const forIn = (element,index) => {
//  for (const el in arraymap) {
//      console.log(el + arraymap[el])
//  }

// }
