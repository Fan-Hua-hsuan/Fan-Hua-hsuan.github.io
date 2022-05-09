//自己github上的資料
const url = "https://fan-hua-hsuan.github.io/APPLE/APPLE_json.json";
// 宣告空間
let ipad_json;
let storage = [];
let networks = [];
let storage_gb = "64GB";

//網頁載完之後 才載入json資料
window.onload = function () {
    let xhr = new XMLHttpRequest();
    //スッテプ4、 要請許可を戴いてからすること↓
    xhr.onload = function () {
        //4 -> xhr 下載完成 && 200 -> 網頁接收完成  ( xhr.status == 200 等於 xhr.statusText == "OK" )
        if (xhr.readyState == 4 && xhr.status == 200) {
            //將json網址 讀取之後轉成json格式
            // ipad_json = JSON.parse(this.responseText);

            // 因為使用 xhr.responseType = "json" 所以不用像上面那行轉換格式;
            ipad_json = this.response;
            // console.log(ipad_json);
            color_div();
            storage_div();
            network_div();       

            // ipad_json[0]['buy'] = "jimmy";
        } else {
            alert('發⽣錯誤，HTTP response代碼：' + xhr.status);
        }
    }
    //スッテプ1、 打開網址
    xhr.open("GET", url);
    //スッテプ2、設定回應格式為json
    xhr.responseType = "json";
    //スッテプ3、要請を求める
    xhr.send();

}

function change_img(_color) {
    let ipad_img = document.getElementById('ipad_img');
    ipad_img.setAttribute('src', _color + '.png');
}

function color_div() {
    // let color = ["gray", "pink", "Purple", "blue", "starlight"];
    let color = [];
    ipad_json[0].color.forEach((value, index) => {
        color.push(value);
    });

    //刪除重複的東西
    color = [...new Set(color)];
    // console.log(color);
    color.forEach((value, index) => {

        let d = document.createElement('div');
        let i = document.createElement('img');
        let p = document.createElement('p');
        i.setAttribute("src", color[index] + '.jpg');
        p.innerText = color[index];
        d.classList.add("col-5", "border", "text-center", "m-2", "my_rounded");
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

//取得 符合儲存空間&網路的價格
function get_price(_storage, _network) {
    let price = ipad_json[0].other.filter(x => x.storage == _storage && x.network == _network)[0].price;
    // 回傳值
    return price;
}
// 抓金額
function change_price(_storage, _network) {
    let price = get_price(_storage, _network);
    // console.log(price);
    let show_price = document.getElementById("show_price");
    show_price.innerText = 'NT$ ' + price;
}

function storage_div() {
    // 一開始要抓出陣列的值並存進去
    ipad_json[0].other.forEach((value, index) => {
        // 用push新增進去陣列
        storage.push(value.storage);
    });
    //刪除重複的東西
    storage = [...new Set(storage)];
    //抓id
    let _storage_div = document.getElementById('storage');
    // 迭代出每一項
    storage.forEach(value => {
        let d = document.createElement('div');
        let p = document.createElement('p');
        //  我想知道金額，所以我把這邊的值丟過去算，再存回去
        let _price = get_price(value, "Wi-Fi");
        // console.log(value)
        // 增加d的class
        d.classList.add('border', 'col-5', 'm-2', 'text-center', "my_rounded");
        //顯示出GB && 金額
        p.innerHTML = `${value}<br/>NT$ ${_price}`;
        // d新增p
        d.append(p);
        _storage_div.append(d);
        //點到d產生的反應，通常放在最後面比較好:)
        d.addEventListener("click", function () {
            change_price(value, "Wi-Fi");
            // 把值存起來
            storage_gb = value;
            // 抓會變動價格的ID
            let WiFi_price = document.getElementById("Wi-Fi_price");
            // 把點擊後獲得的金額判斷完後存入_price
            let _price = get_price(value, "Wi-Fi");
            // 把抓到的ID，放入想要顯示的資料
            WiFi_price.innerHTML = `Wi-Fi</br>NT$ ${_price}`;
            // 把抓到的ID，放入想要顯示的資料
            let Cellular_price = document.getElementById("Cellular_price");
            //把欲想買的4G?wifi?點擊後，判斷值是否為"Cellular"?然後抓到金額
            _price = get_price(value, "Cellular");
            // console.log(value)
            // 放入金額
            Cellular_price.innerHTML = `Cellular</br>NT$ ${_price}`;
        });
    });
}

function network_div() {
    // 抓陣列
    ipad_json[0].other.forEach(value => {
        0
        networks.push(value.network);
    });
    //刪除重複的東西
    networks = [...new Set(networks)];
    // console.log(networks);
    //抓network的id
    let network_div = document.getElementById('network');

    networks.forEach(network => {
        // 建div
        let d = document.createElement('div');
        // 建p
        let p = document.createElement('p');
        let _price = get_price(storage_gb, network);
        // 加ID上去
        p.setAttribute('id', network + '_price')
        // 顯示網路 && 金額
        p.innerHTML = `${network}<br/>NT$ ${_price}`;
        // 加class
        d.classList.add('border', 'col-5', 'm-2', 'text-center', "my_rounded");
        // d 裡放p
        d.append(p);
        // 父層加d
        network_div.append(d);
        // d的事件聆聽，點擊改價錢
        d.addEventListener("click", function () {
            change_price(storage_gb, network);
        });
    });
    
            // 'HA HA HA'
            document.createTextNode('HA HA HA');
            //
            
            console.log(network_div.cloneNode());
            console.log(network_div.cloneNode(true));
}