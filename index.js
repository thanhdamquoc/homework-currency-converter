let amount = document.getElementById("amount");
let fromCurrency = document.getElementById("from-currency");
let toCurrency = document.getElementById("to-currency");
let convertButton = document.getElementById("convert-button");
let outputP = document.getElementById("output-p");

convertButton.addEventListener("click",convertCurrency);

function convertCurrency() {
    let ratio;
    let usdToVnd = 23042.55;
    let amountVal = amount.value;
    let fromCurrencyVal = fromCurrency.value;
    let toCurrencyVal = toCurrency.value;

    if (fromCurrencyVal == "vnd") {
        if (toCurrencyVal == "vnd") {
            ratio = 1;
        } else if (toCurrencyVal == "usd") {
            ratio = 1/usdToVnd;
        }
    } else if (fromCurrencyVal == "usd") {
        if (toCurrencyVal == "usd") {
            ratio = 1;
        } else if (toCurrencyVal == "vnd") {
            ratio = usdToVnd;
        }
    }
    let convertedAmount = amountVal * ratio;
    outputP.innerHTML = "Result: " + convertedAmount + " " + toCurrency.value;
}