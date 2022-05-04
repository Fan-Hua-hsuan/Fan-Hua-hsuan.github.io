//自己github上的資料
const url = "https://fan-hua-hsuan.github.io/APPLE/ipadair.json";
// 宣告空間
let ipad_json;
let storage = [];
let network = [];

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
            //gray.png
            // console.log(value);
            // msg.append(JSON.stringify(ipad), document.createElement("br"));
            // _color = ["gray","png"]
            _color = value.picture.split(".");
            // _color = "gray"
            _color = _color[0];
            // example: 運用時機
            // let i = document.getElementById("ipad_img");
            // let ii = document.getElementById("ipad_img");
            // i.src = _color +'.png';
            // ii.src = _color +'.jpg';
            // console.log(index + "--" + value.id);
        });
        storage_div();
        color_div();
    }
    //打開網址
    xhr.open("GET", url);
    xhr.send();
}

function change_img(_color) {
    let ipad_img = document.getElementById('ipad_img');
    ipad_img.setAttribute('src', _color + '.png');
}

function color_div() {
    // let color = ["gray", "pink", "Purple", "blue", "starlight"];
    let color = [];
    ipad_json.forEach((value, index) => {
        //gray.png
        _color = value.picture.split(".");
        // _color = "gray"
        _color = _color[0];
        color.push(_color);
    });
    
    //刪除重複的東西
    color = [...new Set(color)];
        console.log(color);
    color.forEach((value, index) => {

        let d = document.createElement('div');
        let i = document.createElement('img');
        let p = document.createElement('p');
        i.setAttribute("src", color[index] + '.jpg');
        p.innerText = color[index];
        d.classList.add("col-5", "border", "text-center", "m-2", "rounded-3");
        i.classList.add("img_style");

        d.addEventListener("click", function () {
            // 點擊改變圖片
            change_img(color[index]);
        });

        d.append(i);
        d.append(p);
        let color_stlye = document.getElementById("color_stlye");
        color_stlye.append(d);

    });

}

function change_price(_storage, _network) {
    let price = ipad_json.filter(k => k.storage == _storage && k.network == _network);
    price = price[0].price;
    console.log(price);
    let show_price = document.getElementById("show_price");
    show_price.innerText = 'NT$ '+price;
}

function storage_div() {
    ipad_json.forEach((value, index) => {
        storage.push(value.storage);
        network.push(value.network);
    });
    //刪除重複的東西
    storage = [...new Set(storage)];
    network = [...new Set(network)];

    storage.forEach((value, index) => {
        //篩出符合條件的價錢 
        let price = ipad_json.filter(k => k.storage == value && k.network == "Wi-Fi");
        //因為目前的json塞出來會有很多條符合且價錢相同的 所以直接拿第一筆的價錢
        // console.log(price);
        price = price[0].price;
        // console.log(price);
        let d = document.createElement('div');
        let p = document.createElement('p');
        // p.innerText = value;
        //因為要使用html標籤所以用innerHTML
        p.innerHTML = `<b>${value}</b><br/><br/>NT$ ${price}`;
        d.classList.add("col-5", "border", "text-center", "m-2", "rounded-3");
        d.addEventListener("click", function () {
            // 點擊改變Price
            change_price(value, "Wi-Fi");
        });
        // GB
        d.append(p);
        let storage = document.getElementById("storage");
        storage.append(d);

    });
}