// 4) Umieść 10 tablic wygenerowanych w zadaniu 3, w jednej tablicy.

const randomTab2 = table.fill(0).map(el => Math.floor(Math.random() * 10) + 1);

const newTab = new Array(10);
for(let i=0; i<10; i++){
    newTab[i] = new Array (10)
    for (j=0;j<10;j++){
    newTab[j] = [randomTab2]
    }
    
    
} 
console.log (newTab)
// console.log(randomTab2)

