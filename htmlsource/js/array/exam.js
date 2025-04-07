let numArr = [57, 274, 586, 32, 57, 103, 312, 2];

// 최소값, 최대값 출력
let numSort = numArr.sort((a, b) => a - b);
console.log(numSort[0]);
console.log(numSort[numSort.length - 1]);
