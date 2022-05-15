const promise1 = new Promise (function(resolve,reject){
    resolve("成功的話，請呼叫resolve的方法!");
    reject("失敗的話，請呼叫resolve的方法!");
});

promise1.then(result =>{
    console.log("成功的回傳值:"+ result);
    //成功，撰寫執行程式
})
.catch(ex=>{
    console.log("失敗原因:"+ result);
    //失敗，撰寫執行程式
})
.finally(()=>{
    console.log("Promie finally 完成");
    //最終執行程式
})