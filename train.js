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
//             // Change this line
//             if (words[i].length > longestWord.length) {
//                 longestWord = words[i];
//             }
//         }
//         return longestWord;
    

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