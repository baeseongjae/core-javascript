let callbackFunctionExpression = function(url,resolve,reject){

  if(typeof url === 'string'){
    resolve()
  }else{
    reject()
  }

};

callbackFunctionExpression(
  'https://www.naver.com',
  function(){

  },
  function(){

  }
)