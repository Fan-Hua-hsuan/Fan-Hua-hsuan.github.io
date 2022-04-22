var result, input, msg,confirm_answer;
var big = 100;
var small = 0;

(function ready() {
    init(); // 因為遊戲結束的時候要重新初始化 所以把初始化拉成函式呼叫
}());
// 一開始的初始化
function init() {
    result = Math.floor(Math.random() * 101);
    console.log(result);
    if (result >= 1 || result <= 100) {
        msg = '亂數準備好了，遊戲開始!';
    } else {
        result = Math.floor(Math.random() * 101);
        msg = '亂數準備好了，遊戲開始!';
    }
    var big = 100;
    var small = 0;
    document.getElementById('msg').innerHTML = msg;
    document.getElementById('big').innerHTML = big;
    document.getElementById('small').innerHTML = small;

}

function Reset() {
    init();
};

function check() {
    //抓取數字 -0 轉成數字
    input = document.querySelector('[data-current-operand]').textContent - 0;

    if (input == "") {
        msg = "為什麼你什麼都沒有打？";
    } else if (input <= small || input >= big) {
        msg = '請輸入在數字範圍內!';
    } else if (result > input && input < big) {
        msg = '比 ' + input + ' 還大';
        small = input;
    } else if (result < input && input > small) {
        msg = '比 ' + input + ' 還小';
        big = input;
    } else if (result == input) {
        msg = '恭喜你猜對了! 答案是' + result + '。遊戲結束! ';
        setTimeout(() => {
            init();
        }, 2000);
    }

    // 顯示答案
function confirm_answer(){
    confirm_answer=document.getElementById('num');
    confirm_answer.innerText=input;
}
confirm_answer();


    console.log(big + '/' + small + '/' + input);
    document.getElementById('msg').innerText = msg;
    document.getElementById('big').innerText = big;
    document.getElementById('small').innerText = small;

    // 手動呼叫(觸發)清除按鈕的click事件
    document.querySelector('[data-all-clear]').click();
    calculator.clear();
}
class Calculator {
    constructor(previousOperandTextElement,
        currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay(item) {
        this.currentOperandTextElement.innerText =
            this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.getDisplayNumber}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})