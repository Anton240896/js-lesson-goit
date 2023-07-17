// 1)
//Задача. 2.21
// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// Оголошена функція findLongestWord(string)
// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// Виклик функції findLongestWord("Google do a roll") повертає Google
// Виклик функції findLongestWord("May the force be with you") повертає force
// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

// function findLongestWord(string) {
//     let words = string.split(' ');
//         let longestWord = words[0];

//         for (let i = 0; i < words.length; i += 1) {

//             if (words[i].length > longestWord.length) {
//                 longestWord = words[i];
//             }
//         }
//         return longestWord;
//     }
// console.log(findLongestWord(""));


// 2)
// задача 2.26

// Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice([]) повертає 0
// Виклик функції calculateTotalPrice() з випадковим масивом чисел повертає правильну суму

// function calculateTotalPrice(order) {
// let total = 0;
// for (const element of order); - через фор оф
//     total += element;
// // }
// return total;

// function calculateTotalPrice(order) {
//     let total = 0;
//     for (let i = 0; i < order.length; i+=1) { - через фор 
//       total += order[i];
//     }
//     return total;
//   }


// 3)

// зробити паліндром

// function palindrom(text) {
//     text = text
//     .toLowerCase()
//     .toString()
//     .replace();


//     return text === text.split('').reverse().join('');
// }
// console.log(palindrom('4340'));



// // 4)
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,5) ;
// console.log(firstTwoEls);


// // 5)

// const start = 1;
// const end = 10;

// for (let i = start; i <=end ; i +=1 ) { // Change this line
//   console.log(i);
// }

//  6) Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) 
// і повертає суму всіх цілих чисел від одиниці і до цього числа.
//  Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// Оголошена функція calculateTotal(number)
// Виклик функції calculateTotal(1) повертає 1
// Виклик функції calculateTotal(3) повертає 6
// Виклик функції calculateTotal(7) повертає 28
// Виклик функції calculateTotal(18) повертає 171
// Виклик функції calculateTotal(24) повертає 300
// Виклик функції calculateTotal() з випадковим числом повертає правильне значення

// function calculateTotal(number) {
//     let sum = 0;
  
//     for(let i = 0; i <= number; i+=1){
//       sum += i;
//     }
  
//     return sum;
//   }
  
//   console.log(calculateTotal(4))


// const array1 = ['one', 'two', 'three', 'five'];
// const array2 = ['six','seven','eight','nine']
// console.log(.map(array1));


// 7) Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на newName у властивості books. Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.

// Оголошена змінна bookShelf

// Значення змінної bookShelf - це об'єкт

// Значення властивості bookShelf.updateBook - це метод об'єкта

// Після виклику методу bookShelf.updateBook("Haze", "Dungeon chronicles"), значення властивості books - це масив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// Після виклику методу bookShelf.updateBook("The last kingdom", "Dune"), значення властивості books - це масив ["Dune", "Haze", "The guardian of dreams"]

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//       // Change code below this line
//   const books = this.books.indexOf(oldName);
//       this.books.splice(books, 1, newName);
  
      // },
//   };
  


//   const arr1 =   

// [ {name: "Moore Hensley",
// email: "moorehensley@indexia.com",
// eyeColor: "blue",
// friends: ["Sharron Pace"],     
// isActive: false,
// balance: 2811,
// gender: "male" } ]

// console.log(arr1.filter());

///////////////////////////////////////////////////////////////////////////////

// const scores = [89, 64, 42, 17, 93, 51, 26];
// let test = scores.sort((a,b) => b-a); -    SORT по зростанням цифр
// console.log(test);
///////////////////////////////////////////////////////////////////////////////

//  const releaseDates = [2016, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// // console.log(...releaseDates.sort((a,b) => b - a));
// console.log(...authors.sort((a,b) => b.localeCompare(a)));
// console.log(authors.join(','));
// console.log(releaseDates);

///////////////////////////////////////////////////////////////////////////////


// const users = [
// {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
// ]
// let s = users.find(user => user.name === 'Ross Vazquez')
// console.log(s); // об'єкт Ross Vasques 
/////////////////////////////////////////////////////////////////////////////

// console.log(users.forEach(person =>));

// const  calculateTotalPrice =  orderedItems => {
//       let totalPrice = 0;
    
//       orderedItems.forEach (item => {
//         totalPrice += item;
//       });
    
//       return totalPrice;
//     }
//     console.log(calculateTotalPrice([4, 8])) // 12
///////////////////////////////////////////////////////////////////////////////
  
// const students = [
//       {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male"
//       },
//       {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female"
//       },
//       {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male"
//       },
//       {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         isActive: true,
//         balance: 2278,
//         gender: "female"
//       },
//       {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male"
//       },
//       {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male"
//       },
//       {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female"
//       }
//     ]

//     students.map((student) => {
//       console.log(students);
//     })



// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

////////////////////////////////////////////////////////////////////
// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.map(value => value >= 0);
// console.log(positiveValues); // [true, false, true, true, false, true, false]


////////////////////////////////////////////////////////////////////////////
// const array1 = ['one', 'two', 'three', 'five'];
// const array2 = ['six','seven','eight','nine']
// const releaseDates = [2016, 2008, 1984, 1973, 2012, 1997];
// array1.forEach(arr => {
// console.log(arr); // перебрав масив методом форич
// });

// console.log(releaseDates.sort()); // відсортував масив методом сорт// знизу вверх//[1973, 1984, 1997, 2008, 2012, 2016] 