/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

function checkBrowser(browserName){
  let browser;
  let ua = navigator.userAgent.toLowerCase();
  if(ua.indexOf('chrome'>= -1)) browser='chrome';
  else if(ua.indexOf('edge')>= -1) browser='edge';
  else if(ua.indexOf('firefox')>=-1) browser = 'firefox';
  
  return browser===browserName;
}

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength : ' , stringTotalLength)


// 특정 인덱스의 글자 추출
let extractCharacter = message[0];
console.log('extractCharacter : ', extractCharacter)


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// 부분 문자열 추출
let slice = message.slice(8,-1);   //slice(0,3) 0번째 인덱스부터 3-1번째 인덱스까지
// console.log(slice)

let subString=message.substring(0,3); 
// console.log(subString);

// let subStr = message.substr(4,3); // 문법 없어짐
// console.log(subStr)


// 문자열 포함 여부 확인
let indexOf=message.indexOf('s');
console.log(indexOf)

let includes=message.includes('w');
console.log(includes)

let startsWith;
let endsWith;


// 공백 잘라내기
let trim = message.trim();
console.log(trim)


// 텍스트 반복
let repeat = message.repeat(3);
console.log(repeat)

// 대소문자 변환
let toUpperCase = message.toUpperCase();
console.log(toUpperCase);


// 텍스트 이름 변환 유틸리티 함수
let toCamelCase;
let toPascalCase;