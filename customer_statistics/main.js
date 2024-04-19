document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {

    const num1 = parseFloat(document.getElementById("num1-in").value);
    const num2 = parseFloat(document.getElementById("num2-in").value);
    const num3 = parseFloat(document.getElementById("num3-in").value);
    const num4 = parseFloat(document.getElementById("num4-in").value);

    const total = num1 + num2 + num3 + num4;
    const avg = total / 4

    document.getElementById("totalcust").innerHTML = total;
    document.getElementById("avgcust").innerHTML = avg;}