let balance = 100;
        
function updateBalance() {
    document.getElementById("balance").innerText = `Balance: $${balance}`;
}

function displayMessage(msg, color) {
    let messageBox = document.getElementById("message");
    messageBox.innerText = msg;
    messageBox.style.color = color;
}

function deposit() {
    let amount = parseFloat(document.getElementById("amount").value);
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        updateBalance();
        displayMessage("Deposit Successful!", "lightgreen");
    } else {
        displayMessage("Enter a valid amount.", "red");
    }
    document.getElementById("amount").value = "";
}

function withdraw() {
    let amount = parseFloat(document.getElementById("amount").value);
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
        displayMessage("Withdrawal Successful!", "lightgreen");
    } else {
        displayMessage("Invalid amount or insufficient funds.", "red");
    }
    document.getElementById("amount").value = "";
}

function checkBalance() {
    displayMessage(`Your current balance is $${balance}`, "yellow");
}