// // 1)
// // Задача. 2.21
// // Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// // Оголошена функція findLongestWord(string)
// // Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// // Виклик функції findLongestWord("Google do a roll") повертає Google
// // Виклик функції findLongestWord("May the force be with you") повертає force
// // Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

// // function findLongestWord(string) {
// //     let words = string.split(' ');
// //         let longestWord = words[0];

// //         for (let i = 0; i < words.length; i += 1) {

// //             if (words[i].length > longestWord.length) {
// //                 longestWord = words[i];
// //             }
// //         }
// //         return longestWord;
// //     }
// // console.log(findLongestWord("afasvasv afwfwf efwfwfe wfqwfegdf fwfqwff"));


// // //                         solution2
// // function findLongestWord(str) {
// //       return Math.max(...str.split(" ").map(word => word.length));
// //     }
// //     console.log(findLongestWord("afasvasv afwfwf efwfwfe wfqwfegfwssdgsgsdfsdgdsgdf fwfqwff"));// виводе кількість


// // 2)
// // задача 2.26

// // Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

// // Оголошена функція calculateTotalPrice(order)
// // Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// // Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// // Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// // Виклик функції calculateTotalPrice([]) повертає 0
// // Виклик функції calculateTotalPrice() з випадковим масивом чисел повертає правильну суму

// // function calculateTotalPrice(order) {
// // let total = 0;
// // for (const element of order); - через фор оф
// //     total += element;
// // // }
// // return total;

// // function calculateTotalPrice(order) {
// //     let total = 0;
// //     for (let i = 0; i < order.length; i+=1) { - через фор 
// //       total += order[i];
// //     }
// //     return total;
// //   }


// // 3)

// // зробити паліндром

// // function palindrom(text) {
// //     text = text
// //     .toLowerCase()
// //     .toString()
// //     .replace();


// //     return text === text.split('').reverse().join('');
// // }
// // console.log(palindrom('4340'));



// // // 4)
// // const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // // Change code below this line
// // const firstTwoEls = fruits.slice(0,5) ;
// // console.log(firstTwoEls);


// // // 5)

// // const start = 1;
// // const end = 10;

// // for (let i = start; i <=end ; i +=1 ) { // Change this line
// //   console.log(i);
// // }

// //  6) Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) 
// // і повертає суму всіх цілих чисел від одиниці і до цього числа.
// //  Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// // Оголошена функція calculateTotal(number)
// // Виклик функції calculateTotal(1) повертає 1
// // Виклик функції calculateTotal(3) повертає 6
// // Виклик функції calculateTotal(7) повертає 28
// // Виклик функції calculateTotal(18) повертає 171
// // Виклик функції calculateTotal(24) повертає 300
// // Виклик функції calculateTotal() з випадковим числом повертає правильне значення

// // function calculateTotal(number) {
// //     let sum = 0;
  
// //     for(let i = 0; i <= number; i+=1){
// //       sum += i;
// //     }
  
// //     return sum;
// //   }
  
// //   console.log(calculateTotal(4))


// // const array1 = ['one', 'two', 'three', 'five'];
// // const array2 = ['six','seven','eight','nine']
// // console.log(.map(array1));


// // 7) Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на newName у властивості books. Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.

// // Оголошена змінна bookShelf

// // Значення змінної bookShelf - це об'єкт

// // Значення властивості bookShelf.updateBook - це метод об'єкта

// // Після виклику методу bookShelf.updateBook("Haze", "Dungeon chronicles"), значення властивості books - це масив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// // Після виклику методу bookShelf.updateBook("The last kingdom", "Dune"), значення властивості books - це масив ["Dune", "Haze", "The guardian of dreams"]

// // const bookShelf = {
// //     books: ["The last kingdom", "Haze", "The guardian of dreams"],
// //     updateBook(oldName, newName) {
// //       // Change code below this line
// //   const books = this.books.indexOf(oldName);
// //       this.books.splice(books, 1, newName);
  
//       // },
// //   };

// // задача 8 
// // Знайти факторіал будь яких чисел , наприклад 4! = 1*2*3*4 = 24 

// // function factorialize(num) {
// //       if (num === 0) {
// //         return 1;
// //       }
// //       return num * factorialize(num - 1);
// //     }
    
// //     console.log(factorialize());




// //   const arr1 =   

// // [ {name: "Moore Hensley",
// // email: "moorehensley@indexia.com",
// // eyeColor: "blue",
// // friends: ["Sharron Pace"],     
// // isActive: false,
// // balance: 2811,
// // gender: "male" } ]

// // console.log(arr1.filter());

// ///////////////////////////////////////////////////////////////////////////////

// // const scores = [89, 64, 42, 17, 93, 51, 26];
// // let test = scores.sort((a,b) => b-a); -    SORT по зростанням цифр
// // console.log(test);
// ///////////////////////////////////////////////////////////////////////////////

// //  const releaseDates = [2016, 2008, 1984, 1973, 2012, 1997];
// // const authors = [
// //   "Tanith Lee",
// //   "Bernard Cornwell",
// //   "Robert Sheckley",
// //   "Fyodor Dostoevsky",
// // ];

// // // console.log(...releaseDates.sort((a,b) => b - a));
// // console.log(...authors.sort((a,b) => b.localeCompare(a)));
// // console.log(authors.join(','));
// // console.log(releaseDates);

// ///////////////////////////////////////////////////////////////////////////////


// // const users = [
// // {
// //       name: "Moore Hensley",
// //       email: "moorehensley@indexia.com",
// //       eyeColor: "blue",
// //       friends: ["Sharron Pace"],
// //       isActive: false,
// //       balance: 2811,
// //       gender: "male"
// //     },
// //     {
// //       name: "Sharlene Bush",
// //       email: "sharlenebush@tubesys.com",
// //       eyeColor: "blue",
// //       friends: ["Briana Decker", "Sharron Pace"],
// //       isActive: true,
// //       balance: 3821,
// //       gender: "female"
// //     },
// //     {
// //       name: "Ross Vazquez",
// //       email: "rossvazquez@xinware.com",
// //       eyeColor: "green",
// //       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //       isActive: false,
// //       balance: 3793,
// //       gender: "male"
// //     },
// //     {
// //       name: "Elma Head",
// //       email: "elmahead@omatom.com",
// //       eyeColor: "green",
// //       friends: ["Goldie Gentry", "Aisha Tran"],
// //       isActive: true,
// //       balance: 2278,
// //       gender: "female"
// //     },
// //     {
// //       name: "Carey Barr",
// //       email: "careybarr@nurali.com",
// //       eyeColor: "blue",
// //       friends: ["Jordan Sampson", "Eddie Strong"],
// //       isActive: true,
// //       balance: 3951,
// //       gender: "male"
// //     },
// // ]
// // let s = users.find(user => user.name === 'Ross Vazquez')
// // console.log(s); // об'єкт Ross Vasques 
// /////////////////////////////////////////////////////////////////////////////

// // console.log(users.forEach(person =>));

// // const  calculateTotalPrice =  orderedItems => {
// //       let totalPrice = 0;
    
// //       orderedItems.forEach (item => {
// //         totalPrice += item;
// //       });
    
// //       return totalPrice;
// //     }
// //     console.log(calculateTotalPrice([4, 8])) // 12
// ///////////////////////////////////////////////////////////////////////////////
  
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

//     const a =[];
   


// // const values = [51, -3, 27, 21, -68, 42, -37];

// // const positiveValues = values.filter(value => value >= 0);
// // console.log(positiveValues); // [51, 27, 21, 42]

// ////////////////////////////////////////////////////////////////////
// const values = [51, -3, 27, 21, -68, 42, -37];

// const multiply = values.map(value => value >2)
//     console.log(multiply);




// // ////////////////////////////////////////////////////////////////////////////
//  const array1 = ['one', 'two', 'three', 'five'];
//  const array2 = ['six','seven','eight','nine']
//  const releaseDates = [2016, 2008, 1984, 1973, 2012, 1997]; // 
// const a = releaseDates.filter(arr => arr >= 2000); // [2016,2008,2012] filter
// console.log(a);
// // ////////////////////////////////////////////////////////////////////////////

// const releaseDates = [2016, 2008, 1984, 1973, 2012, 1997]; //  другой способ
// const a = (date) =>  date > 2000;

// const b = releaseDates.reduce (function(acc,elem) {
//     return acc + elem;
// },0)
// // [2016,2008,2012] filter
// console.log(b);


// // console.log(releaseDates.sort()); // відсортував масив методом сорт// знизу вверх//[1973, 1984, 1997, 2008, 2012, 2016] 


// // function nam(a,b, c) {
// //       if (a>b) {
// // console.log('go to');
// //       }
// //      else {
// //       console.log('go to to the bleakbeard');
// //       }
// // }
// ////////////////////////////////////////////////////////////////////////////

// // console.log(nam(8,5));
// // let a = [1,2,3,4,5,6,7,8,8]
// // console.log(a);

// ////////////////////////////////////////////////////////////////////////////

// // function splitify(str) {
// //       // Змініть код лише під цим рядком
// //     const a = str.split(/\W/)  //['Hello', 'World', 'I', 'am', 'code']
    
// //       // Змініть код лише над цим рядком
// //       return a;
// //     }


// // console.log(splitify("Hello World,I-am code"));
// ////////////////////////////////////////////////////////////////////////////


// // console.log(document);

// // const body = document.body;
// // console.log(body);

// // const list = document.body.firstElementChild;
// // console.log(list);

// // const firstListItem = list.firstElementChild;
// // console.log(firstListItem);

// // const listItems = list.children;
// // // console.log(listItems);


// // let users = {
// //       Alan: {
// //         age: 27,
// //         online: true
// //       },
// //       Jeff: {
// //         age: 32,
// //         online: true
// //       },
// //       Sarah: {
// //         age: 48,
// //         online: true
// //       },
// //       Ryan: {
// //         age: 19,
// //         online: true
// //       }
// //     };
    
// //     function isEveryoneHere(userObj) {
// //     if (userObj.age === 19) {
// //       return true;
// //     }
// //     return false;
// //     }
    
    
// //     console.log(isEveryoneHere(users.Ryan));

// ////////////////////////////////////////////////////////////////////////////

// // function greaterThanTen(arr) {
// //       let newArr = [];
// //       for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] === 10) {
// //           return true;
// //         }
// //       }
// //       return newArr;
// // //     }

// // const apartment = {
// //       descr: "Spacious apartment in the city center",
// //       rating: 4,
// //       price: 2153,
// //     };
// //     const values = [];
// //     // Change code below this line
// //     const keys = Object.values(apartment);
// //     console.log(keys);
// // const books = [
// //       {
// //         title: "The Last Kingdom",
// //         author: "Bernard Cornwell",
// //         rating: 8.38,
// //       },
// //       {
// //         title: "Beside Still",
// //         author: "Robert Sheckley",
// //         rating: 8.51,
// //       },
// //       {
// //             title: "The Last",
// //         author: "Bernard Corn",
// //         rating: 8.18,
// //       },
// //       {
// //             title: "The Last Kingdom",
// //         author: "Bern well",
// //         rating: 8.23,
// //       }
// //     ];
    

// // const rat =[];
// // for (const { title, author, rating } of books) {
// //       if (rating >= 8.50) {
// // rat.push({rating , title,author})
// //       }
      
// //     }

// //     console.log(rat);


// function add(...args) {
//       let sum = 0;

//       for (let i = 0; i < args.length; i+=1) {
//         sum += args[i];
//       }
//         return sum;
//       }
//       console.log(add(67,42));

      
// function calculateTotalPrice(...order) {
//     let total = 0;
//     for (let i = 0; i < order.length; i+=1) {
//       total += order[i];
//     }
//     return total;
//   }

//   console.log(calculateTotalPrice(24,23));




// const ingredients = [
//     'Potatoes',
//     'Mushrooms',
//     'Garlic',
//     'Tomatos',
//     'Herbs',
//     'Condiments',
//   ];

//   const a = document.querySelector('#ingredients'); 

//   const b = ingredients.map(ingr => { 

//  const c = document.createElement('li'); //створив новий li
//  c.textContent = ingr;  //Відобразив в браузері
// //  li.classList.add('item');   // додав клас css 

//  return c;  

// });


// a.append(b.join(','))
// console.log(ingredients.join(','));


////////////////////////////////////////////////////////////////////

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) 
// in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// const genres = books.flatMap(book => book.genres);
// console.log(genres)

// let a = Date.();
// console.log(a);


// const planets = ["Земля", "Марс", "Венера", "Юпітер"];

// const planetsInUpperCase = planets.forEach(planet =>
// console.log(planets); 