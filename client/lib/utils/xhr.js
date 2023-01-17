

/* readyState
  0: uninitialize // 초기화
  1: loading  //로딩
  2: loaded   //로딩이 완료된
  3: interactive  //인터렉티브
  4: complete //완료
 */

  // xhrData함수만들기   method, url


function xhrData(method, url, body){
  const xhr = new XMLHttpRequest();
  // 비동기 통신 오픈
  xhr.open(method,url);
  xhr.addEventListener('readystatechange',()=>{
    const {status,readyState,response} = xhr; // 객체 구조 분해 할당 

    if(status >= 200 && status < 400){
      if(readyState === 4){
        console.log('통신 성공');
        console.log(JSON.parse(response));
      }
    }else{
      console.error('통신실패');
    }
  })

  // 서버에 요청
  xhr.send(JSON.stringify(body));
}

/* GET
 xhrData('GET','https://jsonplaceholder.typicode.com/users'); */

// POST
xhrData('POST','https://jsonplaceholder.typicode.com/users',{
  "name": "kindtiger",
  "username": "seonbeom",
  "email": "tiger@euid.dev",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "010-7169-0262",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
})

