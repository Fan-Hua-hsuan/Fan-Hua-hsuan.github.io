let template_div; //樣板
let father_div;
let btn_add;  
//最剛開始就設定第一筆編號 1
localStorage.setItem("todo_count", 1);

window.onload = function () {
    template_div = document.querySelector('#template');
    father_div = document.querySelector('#father');
    btn_add = document.querySelector('#button_addon1');
    btn_add.addEventListener("click", () => {
        add();
    });
}

function edit(index) {
    // console.log(index);
    let div = document.querySelector("#template_div_" + index);
    let edit = div.querySelector("#edit");
    //剛開始為編輯 所以按了會開啟編輯模式
    if (edit.innerHTML == "編輯") {
        // 將checkbox 跟 input 解鎖
        div.querySelector("#checkbox").removeAttribute("disabled");
        div.querySelector("#todo_text").removeAttribute("readonly");
        //改變文字
        edit.innerHTML = "保存";
        //改變顏色
        edit.setAttribute('style','background-color: rgb(151, 231, 151);');
    } else {
        //抓取選取狀態
        let checkbox = div.querySelector("#checkbox").checked;
        // 輸入框的文字
        let input_text = div.querySelector("#todo_text").value;
        // console.log(checkbox);
        // checkbox 跟 input 鎖住
        div.querySelector("#checkbox").setAttribute("disabled", "disabled");
        div.querySelector("#todo_text").removeAttribute("readonly", "readonly");
        //改回原本的顏色
        edit.removeAttribute('style');
        //改回原本的文字
        edit.innerHTML = "編輯";
        //更新localStorage的值 key 重複就會直接覆蓋
        let key = "todo_" + index; 
        localStorage.setItem(key, JSON.stringify({
            'text': input_text,
            'checked': checkbox
        }));
    }
}

function del(index) {
    // console.log(index);
    //直接將小框框清空
    document.querySelector("#template_div_" + index).innerHTML = "";
    let key = "todo_" + index;
    //刪除 localStorage 的資料
    localStorage.removeItem(key);
}

function add() {
    //從localStorage 取得key="todo_count"的值  (現在的編號)
    let todo_count = localStorage.getItem("todo_count");

    let input_text = document.querySelector("#input").value;
    //複製一份 樣板 (true)裡面的標籤 也複製
    let clone_div = template_div.content.cloneNode(true);
    //設定id 跟input 的文字(value)
    //幫清單上編號
    clone_div.querySelector("#template_div").setAttribute("id", "template_div_" + todo_count);
    //設定清單裡的文字
    clone_div.querySelector("#todo_text").value = input_text;
    //新增 編輯 跟 刪除 按鈕事件
    clone_div.querySelector("#edit").addEventListener("click", () => {
        //因為下面++會影響 (親測得出)
        edit(todo_count-1);
    });
    clone_div.querySelector("#del").addEventListener("click", () => {
        del(todo_count-1);
    });
    //新增至父層
    father_div.append(clone_div);

    let key  = "todo_" + todo_count;
    console.log(key);
    //存入 localStorage  JSON.stringify轉成文字 
    localStorage.setItem(key, JSON.stringify({
        'text': input_text,
        'checked': false
    }));

    //編號++
    todo_count++;
    //將編號存回 localSt
    // orage 這要下一筆的時候就會是2 3 4 ..
    localStorage.setItem("todo_count", todo_count);
}