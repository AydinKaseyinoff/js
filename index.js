// const name = "Aydin";
// console.log("My name " + name);
// let userName = "Metamorphosis";
// console.log("My user name " + userName);
// const yearOfBirth = 2007;

// function sum() {
//   let name = "Aydin";
//   console.log(name);
// }
// sum();

// let myName = "Aydin";
// console.log(typeof myName);

// console.log(Number.MAX_SAFE_INTEGER);

// console.log(10 > 5); //true
// console.log(5 > 10); //false

// let result = 10 > 5;
// console.log(result);

// console.log("5" == 5);
// console.log("5" === 5);

// let number = "9";
// if (number < 12) {
//   console.log("Доброе утро " + number);
// } else console.log("Спокойной ночи");

// let time = 17;
// if (time < 12) {
//   console.log("Доброе утро");
// } else if (time >= 12 && time < 18) {
//   console.log("Добрый день");
// }

// /* Логические операторы

// && Логическое и
// || Логическое или
// true Логическое НЕ

// */

// 11 < 12 ? console.log("Условие верно") : console.log("Условие не верно");

// /*let timer = 12;
// greeting = timer < 12 ? "доброе утро" : "Добрый день";
// console.log(greeting)
// */

// /*Конокотенация строк*/

// let greeting = "Привет " + myName;
// let howAreYou = " как твои дела";

// let resultGreeting = greeting + howAreYou;
// console.log(resultGreeting);

// function sayHi() {
//   console.log("Привет дорогой пользователь");
// }

// sayHi();
// sayHi();
// sayHi();

// let sayH = function () {
//   alert("Привет");
// };

// function hello(name) {
//   console.log("Привет " + name + " ! как твои дела");
// }

// hello("Касеинов");

// function summ(a, b) {
//   const result = a + b;
//   return result;
// }
// let res = summ(10, 15);
// console.log(res);

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(15, 15));

// const getNumber = sum(sum(15, 35), sum(20, 20));
// console.log(getNumber);

// function doSomething(func) {
//   let x = 10;
//   let y = 15;
//   let result = func(x, y);
//   console.log(result);
// }
// function doSomething(func) {
//   let x = 10;
//   let y = 15;
//   let result = func(x, y);
//   console.log(result);
// }
// function diff(a, b) {
//   return a - b;
// }
// doSomething(diff);
// doSomething(sum);

// function summi(a, b) {
//   return a + b;
// }
// console.log(summi(10, 10));

// function getLenght(myName) {
//   console.log(myName.length);
// }
// getLenght("Aydin");

// function printLengthSum(str1, str2) {
//   console.log(str1.length + str2.length);
// }

// let a = 1;
// while (a < 15) {
//   a++;
//   console.log(a);
// }

// for (let b = 20; b >= -20; b--) {
//   console.log(b);
// }

// let example1 = [];
// let example2 = new Array();

// let example3 = ["Aydin", "Arsen", "Bayel"];
// let example4 = [54, 33, 88];
// let example5 = [54, "Aydin", true, null];

// console.log(example3);
// console.log(example3[2]);
// console.log(example5);
// console.log(example5[2]);

// let cityInKyrgyzstan1 = [];
// let cityInKyrgyzstan2 = new Array();

// let cityInKyrgyzstan3 = ["Karakol", "Osh", "Talas", "Chuy"];
// console.log(cityInKyrgyzstan3[0]);
// console.log(cityInKyrgyzstan3[1]);
// console.log(cityInKyrgyzstan3[2]);
// console.log(cityInKyrgyzstan3[3]);

// cityInKyrgyzstan3[0] = "Каракол";
// cityInKyrgyzstan3[1] = "Ош";
// cityInKyrgyzstan3[2] = "Талас";
// cityInKyrgyzstan3[3] = "Чуй";

// console.log(cityInKyrgyzstan3);
// console.log(cityInKyrgyzstan3[0]);
// console.log(cityInKyrgyzstan3[1]);
// console.log(cityInKyrgyzstan3[2]);
// console.log(cityInKyrgyzstan3[3]);

// cityInKyrgyzstan3.push("Москва"); //Дабавляет в конец
// cityInKyrgyzstan3.push("Питер"); //Дабавляет в конец
// cityInKyrgyzstan3.unshift("Бишкек"); // Дабавляет сначала
// cityInKyrgyzstan3.pop(); // Вырезает в конец
// cityInKyrgyzstan3.shift(); // вырезает с начала

// console.log(cityInKyrgyzstan3);
// console.log(cityInKyrgyzstan3[0]);
// console.log(cityInKyrgyzstan3[1]);
// console.log(cityInKyrgyzstan3[2]);
// console.log(cityInKyrgyzstan3[3]);
// console.log(cityInKyrgyzstan3[4]);
// console.log(cityInKyrgyzstan3[5]);

// console.log(cityInKyrgyzstan3.length);
// console.log(cityInKyrgyzstan3.pop());
// console.log(cityInKyrgyzstan3[cityInKyrgyzstan3.length - 2]);

// let example = ["Aydin",
//   "Malika",
//   "Aydana"
// ];
// for (let i = 0; i < example.length; i++){// Начинает с начала
//   console.log("Hello, My name is " + example[i]);
// };

// for (let i = example.length - 1; i >= 0; i--){//Начинает с конца
//   console.log("Hello, My name is " + example[i]);
// };
// for (let name of example){
//   console.log("My name is " + name)
// }

// example.forEach(function (name, i){
//   console.log("My name is " + name);
// })

// while (example.length > 0){
//   console.log("Name is " + example.pop());
// }
// console.log(example)

// let example6 = ["Biology", "Physics", "Chemistry", "Athletics"];
// for (let i = 0; i < example6.length; i++){
//   console.log(example6[i] + "-" + example6[i].length);
// }

// let example7 = [45, 33, 11, 60, 3, 10, 15];
// for (let y = 0; y < example7.length; y++){
//   let num = example7[y];
//   if(num % 2 === 0){
//     console.log(num + " - Even");
//   }
//   else{
//     console.log(num + " - Odd")
//   }
// }

// let num = 0;
// for (let doFor = 0; doFor < array.length; doFor++) {
//   num = num + example7[i];
// }
// console.log(num);

function count(a, b) {
  for (let i = a; i < b; i++) {
    console.log(i);
  }
}

count(4, 5);

//function count1 (a, b){
//  for (let i = 10; i => b; i--) {
//    console.log(i)
//  }
//  a--;
//}

//count1(25, 15)

function countup(a, b) {
  for (let i = a; i <= b; i++) {
    console.log(i);
  }
}
countup(10, 5);

function countdown(a, b) {
  for (let i = a; i >= b; i--) {
    console.log(i);
  }
}
countdown(1, 10);

function count(a, b) {
  if (a > b) {
    countdown(a, b);
  } else {
    countup(a, b);
  }
}

count(10, 1);
count(1, 10);

let example9 = ["Aydin", "Arsen", "Bayel", "Aktan", "Almaz"];
console.log(example9);
console.log(example9[0]);
console.log(example9[1]);
console.log(example9[2]);
console.log(example9[3]);

let example7 = [55, 41, 425, 111, 351];
for (let y = 0; y < example7.length; y++) {
  let num = example7[y];
  if (num % 2 === 0) {
    console.log(num + " - Even");
  } else {
    console.log(num + " - Odd");
  }
}

let nums = [55, 41, 245, 111, 351];
arraySum(nums);

function arraySum(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    total = total + num;
  }
  console.log(total);
}

function newArray(str, num) {}
newArray("a", 3);
newArray("b", 5);

function reverse(str) {
  return str.reverse();
}
let array = reverse(["d", "r", "l"]);
let array1 = reverse(["k", "a", "r", "a", "k", "o", "l"]);
console.log(array);
console.log(array1);

function count(a, b) {
  if (a > b) {
    countdown(a, b);
  } else {
    countup(a, b);
  }
}

count(10, 1);
count(1, 10);

let evenNumbers = [];
let oddNumbers = [];
//evenNumbers.push("1"); //Дабавляет в конец
//evenNumbers.push("3")
//evenNumbers.push("5")
//evenNumbers.push("7")
//evenNumbers.push("9")
//console.log(evenNumbers)

function map(f, a) {
  var result = []; // Создаём новый массив
  var i; // Объявляем переменную
  for (i = 0; i != a.length; i++) result[i] = f(a[i]);
  return result;
}
var f = function (x) {
  return x * x * x;
};
var numbers = [0, 1, 2, 5, 10];
var cube = map(f, numbers);
console.log(cube);

const a = () => {
  console.log("Hey there");
};

a();

//a = 10 //error

a();

const citymy = {
  city: "New York",
  popular: true,
  coutry: "USA",
};

console.log(citymy);
console.log(citymy.city);
console.log(citymy.popular);

citymy.city = "Las VEgas";
citymy["link"] = "youtube"; //добовляет

console.log(citymy);
console.log(citymy.city);

///JSON - JAVASCRIPT OBJECT NOTATION

const myPost = {
  userId: 1,
  id: 2,
};
console.log(myPost);

JSON.stringify(myPost);

const postStringified = JSON.stringify(myPost);
JSON.parse(postStringified);

function getNumber(a, b, c) {
  let result = a + b + c;
  console.log(result);
}

getNumber(23, 23, 45);

function getvolume(width, hight, p) {
  return width * hight * p;
  console.log(getvolume);
}

getvolume(234, 23, 10);

let example = ["bishkek", "karakol", "osh"];
for (let i = 0; i < example.length; i++) {
  console.log(example[i].toUpperCase());
}

let example1 = [55, 41];
for (let y = 0; y < example1.length; y++) {
  let num = example1[y];
  if (num % 2 === 0) {
    console.log(num + " - Even");
  } else {
    console.log(num + " - Odd");
  }
}
//let example2 = [44,32];
//for (let i = 2; example2.length<= 10; i++) {
//if (i % 2 == 0) {
//console.log( i );
//}
//}

let example3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let example4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let i = 0; i < example4.length; i++) {
  let item = example4[i];
  for (let j = 0; j < item.length; j++) {
    console.log(item[j]);
  }
}
for (let i = example4.length; i < 0; i--) {
  for (let j = example4.length - 1; j >= 0; j--) {
    console.log(example4[i][j]);
  }
}
console.log(example4[1]);
console.log(example4[2][1]);

const name = "Aydin";
const postsQty = 23;

const userProfile = {
  name,
  postsQty,
  hasSignedAgreement: false,
};
console.log(userProfile);

const mucity = {
  city: "New York",
  cityGreeting() {
    // сокращенный метод функции
    console.log("greetings !!!");
  },
};

mucity.cityGreeting();
console.log(mucity.city);

let joldosh = {
  name: "Joldosh",
  sname: "Salamatov",
  age: 22,
  employed: true,
};
console.log(joldosh);

let joldosh1 = {
  name: " Joldosh",
  sname: " Salamatov",
  age: 22,
  employed: true,
};

console.log(joldosh1.name + joldosh1.sname);
console.log(joldosh1.name);
console.log(joldosh1.sname);
console.log(joldosh1.age);
joldosh1.age = 23;
console.log(joldosh1);
console.log(joldosh1.age);
joldosh1.employed = false;
console.log(joldosh1.employed);
delete joldosh1.employed;
console.log(joldosh1.employed);

joldosh1.favouriteMovies = ["Harry Potter", 45];
console.log(joldosh1);

const sname = "Kaseinoff";
const age = 15;

let emptyObject = {
  sayHello: function () {
    console.log("Hello, my name is " + this.name);
  },
  sayHowOldAreyou: function () {
    console.log("Мне " + this.age + " лет");
  },
  name,
  sname,
  age,
  hobby: "sing",
  birthPlace: "Ak-Suu",
  saybye: function () {
    console.log("BYE bYE");
  },
};

console.log(emptyObject);
emptyObject.sayHello();
emptyObject.sayHowOldAreyou();
console.log(emptyObject.name);
console.log(emptyObject.sname);
console.log(emptyObject.age);
console.log(emptyObject.birthPlace);

let rndNumber = Math.random() * 50;

console.log(rndNumber.toFixed(2));
console.log(rndNumber.toFixed(0));

emptyObject.saybye();

const myCar = {
  model: "honda",
  volume: 3.5,
  country: "Japon",
};
console.log(myCar);
console.log(myCar.model);
console.log(myCar.volume);
console.log(myCar.country);
myCar.model = "Nissan";
console.log(myCar);
console.log(myCar.model);
delete myCar.model;
console.log(myCar);
myCar.auto = "Nissan";
console.log(myCar);
myCar.model = "X-Trail";
myCar.year = 2007;
console.log(myCar);
console.log(myCar.auto);
console.log(myCar.model);
console.log(myCar.year)
console.log(myCar.volume);
console.log(myCar.country);

let myPhone = {
  city: "Chine",
  info: {
    isPopular: true,
    country: "Taiwan"
  }
}
console.log(myPhone)
console.log(myPhone.info.isPopular)
console.log(myPhone.info.country)

delete myPhone.info['isPopular']
console.log(myPhone)

let user = {
  name,//сакращенный формат записи свойств
  age,//сакращенный формат записи свойств
  hasSignedAgreement: false
}

console.log(user)

const father = "Janysh";
const mother = "Mahabat"

const myFamily = {
  father,
  mother,
  brather: "Arnal, Arsen",
  i: "Aydin",
  sister: "Begimai, Ayana",
  sayHiFamily(){
    console.log("Hello " + myFamily)
  },
  sayHiFather(){
    console.log("Hello " + this.father)
  },
  sayHiMather(){
    console.log("Hello " + this.mother) 
  }
}
console.log(myFamily);
myFamily.sayHiFamily();
myFamily.sayHiFather();
myFamily.sayHiMather();