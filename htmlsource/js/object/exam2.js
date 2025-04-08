// 2개의 주사위를 던졌을 때 나오는 눈을 (5, 3) 출력하고
// 눈의 합이 5가 아니면 계속 주사위를 던지고 눈의 합이 5인 경우 실행 중단
while (true) {
  let num1 = Math.floor(Math.random() * 6) + 1;
  let num2 = Math.floor(Math.random() * 6) + 1;

  console.log(`(${num1}, ${num2})`);
  if (num1 + num2 == 5) break;
}
// 로또 번호 6개를 추출하여 배열에 담은 후 출력
// 1 ~ 45

let lottoArr = [];
while (true) {
  let lotto = Math.floor(Math.random() * 45) + 1;

  if (lottoArr.indexOf(lotto) == -1) {
    lottoArr.push(lotto);
  }

  if (lottoArr.length > 5) break;
}
lottoArr.sort((a, b) => a - b);
console.log(lottoArr);
