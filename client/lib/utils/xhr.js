

/* readyState
  0: uninitialize // 초기화
  1: loading  //로딩
  2: loaded   //로딩이 완료된
  3: interactive  //인터렉티브
  4: complete //완료
 */

  // xhrData함수만들기   method, url


function xhrData(method, url){
  const xhr = new XMLHttpRequest();
  // 비동기 통신 오픈
  xhr.open(method,url);
  xhr.addEventListener('readystatechange',()=>{
    if(xhr.status>=200 && xhr.status<400){
      if(xhr.readyState===4)
        console.log('통신성공');
    }else{
      console.log('통신실패');
    }
  })

  // 서버에 요청
  xhr.send();
}

xhrData('GET','https://jsonplaceholder.typicode.com/users');



