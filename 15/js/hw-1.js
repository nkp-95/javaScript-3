
function factorial(n) {
  let result = 1;
  // let num = 1;
  //코드 작성
  if(n == 0){
    // document.write(n + "! = " + 1 + "<br>");
  }else{
    for(let i=1; i<=n; i++){
      result *= i;
    }
  }
  //-------------------------------------------------
  // document.write(n + "! = " + num + "<br>");
  // if(n>0){
  //   for(let i=1; i<=n; i++){
  //     result = result *i;
  //   }
  // }
  //--------------------------------------------------
  // for(let i=n; i>=1; i--){
  //   result = result *i;
  // }
  return result;
}

//테스트 코드
console.log(factorial(12));
console.log(factorial(6));
console.log(factorial(3));
console.log(factorial(0));
// console.log(factorial(1));