let input = document.getElementById("guess_input");
let mydiv = document.querySelector(".my_div");
let ans = "";

window.addEventListener("keyup", function (event) {
    let keyCode = event.keyCode;
    // console.log(keyCode);
    switch (keyCode) {
        //Enter
        case 13:
            guess();
            break;}
            });


function start() {
    document.getElementById("btn2").removeAttribute("disabled");
    document.getElementById("btn3").removeAttribute("disabled");
    document.getElementById("guess_input").removeAttribute("disabled");
    document.getElementById("btn_guess").removeAttribute("disabled");

    ans = "";
    let repeat_state = false;
    //四個數字
    for (let i = 0; i < 4; i++) {
        do {
            repeat_state = false;
            rand_n = Math.floor(Math.random() * 9);
            //檢查重複 重複就產生到不重複
            for (let j = 0; j < ans.length; j++) {
                if (ans[j] == rand_n) {
                    repeat_state = true;
                }
            }
        } while (repeat_state);
        ans += rand_n;


    }
    console.log(ans);

    document.getElementById("btn2").removeAttribute("disabled");
}

function reset() {
    //location.reload();
    alert(`答案是: ${ans}`);
    mydiv.innerHTML = "";
    start();
}

function guess() {
    let numbers = input.value;
    let A = 0;
    let B = 0;

    //防呆
    if (numbers.length != 4) {
        alert("請輸入四個數字");
        return 0;
    }
    for (let i = 0; i < numbers.length; i++) {
        _count = 0;
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] == numbers[j]) {
                _count++;
            }
        }
        if (_count >= 2) {
            alert("請輸入四個不重複的數字");
            return 0;
        }
    }

    // 判斷幾A幾B
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == ans[i]) {
            A++;
        } else {
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[i] == ans[j]) {
                    B++;
                }
            }
        }
    }


    // 結果顯示至網頁
    let div_tag = document.createElement("div");
    let span_tag = document.createElement("span");
    let p_tag = document.createElement("p");

    //幫標籤 新增class
    div_tag.classList.add("p-2", "bd-highlight", "border", "d-flex", "align-items-center");
    span_tag.classList.add("px-1", "rounded");
    p_tag.classList.add("m-0");

    if (A == 4) {
        span_tag.classList.add("win");
        alert("你贏了!");

        document.getElementById("btn2").setAttribute("disabled", "disabled");
        document.getElementById("btn3").setAttribute("disabled", "disabled");
        document.getElementById("guess_input").setAttribute("disabled", "disabled");
        document.getElementById("btn_guess").setAttribute("disabled", "disabled");


    } else {
        span_tag.classList.add("fail");
    }

    span_tag.textContent = `${A}A ${B}B`;
    p_tag.textContent = input.value;
    div_tag.prepend(span_tag);
    div_tag.prepend(p_tag);
    mydiv.prepend(div_tag);

    console.log(`${A}A ${B}B`);
    input.value = "";
}

function show_ans() {
    if (ans != 0) {
        alert(`答案是: ${ans} !`);
    } else {
        alert("你．還．沒．按．開．始．!");
    }

}
