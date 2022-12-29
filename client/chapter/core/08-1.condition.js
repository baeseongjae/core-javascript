/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

let number = prompt('숫자를 입력해 주시오', 0);

let message =
  (number > 0) ? '1':
  (number < 0) ? '-1':
  '아무것도 아닙니다.';

console.log(message);


// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = 'yes';

// 영화 볼거니?
let goingToWatchMovie = 'no';


// if 문(statement)
if(didWatchMovie ==='yes'){
  console.log('그거 재밌더라..?');
}else if(goingToWatchMovie==='yes'){
  // else if 복수 조건 처리
  console.log('가즈아');
}else{
  // else 절(caluse)
  console.log('아이고.. 중한 일이 있던것을 깜빡했다...')
}


let movieMessage =
(didWatchMovie.includes('yes')) ? '그거 재밌더라' :
(goingToWatchMovie === 'yes') ? '설렌다 가즈아~' : '아이고.. 중한 일이 있던것을 깜빡했다...'


// 조건부 연산자

// 멀티 조건부 연산자 식