// stwórz sobie array z literami polskiego alfabetu a 
// potem stwórz kod na wszystkie metody for które istnieją w JS 
// a potem postaraj się za pomocą funkcji .map odtworzyć 
// działanie każdej funkcji for

const alphabet2 = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 'ś', 't', 'u', 'w', 'y', 'z', 'ź', 'ż'];
const upperCase = alphabet2.map(function(el) {
    for (let i = 0; i < alphabet2.length; i++ ) {
        for (const el of alphabet2) {
            console.log(el);
        }
        
    // console.log( i, alphabet2[i]);
}
    return el.toUpperCase()



});
console.log (upperCase);