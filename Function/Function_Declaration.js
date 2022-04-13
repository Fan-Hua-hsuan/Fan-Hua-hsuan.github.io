
//Function Declaration
//計算圓的週長:直徑×圓周率
function circle(r) {
    return r * 2.0 * Math.PI;
   }
   function circle(r) {
    return parseFloat(r) * 2.0 * Math.PI;
   }
   console.log(circle(5.138)); //32.28300610828872
   console.log(circle("5.138")); //32.28300610828872