// 1) Stwórz strukturę danych związaną z książką adresową.

// Obiekt "książka adresowa" 
// Ma mieć: listę wszystkich kontaktów, listę grup kontaktów.
// Ma umożliwiać: create/read/update/delete , umożliwiać sortowanie listy po frazach

// Obiekt charakteryzujący pojedyńczy kontak:
// Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji
// Ma umożliwiać: Tworzenie obiektu, aktualizację datę modyfikacji, wyświetlać 
// w odpowiednim formacie przy wywołaniu. 

// Obiekt charakteryzujący grupę kontaktów:
// Ma mieć: listę kontaktów
// Ma umożliwiać: Create/Read/Update/Remove (CRUD)

// Zasady SOLID:
// S.  Klasa lub “shape factory” funkcja powinna mieć jeden i jedyny powód do zmiany,
//  co oznacza, że klasa powinna mieć tylko jedno zadanie. 
//  Czyli  w naszym zadaniu klasy: ksiązka, kontakt, grupa kontaktów. 
// O.  Obiekty lub instancje  powinny być otwarte dla rozszerzenia, 
// ale zamknięte dla modyfikacji. To trochę jakby zmianami (modyfikujemy) 
//  interface a nie grzebiemy w silniku???
// L. Kod powinien współpracować poprawnie z klasą nadrzędną i z jej podklasami. 
// Innymi słowy, podklasa powinna nadpisywać metody funkcje klas nadrzędnych w sposób, 
// który nie pogarsza działania kodu.
// I. Uzytkownik nie powinien być zmuszany do implementacji interfejsu, 
// którego nie używa. Interfejs ten powinien być odpowiednio zdefiniowany. 
// Chodzi tu o aby inny fragment kodu, który używa Twojej klasy używał wyłącznie 
// podzbioru metod, który jest w tamtym przypadku istotny.
// D. jak oDwrócenie zależności
//  Wytyczna ta mówi, że wysokopoziomowe klasy nie powinny zależeć od niskopoziomowych
//   detali. Zależność ta powinna być odwrócona poprzez wprowadzenie dodatkowych 
//   elementów. Mówi się tu o dodatkowych warstwach abstrakcji, 
//   które pozwalają na zmianę kierunku takiej zależności. 
// Ale jak na razie to dla mnie zbyt wysoki poziom abstrakcji 
