let price =0;
let gb =0;
let wifi = 0;
let wifi_4G =0 ;
// const url = "https://raw.githubusercontent.com/apprunner/FileStorage/master/iPadAir2020_Data.json";
//自己github上的資料
const url = "https://fan-hua-hsuan.github.io/APPLE/ipadair.json";
let ipad_json;

//網頁載完之後 才載入json資料
window.onload = function () {
    let xhr = new XMLHttpRequest();    
    xhr.onload = function () {
        //將json網址 讀取之後轉成json格式
        ipad_json = JSON.parse(this.responseText);
        console.log(ipad_json);
        //ex.抓第一筆id ipad[0].id
        //ex. foreach 裡抓第一筆id ipad.id
        ipad_json.forEach((value, index) => {
            // console.log(value);
            // msg.append(JSON.stringify(ipad), document.createElement("br"));
            // _color = ["gray","png"]
            _color = value.picture.split(".");
            // _color = "gray"
            _color = _color[0];
            // console.log(index + "--" + value.id);
        });
    }
    //打開網址
    xhr.open("GET", url);
    xhr.send();
}

function change_img(color) {
    let ipad_img = document.getElementById('ipad_img');
    ipad_img.setAttribute('src',color+'.png')
}

function storage(_gb) {
    let p_price = document.getElementById('price');
    //全部資訊都從JSON裡抓
    ipad_json.forEach((value, index) => {
        //判斷符合的 價錢是多少 預設是網路Wi-Fi的價錢
        if(value.storage == _gb+"GB" && value.network=="Wi-Fi"){
            price = value.price;
            gb=_gb;
        }
        // 4G網路的價錢
        else if(value.storage == _gb+"GB" && value.network=="Cellular"){
            wifi_4G = value.price;
        }
    });
    p_price.innerText='NT$'+ price;
}

function connect(tools) {
    let p_price = document.getElementById('price');
    //全部資訊都從JSON裡抓
    ipad_json.forEach((value, index) => {
        //判斷符合的 價錢是多少 預設是網路Wi-Fi的價錢
        if(value.storage == gb+"GB" && value.network==tools){
            price = value.price;
        }
    });
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
