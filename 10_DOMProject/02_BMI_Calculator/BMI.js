const form = document.querySelector("form");
//this usecase give empty value 
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === ''|| height <= 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  }
  if (weight === ''|| weight <= 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid height ${weight}`;
  }
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  let message = `Your BMI is <span>${bmi}</span><br>`;

  if (bmi < 18.5) {
    message += "Underweight";
  } 
  else if (bmi < 25) {
    message += "Normal weight";
  } 
  else {
    message += "Overweight";
  }

  results.innerHTML = message;
});