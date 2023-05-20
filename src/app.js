const submitButton = document.getElementById("submit");

submitButton.onclick = () => {
    const calculation = document.getElementById("calculator").value;
    try {
        document.getElementById("calculatorHeader").innerText = eval(calculation)
    }
    catch (e) {
        document.getElementById("calculatorHeader").innerText = "Error";
    }
}