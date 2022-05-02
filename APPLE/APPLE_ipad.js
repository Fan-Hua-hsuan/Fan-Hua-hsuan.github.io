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