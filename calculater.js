// BMI Calculator with category + guide highlight

const form = document.querySelector('form');
const results = document.querySelector('#results');

// Grab the guide lines (they must exist in index.html with these IDs)
const underEl = document.getElementById('lvl-under');
const normalEl = document.getElementById('lvl-normal');
const overEl = document.getElementById('lvl-over');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);

  // Reset previous state
  results.textContent = '';
  [underEl, normalEl, overEl].forEach(el => el.classList.remove('active'));

  // Validation
  if (!height || height <= 0 || isNaN(height)) {
    results.textContent = 'Please give a valid height';
    return;
  }
  if (!weight || weight <= 0 || isNaN(weight)) {
    results.textContent = 'Please give a valid weight';
    return;
  }

  // Calculate BMI
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  // Decide category
  let category = '';
  let activeEl = null;

  if (bmi < 18.6) {
    category = 'Underweight';
    activeEl = underEl;
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    category = 'Normal Range';
    activeEl = normalEl;
  } else {
    category = 'Overweight';
    activeEl = overEl;
  }

  // Highlight correct line in guide
  if (activeEl) activeEl.classList.add('active');

  // Show result with comparison rate
  results.textContent = `Your BMI is ${bmi} (${category})`;
});
