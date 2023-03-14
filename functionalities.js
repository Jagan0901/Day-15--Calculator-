let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});


//Implementing keyboard functionalities

document.onkeyup = (e) =>{
    if(e.key == "0" || e.key == "Num0"){
        display.innerText = display.innerText + 0 
    } else if(e.key == "1" || e.key == "Num1"){
        display.innerText = display.innerText + 1
    } else if(e.key == "2" || e.key == "Num2"){
        display.innerText = display.innerText + 2
    } else if(e.key == "3" || e.key == "Num3"){
        display.innerText = display.innerText + 3
    } else if(e.key == "4" || e.key == "Num4"){
        display.innerText = display.innerText + 4
    } else if(e.key == "5" || e.key == "Num5"){
        display.innerText = display.innerText + 5
    } else if(e.key == "6" || e.key == "Num6"){
        display.innerText = display.innerText + 6
    } else if(e.key == "7" || e.key == "Num7"){
        display.innerText = display.innerText + 7
    } else if(e.key == "8" || e.key == "Num8"){
        display.innerText = display.innerText + 8
    } else if(e.key == "9" || e.key == "Num9"){
        display.innerText = display.innerText + 9
    }else{
        alert("Only numbers are allowed")
    }
}