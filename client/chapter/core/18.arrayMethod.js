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

const users = [
  {id:1,name:'로운'},
  {id:2,name:'승택'},
  {id:3,name:'연주'},
]
// find

const find = users.find((item,index)=>{
  return item.id < 5
})

// console.log(find)

// findIndex
const findIndex = users.findIndex((item)=>{
  return item.id === 3
})

console.log(findIndex);



/* 요소 걸러내기 ----------------------------------------------------------- */

// filter
let result = arr.filter((number)=>{
  return number < 100
})

console.log(result);




/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */
const friends = [
  {
    name: '윤보라',
    age: 28,
    job: '작꼬져',
  },
  {
    name: '이로운',
    age: 23,
    job: '배고픈 개발자',
  },
  {
    name: '오승택',
    age: 21,
    job: '물음표살인마',
  }
];


// reduce

// 친구들 나이의 총 합을 구하세요.
let age = friends.reduce((acc,cur)=>{
  return acc + cur.age
})


let template2 = todo.reduce((acc,cur,index)=>{
  return /* html */ acc + `<li>할일 ${index + 1} : ${cur}</li>`
},'')

console.log(template2);
console.log(age);


// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

// split
// join