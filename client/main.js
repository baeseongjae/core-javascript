/* eslint  no-undef: 'warn'  => eslint 끄는법*/


// 1. input 값 가져오기
// 2. 이벤트 핸들러 연결하기
// 3. 이벤트 기본동작 차단하기
// 4. 두 수의 합을 더해주기
// 5. 화면에 출력하기

import { 
  getNode,
  sum,
  getInputValue,
  clearContents,
  insertLast,
 } from "./lib/index.js";


const firstInput = getNode('#firstNumber');
const secondInput = getNode('#secondNumber');
const result = document.querySelector(".result");
const form = document.querySelector(".calculator");

function calculator(e){
  e.preventDefault();
  
  const firstValue = +firstInput.value;
  const secondValue = +secondInput.value;

  let total = sum(firstValue, secondValue)
  
  clearContents(result);
  insertLast(result,total);
}


form.addEventListener('submit',calculator);

firstInput.addEventListener('change',inputHandler)
secondInput.addEventListener('change',inputHandler)