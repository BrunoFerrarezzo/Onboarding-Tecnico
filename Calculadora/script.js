
function operation(op){
    let display=document.getElementById("display");
    switch(op){
        case "C":
            display.value = "";
            break;
        case "=":
            display.value = eval(display.value);
            break;
        case "-":
            display.value += "-";
            break;
        case "+":
            display.value += "+";
            break;
        case "X":
            display.value += "*";
            break;
        case "/":
            display.value += "/";
            break;            
    }
}

function number(num){
    document.getElementById("display").value+=num;
}