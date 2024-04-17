document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {

    const num1 = parseFloat(document.getElementById("num1-in").value);
    const num2 = parseFloat(document.getElementById("num2-in").value);

    let total = num1 + num2;

    document.getElementById("output").innerHTML = total;
}