/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

arr= [34,12,4,15,39,14];

// Array.isArray

/* 요소 순환 -------------------------------------------------------------- */

// forEach
arr.forEach(function(item,index){
  this[index] = item;
},user)

const span = document.querySelectorAll('span');

span.forEach((item)=>{
  item.addEventListener('click',(e)=>{
    console.log(e.target.style.background = 'orange');
    console.log(index);
  })
})


/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
arr.splice(1,0,23,5);
// sort
arr.sort((a,b)=>a-b);


/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map
arr.map((item)=>item*2);

// map 실무적인 예제
let todo = ['밥먹기','미용실가기','코딩공부하기'];

todo.map((todoList)=>{
  return 
}

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 -------------------------------------------------------------- */

// find
// findIndex

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

// reduce
// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

// split
// join