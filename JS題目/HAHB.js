let input = document.getElementById("guess_input");
let ans = "";

function init() {
    ans = ""
    for (let i = 0; i < 4; i++) {
        rand_n = Math.floor(Math.random() * 9);
        for (let j = 0; j < ans.length; j++) {
            while (ans[j] == rand_n) {
                rand_n = Math.floor(Math.random() * 9);
            }
        }
        ans += rand_n;
    }
    console.log(ans);
}

function guess() {
    let numbers = input.value;
    let A = 0;
    let B = 0;
    if (numbers.length != 4) {
        alert("請輸入四個數字");
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

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == ans[i]) {
            A++;
        }
        else {
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[i] == ans[j]) {
                    B++;
                }
            }
        }
    }
    console.log(`${A}A ${B}B`);
    input.value= "";


    let div_tag = document.createElement("div");
    if (A == 4) {
        div_tag.classList.add(succress);    
    }else{
        div_tag.classList.add(); 
    }
    
    div_tag.setAttribute

}