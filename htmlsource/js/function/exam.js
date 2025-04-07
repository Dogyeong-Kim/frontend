// 1. 함수 선언 방식으로 두 개의 숫자를 받아서 더한 결과를 리턴하는 함수 작성 후 테스트
function sum(x, y) {
  return x + y;
}
console.log(sum(5, 7));
// 2. 함수 표현식으로 1번 교체
const func1 = function sum(x, y) {
  return x + y;
};
console.log(func1(5, 7));
// 3. 1 ~ 10까지 더하는 작업을 함수 표현식으로 작성
const func2 = function summary() {
  let sum = 0;
  for (let i = 1; i < 11; i++) {
    sum += i;
  }
  return sum;
};

console.log(func2());
// 4. 숫자를 받아서 3의 배수 찾기
//    3의 배수라면 박수 출력, 아니라면 통과
function multiple(a) {
  if (a % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}

multiple(12);
// 5. 4번 개선 (3의 배수라면 박수 출력, 아니라면 통과)
//    9의 배수인 경우 박수 x 2 출력
function multiples(a) {
  if (a % 3 == 0) {
    if (a % 9 != 0) {
      console.log("박수");
    } else {
      console.log("박수 x 2");
    }
  } else {
    console.log("통과");
  }
}
multiples(18);
// 6. 공인중개사 시험 점수를 입력하면 합격 여부를 알려주는 함수
//    과목은 2 과목이라 하고, 두 과목 합해서 120점 이상이면 합격
//    한 과목이 40점 미만이면 과락으로 불합격
function point(a, b) {
  if (a + b >= 120) {
    console.log("합격");
    if (a < 40 || b < 40) {
      console.log("과락");
    } else {
      console.log("불합격");
    }
  }
}
point(30, 100);
