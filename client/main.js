import { clearContents, getInputValue, getNode, getRandom, insertLast, isNumericString, showAlert } from './lib/index.js'

import { jujeobData } from './data/data.js';

const submit = getNode("#submit");
const resultArea = getNode('.result');

function clickSubmitHandler(e){
  e.preventDefault();

  let name = getInputValue('#nameField');
  let list = jujeobData(name);
  let pick = list[getRandom(list.length-1)];

  if(!name){
    showAlert('.alert-error','잘못된 정보입니다!',2000);
    throw new Error('이름을 입력해주세요!');
  }

  if(isNumericString(name))
    throw new Error('올바른 형식으로 입력해주세요');

  console.log(list);
  console.log(getRandom(40))

  clearContents(resultArea);
  insertLast(resultArea,pick);
}

submit.addEventListener('click',clickSubmitHandler);