firstCurrency = document.querySelector("#firstCurrencySelect")
secondCurrency = document.querySelector("#secondCurrencySelect")
quantity = document.querySelector(".quantity")
exchangeBtn = document.querySelector(".exchange-btn")
result = document.querySelector(".result")

// console.log(firstDdown.value)

exchangeBtn.addEventListener("click", getCurrency)

async function getCurrency(){
    quantity.value = Number(quantity.value.trim())
    amount = quantity.value
    url = "https://api.freecurrencyapi.com/v1/latest?apikey=yHeBJj9mGsG47GaBFHv8HVC7k4XdoNK4zDRISkOH&base_currency="
    response = await fetch(`${url}${firstCurrency.value}`)
    data = await response.json()
    //console.log(data.data[secondCurrency.value]*amount)
    result.value = (data.data[secondCurrency.value]*amount).toFixed(2)
}
