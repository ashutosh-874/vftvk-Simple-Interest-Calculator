let interest_slider = document.getElementById('interest_rate_slider');
let slider_value = document.getElementById('interest_rate_value');
slider_value.innerHTML = interest_slider.value;

interest_slider.oninput = function() {
    slider_value.innerHTML = this.value;
}


function interestCalculator() {

    let amount = parseFloat(document.getElementById('amount').value)
    let interest_rate = parseFloat(document.getElementById('interest_rate_slider').value)
    let years = parseInt(document.getElementById('num_yr').value)

    let final_amount = (amount * interest_rate * years)/100

    document.getElementById('result_amount').innerHTML = amount
    document.getElementById('result_interest').innerHTML = interest_rate
    document.getElementById('result_amount_final').innerHTML = final_amount
    document.getElementById('result_year').innerHTML = parseInt((new Date().getFullYear())) + years

    document.getElementById('result').removeAttribute('hidden')
}

document.getElementById('interest_calculator').addEventListener('submit', (e)=> {
    e.preventDefault()
    interestCalculator()
})