//索引
var Car = ['BMW','Benz','Audi','Lexus'];

var Car = Cars.find(c => c=='Benz');
console.group(car);

var Car = Cars.find(c => c=='Toyota');
console.group(car);

var index = Cars.indexOf('Audi');
console.log(index);
var index = Cars.indexOf('Toyota');
console.log(index);

let Prices =[280,320,250,210];
console.log(Prices.findIndex(p => p>300));
console.log(Prices.findIndex(p => p>250));
console.log(Prices.findIndex(p => p>=250 && p<300));

Prices.filter(function(item ,index){
    if(item > 250){
        console.log(Cars[index]+"的價格是:" + item +",價格大於250萬");
    }
});