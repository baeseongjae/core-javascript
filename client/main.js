/* eslint  no-undef: 'warn'  => eslint 끄는법*/

// 1. input 값 가져오기
// 2. 이벤트 핸들러 연결하기
// 3. 이벤트 기본동작 차단하기
// 4. 두 수의 합을 더해주기
// 5. 화면에 출력하기

const firstNum = document.querySelector("#firstNumber");
const secondNum = document.querySelector("#secondNumber");
const done = document.querySelector("#done");
const result = document.querySelector(".result");
const form = document.querySelector(".calculator");
function calculator(e){
  e.preventDefault();
  
  const firstValue = +firstNum.value;
  const secondValue = +secondNum.value;
  

  result.innerHTML = `${firstValue+secondValue}`;
}


form.addEventListener('submit',calculator);