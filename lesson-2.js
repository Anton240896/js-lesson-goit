// /***** Інструкція if та її варіації *****/
// // if(){

// // }


// // if(){

// // }else{

// // }

// // const value = 10;
// // if (value === 1) {
// //     console.log(1);
// // } else if (value === 10) {
// //     console.log('first', 10);
// // } else if (value === 7) {
// //     console.log(7);
// // } else if (value === 10) {
// //     console.log('second', 10);
// // } else {
// //     console.log('default');
// // }


// // const value = 4;
// // if (value === 1) {
// //     console.log(1);
// // } else if (value < 10 && value > 5) {
// //     console.log('first', 10);
// // } else if (value === 10) {
// //     console.log('second', 10);
// // } else {
// //     console.log('default');
// // }



// /***** Інструкція switch *****/
// // const value = 4;

// // switch (value) {
// //     case 1:
// //         console.log('Один');
// //         break;
// //     case 3:
// //         console.log('Три');
// //         break;
// //     case 4:
// //         console.log('Чотири');
// //         break;
// //     case 7:
// //         console.log('Сім');
// //         break;
// //     default:
// //         console.log('default');
// // }










// /***** Тернарний оператор *****/

// // const value = 17;


// // value > 15 && value < 20 ? console.log('в діапазоні від 15 до 20') : console.log('Спробуйте ще');



// // if (value > 15 && value < 20) {
// //     console.log('в діапазоні від 15 до 20')
// // }

// // const value = 15;
// // let message;

// // value > 15 && value < 20 ? message = 'в діапазоні від 15 до 20' : message = 'Спробуйте ще';


// // console.log(message);

// // const value = 17;
// // let message;

// // message = value > 15 && value < 20 ?  'в діапазоні від 15 до 20' : 'Спробуйте ще';

// // console.log(message);


// /***** Області видимості *****/ //(Обов'язково !!!)

// // Глобальна та локальна
// // const
// // let


// // const value = 10;
// // let str = 'Hello world';


// // if (true) {
// //     // console.log(str);
// //     let number = 22;
// //     const str1 = 'I love JS'
// //     if (true) {
// //         const str2 = 'Home'
// //         console.log(str);
// //     }

// //     console.log(str2);

// // }
// // console.log(hello);
// // const hello = 1

// // const value = 10;
// // let str = 'Hello world';


// // if (true) {
// //     // console.log(str);
// //     let number = 22;
// //     if (true) {
// //         console.log(str);
// //     }
// //     let str = 'I love JS'
// // }





// // console.log(str);

// // switch (1) {

// // }

// // function someName() {

// // }







// // Перерва до 21.15







// //  Глобальна та функціональна
// // var


// // var num = 10;

// // if (true) {
// //     var num = 15;
// // }

// // console.log(num);

// // function foo() {
// //     var str = 'Hello world';
// // }

// // console.log(str);





// /***** Цикл for *****/

//  let i;
//  const str = 'hello world';
//  for (let i = 0; i < str.length; i += 1) {
//      console.log(str[i]);
//  }



// /***** Цикл while *****/
// // const str = 'hello world';
// // let i = 0;
// // while (i < str.length) {
// //     console.log(str[i]);
// //     i += 1;
// // }

// // let i = 0;
// // while (i < 0) {
// //     console.log('Hello');
// //     i += 1
// // }

// /***** Цикл do while *****/


// // let i = 0;

// // do {
// //     console.log('hello world');
// //     i += 1
// // } while (i < 0)



// // let idx = -1;

// // const str = 'Hello world';
// // console.log(str.length);
// // for (let i = 0; i < str.length; i += 1) {
// //     // console.log(i);
// //     if (str[i] === 'd') {
// //         idx = i;
// //         break;
// //     }
// // }

// // console.log('result',idx);



// // for (let i = 0; i <= 20; i += 1) {
// //     if (i % 2 === 0) {
// //         console.log('Парне', i);
// //         continue;
// //     }
// //     console.log('Не парне', i);
// // }





// // **************************************** Практика ****************************** //



// // Task - 1
// // Потрібно створити світлофор використовуючи конструкцію if
// // В propmt() юзер вводить колір який він бачить на світлофорі
// // В результаті виконання юзер має отримати повідомлення з дією яку має виконати


// // Можливі 4 стани світлофора
// // 1 - red, action stop
// // 2 - yellow, action ready
// // 3 - green, action go
// // 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful


// // let message = prompt('color ?');
// // let action;

// // if (message) {
// //     message = message.toLowerCase();
// // }


// // if (message === 'red') {
// //     action = 'stop';
// // } else if (message === 'yellow') {
// //     action = 'ready';
// // } else if (message === 'green') {
// //     action = 'go';
// // } else {
// //     action = 'be careful';
// // }

// // console.log(action);
// // console.log(message);






// // Task - 2
// // Виконай рефакторинг попереднього завдання використовуючи конструкцію switch
// // Можливі 4 стани світлофора
// // 1 - red, action stop
// // 2 - yellow, action ready
// // 3 - green, action go
// // 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful



// // let message = prompt('color ?');
// // let action;

// // if (message) {
// //     message = message.toLowerCase();
// // }

// // switch (message) {
// //     case 'red':
// //         action = 'stop';
// //         break;
// //     case 'yellow':
// //         action = 'ready'
// //         break;
// //     case 'green':
// //         action = 'go';
// //         break;
// //     default:
// //         action = 'be careful';
// // }

// // console.log(action);










// // Task - 3
// // Потрібно створити додаток для автоматизації перевірки правильних відповідей на дитячі загадки
// // Створи функцію яка буде приймати 2 параметри
// // 1 параметр це текст загадки
// // 2 правильна відповідь

// // Після виклику функції користувач має побачити питання на екрані та поле для вводу відповіді, використовуй propmt()
// // Функція має повертати булеве значення з результатом відповіді (true/false)

// // function check(text, answer) {
// //     // console.log(answer);
// //     let message = prompt(text);
// //     if (message){
// //         message = message.toLowerCase();
// //     }

// //     return message === answer;
// // }
// // const result = check('Хоч не літак, а крилатий, Без крил не може працювати.', 'вітряк');
// // console.log(result);
// // check('Через воду він проводить, А сам з місця вік не сходить', 'міст')
// // Тестові дані
// // Хоч не літак, а крилатий,
// // Без крил не може працювати.
// // (Вітряк)


// // Через воду він проводить,
// // А сам з місця вік не сходить.
// // (Міст)






// // Task - 4
// // Потрібно створити функцію яка буде рахувати за скільки днів Равлик зможе виповзти з колодязя
// // функція приймає 1 параметр глибину колодязя, функція повертає кількість днів яку равлик витратив на шлях.
// // за день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// // для вирішення завдання використовуй цикл while

// // 42 м, виповзе за 8 днів
// // 17 м, виповзе за 3 дні
// // 18 м, виповзе за 4 дні

// // function getDays(deps) {
// //     const daySpeed = 7;
// //     const nightSpeed = 2;
// //     let total = 0;
// //     let days = 0;

// //     while (total < deps) {
// //         total += daySpeed;
// //         days += 1;

// //         if (total < deps) {
// //             total -= nightSpeed;
// //         }
// //     }
// //     console.log(days);
// // }
// // getDays(42)












// // Task - 5
// // Порахуй скільки голосних літер у реченні.

// //function countVowel(str) {
//   //  const vowels = "aeiou";
//     //let counter = 0;
//     //for (let i = 0; i < str.length; i += 1) {
//       //  if (vowels.includes(str[i].toLowerCase())) {
//          //   counter += 1
//        // }
//    // }

//    // return counter;
// //}
// //console.log(countVowel("HELLO WORLD")) // 3
// // console.log(countVowel("Junior Web Developer")) // 


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
//             // Change this line
//             if (words[i].length > longestWord.length) {
//                 longestWord = words[i];
//             }
//         }
//         return longestWord;
    
    

// задача 2.26

// Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice([]) повертає 0
// Виклик функції calculateTotalPrice() з випадковим масивом чисел повертає правильну суму

// function calculateTotalPrice(order) {
// // let total = 0;
// // for (const item of order) { - через фор оф
// //     total += order;
// // }
// // return total;
//  }

// function calculateTotalPrice(order) {
//     let total = 0;
//     for (let i = 0; i < order.length; i+=1) { - через фор 
//       total += order[i];
//     }
//     return total;
//   }


// Задача 2.27

// Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

// Оголошена функція filterArray(numbers, value)
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
// Функція filterArray() використовує цикл for..of

// function filterArray(numbers, value) {
//     const filteredArray = [];
  
//     for (let number of numbers) {
//       if (number > value) {
//         filteredArray.push(number);
//       }
//     }
  
//     return filteredArray;
//   }

// задача 2.25

// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// Оголошена функція getCommonElements(array1, array2)
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив
// В циклі for використовувалися методи includes і push

// function getCommonElements(array1, array2) {
//     // Створюємо новий масив для зберігання спільних елементів
//     let getAllElements = [];
  
//     for (let element of array1) {
//       if (array2.includes(element)) {
//         getAllElements.push(element);
//       }
//     }
  
//     return getAllElements;
//   }

// задача 2.22
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

// Оголошена функція createArrayOfNumbers(min, max)
// Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
// Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
// Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// В циклі for використовувався метод push

//function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     for(let i = min; i <= max; i+=1) {
//       numbers.push(i);
//     }
//     return numbers;
//   }
  
  
  
  
  