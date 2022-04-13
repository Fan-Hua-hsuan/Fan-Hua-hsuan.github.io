var array1 = [1,3,,5,7,9];

//console.log(typeof array1);

console.log(Array.isArray(array1));
console.log(array1 instanceof Array);

array1.forEach(function(item,index){
    console.log(index,item,typeof item);
});

array1.forEach((item,index)=>{
    console.log(index,item,typeof item);
});