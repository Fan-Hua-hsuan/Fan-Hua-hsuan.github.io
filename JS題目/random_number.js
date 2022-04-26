         window.addEventListener("keydown", function (event) {
            if (event.keyCode == 13) {
                cal();
            }
        });

        let result_info = document.getElementById("result_info");
        let result_range = document.getElementById("result_range");
        let input_number = document.getElementById("input");
        let ans_number = 0;
        let max_number = 100;
        let min_number = 0;

        // Game Start
        function init() {
            max_number = 100;
            min_number = 0;
            ans_number = Math.floor(Math.random() * 101);
            result_info.innerText = "Game Start!";
            result_range.innerText = `Range : ${min_number}～${max_number}`;
        }

        // Show answer
        function show_ans() {
            result_info.innerText = `Ans：${ans_number}`;
        }

        // Enter
        function number_enter(_number) {
            let text = input_number.value;
            text += _number;
            input_number.value = text;
        }

        // Clear
        function number_clear() {
            input_number.value = "";
        }

        function cal() {
            // Number 判斷是不是數字 不是的話會回傳 NaN
            // isNaN 判斷是不是NaN
            if (isNaN(Number(input_number.value))) {
                result_info.innerText = "pls Enter Number!"
                number_clear();
                return ;
            }
            let now_number = input_number.value - 0;
            if (ans_number == now_number) {
                result_info.innerText = `Congratulation！ans：${ans_number}`;
                result_range.innerText = `After 3 sec new game!`;
                setTimeout(() => {
                    init();
                }, 3000);
                return ;
            } else if (now_number > max_number || now_number < min_number) {
                result_info.innerText = "Out of range！"
            } else if (ans_number > now_number) {
                result_info.innerText = "Too small. bigger!"
                min_number = now_number;
            } else {
                result_info.innerText = "Too big. smaller!"
                max_number = now_number;
            }
            result_range.innerText = `Range : ${min_number}～${max_number}`;
            number_clear();
        }

        init();