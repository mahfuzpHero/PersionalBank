// login butten event handler

var loginBtn = document.getElementById("enter-btn");
loginBtn.addEventListener("click", function(){
    var loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    var transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

//deposit button event hander

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
    const depositNumber = getInputNumber("depositAmount");

    updateSpanText("currentDeposit",depositNumber);
    updateSpanText("currentBalance",depositNumber);

    document.getElementById("depositAmount").value = "";
})
//withdraw button event handler

const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);
    document.getElementById("withdrawAmount").value = "";
})     
function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}