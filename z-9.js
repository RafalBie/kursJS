// stwórz sobie array z literami polskiego alfabetu a 
// potem stwórz kod na wszystkie metody for które istnieją w JS 
// a potem postaraj się za pomocą funkcji .map odtworzyć 
// działanie każdej funkcji for

const Alphabet = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 'ś', 't', 'u', 'w', 'y', 'z', 'ź', 'ż'];
for (let i = 0; i < Alphabet.length; i++ ) {
    console.log( i, Alphabet[i]);
}
for (const el of Alphabet) {
    console.log(el);
}
const upperCase = Alphabet.map(function(el) {
    return el.toUpperCase()
});
console.log (upperCase);