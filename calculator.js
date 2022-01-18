window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM. ------ DONE 
// Put some default values in the inputs -------- DONE
// Call a function to calculate the current monthly payment
function setupIntialValues() {
const amount = document.querySelector('#loan-amount'); 
const years = document.querySelector('#loan-years');
const rate = document.querySelector('#loan-rate'); 

amount.value = 1000;
years.value = 2;
rate.value = 3.5;

}

// Get the current values from the UI
// Update the monthly payment
function update() {
const monthlyPayment = calculateMonthlyPayment(getCurrentUIValues().amount, getCurrentUIValues().years, getCurrentUIValues().rate);
updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(amount, years, rate) {
  const monthlyRate = (rate / 100) / 12
  const months = years * 12; 
  const totalAmount = amount * monthlyRate; 

  //calculation
  const calculation = totalAmount / (1 - ((1 + monthlyRate) ** -months));
  //This creates a string of the number with 2 decilmal spaces. 
  return calculation.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.querySelector('#monthly-payment').innerHTML = monthly
}
