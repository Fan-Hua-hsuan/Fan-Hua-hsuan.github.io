let price =0;
let gb =0;
let wifi = 0;
let wifi_4G =0 ;
const url = "https://raw.githubusercontent.com/apprunner/FileStorage/master/iPadAir2020_Data.json";

window.onload = function () {

}

function change_img(color) {
    let ipad_img = document.getElementById('ipad_img');
    ipad_img.setAttribute('src',color+'.png')
}

function storage(_gb) {
    let p_price = document.getElementById('price');
    if(_gb==64){
        wifi=17900;
        wifi_4G=22900;
        price=17900;
        gb=_gb;
    }
    else
    {
        wifi=22900;
        wifi_4G=27900;     
        price=22900;   
        gb=_gb;
    }
    p_price.innerText='NT$'+ price;
}

function connect(tools) {
    let p_price = document.getElementById('price');
    if(gb==64){
        if(tools=='Wi-Fi'){
        price=17900;
        }
        else{
            
        price=22900;
        }
    }
    else // 256
    {
        if(tools=='Wi-Fi'){
        price=22900;
        }
        else{
            
        price=27900;
        }

    }
    p_price.innerText='NT$'+ price;
}

// 迭代
let color = ["gray","pink","Purple","blue","starlight"]
color.forEach((value,index)=>{
    let d = document.createElement('div');
    let i = document.createElement('img');
    let p = document.createElement('p');
    i.setAttribute("src",color[index]+'.jpg');
    p.innerText=color[index];
    d.classList.add("col-6","border");
    i.classList.add("img_style");
    console.log(color[index]);
    d.addEventListener("click",function(){
        // 點擊改變圖片
    change_img(color[index]);
        // 點擊哪裡哪裡變色
    });
    d.append(i);
    d.append(p);
    let select_color_stlye = document.getElementById("select_color_stlye");
    select_color_stlye.append(d);
});
// 儲存裝置區

        
let a = '';
let xhr = new XMLHttpRequest();
function requestJSON1(){
    xhr.onload=function(){
        msg.innerText = this.responseText;
        console.log(this);
        console.log(xhr);
    }
    xhr.open("GET",url);
    xhr.send();
}