// 반복문
// for (let index = 0; index < array.length; index++) {
// }

// // 자바 ->
// array.forEach(element => {
// });

// for (const key in object) {
// }

// for (const element of object) {

// }

// 1 ~ 10 출력
for (let index = 1; index < 11; index++) {
  console.log(index);
}

// 1 ~ 100 합
let sum = 0;
for (let index = 1; index < 101; index++) {
  sum += index;
}
console.log(sum);

let i = 1;
while (i < 11) {
  console.log(i);
  i++;
}

let sum1 = 0;
let i1 = 1;
while (i1 < 101) {
  sum1 += i1;
  i1++;
}
console.log(sum1);

i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);

console.log("\n---- for in : 객체 출력");
const myCar = { make: "BMW", model: "X5", year: 2013 };
let txt = "";
for (const key in myCar) {
  txt += myCar[key] + " ";
}
console.log("myCar ", txt);

// `${변수명}` : 변수 + 문자열 출력시
const music = { singer: "아델", time: "15", title: "hello" };
for (const key in music) {
  console.log(`${key} : ${music[key]}`);
  // console.log(ㅏ됴 + " : " : + music[key]);
}

// break, continue
console.log("\n---break");
for (let index = 0; index < 101; index++) {
  if (index == 50) break;
  console.log(index);
}

console.log("\n---continue");
for (let index = 0; index < 40; index += 2) {
  if (index == 0) continue;
  console.log(index);
}
