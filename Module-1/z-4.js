// 4) Umieść 10 tablic wygenerowanych w zadaniu 3, w jednej tablicy.

// const randomTab2 = table.fill(0).map(el => Math.floor(Math.random() * 10) + 1);
// const randomTab2 =  Math.floor(Math.random() * 100);

// const randomTab2 = () => Math.floor(Math.random() * 100);
// const newTab = [];
//     for(let i=0; i<10; i++){
//         const emptyTab = []
//         for (j=0;j<10;j++){
//         emptyTab.push(randomTab2());  
//         }
//         newTab[i] = [emptyTab]
        
//     } 

// console.log (newTab)


const tabOfTenTabs = []
const tabPush = () => {
    for(let i=0; i<10; i++){
        const emptyTab = []
        for (j=0;j<10;j++){
        const index = Math.floor(Math.random() * 100); 
        emptyTab.push(index);  
        }
        tabOfTenTabs[i] = [emptyTab]
         } 
};
tabPush();

console.log (tabOfTenTabs)
