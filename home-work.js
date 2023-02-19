//1
function printName() {
  const firstName = "Aydin";
  const lastName = "Kaseyinoff";
  console.log(`My name is ${firstName} ${lastName}`);
}

// Вызываем функцию, чтобы вывести имя и фамилию
printName();

//2
function coneVolume(height, radius) {
  let volume = (1/3) * Math.PI * Math.pow(radius, 2) * height;
  console.log(`Объем конуса: ${volume.toFixed(2)}`);
}

// Вызываем функцию, чтобы вывести объем конуса
coneVolume(9, 3); // Пример вызова функции с высотой 5 и радиусом 2

//3
function stringLength(str) {
  return str.length;
}

// Пример вызова функции
console.log("Длина строки равна " + stringLength("Привет АЙдин!")); // Выведет 12

//4
function isEven(num) {
  if (num % 2 === 0) {
    return num + " Четное число";
  } else {
    return num + " Не четное число";
  }
}

// Пример вызова функции
console.log(isEven(4)); // Выведет true
console.log(isEven(7)); // Выведет false

//5
function square(num) {
  return num * num;
}

// Пример вызова функции
console.log(square(4)); // Выведет 16
console.log(square(7)); // Выведет 49

//6
function squareRoot(num) {
  return "Корень числа " + num + "-" + Math.sqrt(num);
}

// Пример вызова функции
console.log(squareRoot(16)); // Выведет 4
console.log(squareRoot(81)); // Выведет 9

//7
function pentagonPerimeter(a, b, c, d, e) {
  return  a + b + c + d + e + " Равно";
}

// Пример вызова функции
console.log(pentagonPerimeter(2, 3, 4, 5, 6)); // Выведет 20
console.log(pentagonPerimeter(1, 2, 3, 4, 5)); // Выведет 15

//8
for (let i = 0; i <= 33; i += 3) {
  console.log(i);
}

//9
let factorial = 1;

for (let i = 1; i <= 8; i++) {
  factorial *= i;
}

console.log(factorial);

//10
for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}

//11
let sum = 0;
for (let i = 1; i <= 25; i++) {
  sum += i;
}
console.log(sum);

//12
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

//13
for (let i = 1; i <= 15; i += 2) {
  console.log(i);
}

//14
let arr = ["apple", "banana", "orange"];  // Создание исходного массива
arr.unshift("pear", "peach");             // Добавление 2 элементов в начало массива
arr.push("grape", "kiwi", "pineapple");   // Добавление 3 элементов в конец массива

console.log(arr);  // Вывод результата в консоль

//15
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // Создание массива чисел
let suming =  0;                                  // Инициализация переменной суммы

for (let i = 0; i < numbers.length; i++) {     // Цикл по элементам массива
  if (numbers[i] % 2 === 0) {                 // Если элемент четный, то добавляем его к сумме
    sum += numbers[i];
  }
}

console.log(sum);  // Вывод результата в консоль

//16
let aRr = ["I", "like", "to", "eat!"];
const result = aRr.join(" ");
console.log(result); // "I like to eat!"

//17
let arR = ["one", "two", "three"];
console.log(arR)
arR.reverse();
console.log(arR); // ["three", "two", "one"]

//18
let names = ["Erjan", "Ermek", "Aigerim"];

for (let i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

//19
let number = [2, 3, 4, 5];

for (let i = 0; i < number.length; i++) {
  console.log(number[i] * number[i]);
}

//20






