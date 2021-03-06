window.addEventListener("keyup", function (event) {
    let keyCode = event.keyCode;
    // console.log(keyCode);
    input_number.focus();
    switch (keyCode) {
        //Enter
        case 13:
            equal();
            break;
        case 187:
            if (!event.shiftKey) {
                break;
            }
        case 107:
            operational_btn_click('+');
            break;
        case 109:
        case 189:
            operational_btn_click('-');
            break;
        case 56:
            if (!event.shiftKey) {
                break;
            }
        case 106:
            operational_btn_click('x');
            break;
        case 191:
        case 111:
            operational_btn_click('/');
            break;
        case 53:
            if (!event.shiftKey) {
                break;
            }
            operational_btn_click('%');
            break;
        case 110:
        case 190:
            number_enter('.');
            break;
        case 8:
            minus_a_number();
            break;
        default:
            break;
    }
});

let input_number = document.getElementById("input");
let show = document.getElementById("show");
let temp = 0;
let operation = "";
let point_state = false;
window.addEventListener("keyup", function (event) {
    let keyCode = event.keyCode;
    console.log(keyCode);
    input_number.focus();
    switch (keyCode) {
        //Enter
        case 13:
            equal();
            break;
        case 187:
            if (!event.shiftKey) {
                break;
            }
        case 107:
            operational_btn_click('+');
            break;
        case 109:
        case 189:
            operational_btn_click('-');
            break;
        case 56:
            if (!event.shiftKey) {
                break;
            }
        case 106:
            operational_btn_click('*');
            break;
        case 191:
        case 111:
            operational_btn_click('/');
            break;
        case 53:
            if (!event.shiftKey) {
                break;
            }
            operational_btn_click('%');
            break;
        case 110:
        case 190:
            number_enter('.');
            break;
        case 8:
            minus_a_number();
            break;
        default:
            break;
    }
});

// Enter
function number_enter(_number) {
    //?????????0?????????
    if (input_number.value.length == 0 && _number == 0) {
        return;
    }
    //???????????????. ?????????????????????????????????????????????toFixed(2)
    if (_number == '.') {
        point_state = true;
        // ?????????????????????. ?????????????????????. (???????????????)
        if (input_number.value.includes('.')) {
            _number = '';
        }
    }
    if (isNaN(input_number.value - 0)) {
        minus_a_number();
    }
    let text = input_number.value;
    text += _number;
    setTimeout(() => {
        input_number.value = text;
    }, 100);

}

function operational_btn_click(_operation) {
    // console.log(input_number.value);
    if (isNaN(input_number.value - 0)) {
        minus_a_number();
    }
    temp = input_number.value - 0;
    operation = _operation;
    show.innerText = temp + ' ' + operation;

    input_number.value = "";
}

function zero() {
    input_number.value = "";
    operation = "";
    temp = 0;
    show.innerText = "";
}

function minus_a_number() {
    let numbers = input_number.value;
    // length ???????????? 
    let len = numbers.length;

    // // method 1 (?????? 1)
    // // replace ?????? replace(??????????????????,???????????????)
    // let new_number = numbers.replace(numbers[len-1], '');  

    // // method 2 (?????? 2)
    // //????????? 
    let new_number = "";
    // ????????????(??????????????????)??????????????????
    for (let i = 0; i < len - 1; i++) {
        new_number += numbers[i];
    }
    // console.log(new_number);
    input_number.value = new_number;
}

function equal() {
    let ans = 0;
    temp = temp - 0;

    if (temp == 0) {
        return 0;
    }
    let number = input_number.value - 0;
    if (operation == '+') {
        ans = temp + number;
    } else if (operation == '-') {
        ans = temp - number;
    } else if (operation == 'x') {
        ans = temp * number;
    } else if (operation == '/') {
        ans = temp / number;
    } else if (operation == '%') {
        if (temp == 0 || number == 0) {
            alert("?????????0");
            return 0;
        }
        ans = temp % number;
    }
    if (point_state) {
        //??????????????????
        ans = ans.toFixed(2);
    }
    show.innerText = `${temp} ${operation} ${number}`
    input_number.value = ans;
}
