// 함수 == 자바의 메소드
// 함수 생성
function name(params) {
  // 해야할 일들
}

// 1. 매개변수가 없는 함수
function showMessage() {
  console.log("안녕하세요");
}

// 함수 호출
showMessage();

// 2. 매개변수가 있는 함수
function mulltiply(x, y) {
  console.log(`${x}, ${y}`);
}

mulltiply();
mulltiply(1);
mulltiply(1, 3);

function mulltiply2(x, y) {
  return x * y;
}

console.log(mulltiply2());
console.log(mulltiply2(5, 3));
console.log(mulltiply2);

// 매개변수 기본값
function mulltiply3(x, y = 3) {
  return x * y;
}

console.log(mulltiply3(5, 4));
console.log(mulltiply3(6));

function test(a, b, c, d) {
  b = b || 52;
  c = c || 273;

  console.log(`a = ${a}, b = ${b}, c = ${c}, d = ${d}`);
}
test(1, 2, 3, 4);
test(3);

function a() {
  function b() {
    console.log("b");
  }
  if (true) {
    function c() {}
  }
}

b();
c();
a();
