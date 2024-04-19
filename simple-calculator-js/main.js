// Alex Heitzenrater
// 19 APR 2024
// JS Simple Calculator

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {

    const num1 = parseFloat(document.getElementById("num1-in").value);
    const num2 = parseFloat(document.getElementById("num2-in").value);

    const total1 = num1 + num2;
    const total2 = num1 - num2;
    const total3 = num1 * num2;
    const total4 = num1 / num2;

    document.getElementById("output1").innerHTML =`${num1} + ${num2} = ${total1} `;
    document.getElementById("output2").innerHTML =`${num1} - ${num2} = ${total2} `;
    document.getElementById("output3").innerHTML =`${num1} * ${num2} = ${total3} `;
    document.getElementById("output4").innerHTML =`${num1} / ${num2} = ${total4} `;
}





    

    