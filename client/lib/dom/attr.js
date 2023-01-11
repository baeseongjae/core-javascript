//  유틸 함수 
// get 함수 만들기 
function getAttr(node,prop){
  // node = '.first'
  // prop = 'class'

  if(typeof node === 'string'){
    node = getNode(node);
  }

  return node.getAttribute(prop);
}


getAttr(first,'data-play') // first 


// set 함수 만들기 
function setAttr(node,prop,value){
  // validation : 확인 
  if(typeof node === 'string') node = getNode(node);
  if(typeof prop !== 'string') throw new TypeError('setAttr 함수의 두 번째 인자는 문자 타입 이어야 합니다.')
  
  if(prop.includes('data')){
    let rest = prop.slice(5);
    node.dataset[rest] = value;
  }

  if(!value) throw new SyntaxError('setAttr 함수의 세 번째 인자는 필수값입니다.')

  node.setAttribute(prop,value);

}

// ★ first 노드 안에 data-value의 값으로 hello를 지정하겠다.
setAttr('.first','data-value','hello');



// attr 함수 만들기
// const attr = (node,prop,value) => !value ? getAttr(node,prop) : setAttr(node,prop,value);


function attr(node,prop,value){

  // if(!value){
  //   return getAttr(node,prop);
  // }else{
  //   setAttr(node,prop,value);
  // }

  return !value ? getAttr(node,prop) : setAttr(node,prop,value);


}