function arithOps( ops) {
    var resultElement = document.getElementById("result");
    const num1 = parseFloat(document.getElementById("fn").value);
    const num2 = parseFloat(document.getElementById("sn").value);
    var resultText = 0.0;

    switch(ops) {
        case "+":
            resultText = num1 + num2;
            break;
        case '-':
            resultText = num1 - num2;
            break;
        case '*':
            resultText = num1 * num2;
            break;
        case 'div':
            switch(num2) {
                case 0:
                    resultText = "Infinity";
                    break;
                default:
                    resultText = num1 / num2;
            }
            break;
        default:
            resultText = 0;
        
    }
    resultElement.textContent = resultText;
}