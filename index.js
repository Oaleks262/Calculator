let equalsPressed = 0;
        let input = document.getElementById("input");
        let equals = document.getElementById("equals");
        let deleteButton = document.getElementById("delete");
        let clean = document.getElementById("clean");
        let numberButtons = document.querySelectorAll(".number");
        let operatorButtons = document.querySelectorAll(".operator");
        let decimalButton = document.getElementById("decimal");

        window.onload = () => {
            input.value = "";
        };

        numberButtons.forEach((button) => {
            button.addEventListener("click", () => {
                if (equalsPressed == 1) {
                    input.value = "";
                    equalsPressed = 0;
                }
                input.value += button.value;
            });
        });

        operatorButtons.forEach((button) => {
            button.addEventListener("click", () => {
                if (equalsPressed == 1) {
                    equalsPressed = 0;
                }
                input.value += button.value;
            });
        });

        equals.addEventListener("click", () => {
            equalsPressed = 1;
            let inputValue = input.value;
            try {
                let solution = eval(inputValue);

                if (Number.isInteger(solution)) {
                    input.value = solution;
                } else {
                    input.value = solution.toFixed(2);
                }
            } catch (err) {
                alert("Invalid Input");
            }
        });

        deleteButton.addEventListener("click", () => {
            input.value = input.value.slice(0, -1);
        });

        clean.addEventListener("click", () => {
            input.value = "";
        });

        decimalButton.addEventListener("click", () => {
            if (!input.value.includes(".")) {
                input.value += ".";
            }
        });
