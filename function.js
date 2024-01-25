function myFunction() {
    const op = prompt("Enter Operator", "+,-,*,/");


    const number1 = parseFloat(prompt("enter first number"));
    const number2 = parseFloat(prompt("enter second number"));


    switch (op) {
        case '+':
            result = number1 + number2;
            alert(`${number1} + ${number2} = ${result}`);
            break;

        case '-':
            result = number1 - number2;
            alert(`${number1} - ${number2} = ${result}`);
            break;

        case '*':
            result = number1 * number2;
            alert(`${number1} * ${number2} = ${result}`);
            break;

        case '/':
            result = number1 / number2;
            alert(`${number1} / ${number2} = ${result}`);
            break;

        default:
            alert('Invalid operator');
            break;
    }



}