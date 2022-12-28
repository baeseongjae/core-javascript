/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2022;
console.log(2022);

// undefined, null
let days = null;
console.log(String(days));

// boolean
let isKind = true;
console.log(isKind + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed -> NaN
console.log(Number(undefined)); //NaN

// null -> 0
let money = null;
console.log(money);   //null
console.log(Number(money));   // 0

// boolean -> true: 1 / false : 0
let cutie = false;
console.log(cutie); //false
console.log(cutie * 1); //0
console.log(+cutie);  //0

// string
let num = '   123   ';
console.log(num*1);

// numeric string
let width = '320px';
console.log(parseInt(width,10));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 