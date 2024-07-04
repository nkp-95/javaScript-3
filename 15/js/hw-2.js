function calcChange(payment, cost){
  // 코드작성
  let cnt50000, cnt10000, cnt5000, cnt1000;
  let payback = (payment - cost)
  cnt50000 = Math.floor(payback / 50000);
  document.write("50000원 지폐 : " + cnt50000 + "장<br>");
  payback = (payback % 50000);
  // document.write(payback + "<br>");
  cnt10000 = Math.floor(payback / 10000);
  document.write("10000원 지폐 : " + cnt10000 + "장<br>");
  payback = (payback % 10000);
  // document.write(payback + "<br>");
  cnt5000 = Math.floor(payback / 5000);
  document.write("5000원 지폐 : " + cnt5000 + "장<br>");
  payback = (payback % 5000);
  // document.write(payback + "<br>");
  cnt1000 = Math.floor(payback / 1000);
  document.write("1000원 지폐 : " + cnt1000 + "장<br>");
  payback = (payback % 1000);
  // document.write(payback + "<br>");
  document.write("<br>");

  console.log("지불 " + payment + " 가격 " + cost);
  console.log("50000원 지폐 : " + cnt50000 + "장");
  console.log("10000원 지폐 : " + cnt10000 + "장");
  console.log("5000원 지폐 : " + cnt5000 + "장");
  console.log("1000원 지폐 : " + cnt1000 + "장");

  console.log(`[50000원 지폐] : ${cnt50000}장`);
  console.log(`[10000원 지폐] : ${cnt10000}장`);
  console.log(`[5000원 지폐] : ${cnt5000}장`);
  console.log(`[1000원 지폐] : ${cnt1000}장`);
}

calcChange(100000, 33000);
console.log(' ');
calcChange(500000, 378000);
