function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText = num;
}

function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    document.getElementById("output-value").innerText =num;
}
function getFormattedNumber(num){
    var n= Number(num);
    n = n.toLocaleString('en');
    return n;
}

var operator = document.getElementsByClassName('operator');
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function(){
        if(operator[i].id=='clear'){
            printHistory('');
            printOutput('');
        }
        else if(operator[i].id=='backspace'){
            var current = getOutput();
            var newCurrent = current.slice(0, -1);
            printOutput(newCurrent);
        }
    });
}

var number = document.getElementsByClassName('number');
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function(){
        var previous = getOutput();
        var current = previous + this.id;
        printOutput(current);
    });
}