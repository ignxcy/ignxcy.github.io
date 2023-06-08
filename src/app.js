const submitButton = document.getElementById("submit");
let count = 0

document.getElementById("clicker").onclick = () => {
    count++
    document.getElementById("clicker").innerText = count
}

submitButton.onclick = () => {
    const calculation = document.getElementById("calculator").value;
    try {
        document.getElementById("calculatorHeader").innerText = eval(calculation)
    }
    catch (e) {
        document.getElementById("calculatorHeader").innerText = "Error";
    }
}