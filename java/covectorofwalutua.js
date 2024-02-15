const apiKey = '0c66d7db8f2564f9b48a9e1d'; 

async function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}?apikey=${apiKey}`);
        const data = await response.json();
        const exchangeRate = data.rates[toCurrency];

        if (exchangeRate) {
            const result = amount * exchangeRate;
            document.getElementById("result").innerText = `Result: ${result.toFixed(2)} ${toCurrency}`;
        } else {
            console.error("Invalid currency or API key");
        }
    } catch (error) {
        console.error("Error fetching exchange rates:", error);
    }
}
