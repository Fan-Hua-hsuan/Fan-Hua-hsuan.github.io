var person = {name:"Kevin",age:32,height:175,weight:68};

var car = {name:"BMW",color:"Red"};

person.carname =


console.log(person);
// 出て来ない
console.log("The Object is:"+person);
// 出てくる
console.log("The Object is:%o",person);

console.log(`${person.name},${person.age},${person.height},${person.weight}`);
console.log(`${person["name"]},${person["age"]},${person["height"]},${person["weight"]}`);

// Dynamic assign new peoperty
person["email"]="Kevin@gmail.com";
person.bloodtype="B";
console.log(person);

// JSON Encode & Decode
// stringify() 將陣列/物件編碼成JSON⽂字格式
let jsonText = JSON.stringify(person);
console.log(typeof jsonText); 

// parse() 將JSON⽂字解析還原成陣列/物件
let p = JSON.parse(jsonText);
console.log(personObject);
console.log(typeof personObject); 

let person = { name: "Kevin", age: 32,height: 175, weight: 68,"my name":"Kevin Lee",
bmi:function(){
    return this.weight/((this.height/100)**2);
}
};

person.log(person);
console.log(person.bmi);

let person = { name: "Kevin", age: 32,height: 175, weight: 68,"my name":"Kevin Lee"};

let keys = Object.keys(person);
let values = Object.values(person);

console.log(keys);
console.log(values)
