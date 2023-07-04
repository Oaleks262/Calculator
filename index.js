let equals_pressed = 0;

let button_input = document.querySelectorAll(".input-button");

let input = document.getElementById("input");
let equals = document.getElementById("equals");
let delet = document.getElementById("delet");
let clean = document.getElementById("clean");

window.onload = () => {
input.value = "";

};

button_input.forEach((button_class) =>{
    button_class.addEventListener("click", ()=> {
        if (equals_pressed == 1){
            input.value = "";
            equals_pressed = 0;
        }
        input.value += button_class.value;
    });
});

equals.addEventListener("click", () => {
    equals_pressed = 1;
    let inp_val = input.value;
    try{
        let solution = eval(inp_val);

        if(Number.isInteger(solution)){
            input.value = solution;
        }
        else{
            input.value = solution.toFixed(2);
        }
    } 
    catch(err){
        alert("Invalid Input");
    }
});
