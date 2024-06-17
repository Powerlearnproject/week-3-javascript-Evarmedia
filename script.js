// Declare variables of different data types
let name = "John Doe"; // string
let age = 30; // number
let isAdmin = true; // boolean

// Define functions for basic arithmetic operations
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    console.error("Cannot divide by zero!");
    return NaN;
  }
  return x / y;
}

// Call functions and log output
console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
console.log(multiply(4, 5)); // 20
console.log(divide(10, 2)); // 5

// DOM manipulation
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultPara = document.getElementById('result');

// Event listeners for buttons
document.getElementById('add-btn').addEventListener('click', () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const result = add(num1, num2);
  resultPara.textContent = `Result: ${result}`;
});

document.getElementById('subtract-btn').addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = subtract(num1, num2);
    resultPara.textContent = `Result: ${result}`;
});

document.getElementById('multiply-btn').addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = multiply(num1, num2);
    resultPara.textContent = `Result: ${result}`;
});

document.getElementById('divide-btn').addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const result = divide(num1, num2);
    resultPara.textContent = `Result: ${result}`;
});
  

// Chart.js integration
const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
    datasets: [{
      label: 'Results',
      data: [
        add(parseFloat(num1Input.value), parseFloat(num2Input.value)),
        subtract(parseFloat(num1Input.value), parseFloat(num2Input.value)),
        multiply(parseFloat(num1Input.value), parseFloat(num2Input.value)),
        divide(parseFloat(num1Input.value), parseFloat(num2Input.value))
      ],
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 1000, // Set the maximum y-axis value to 10
        min: 0, // Set the minimum y-axis value to 0
        tickInterval: 2, // Set the tick interval to 2
      },
      x: {
        grid: {
          display: false // Hide the x-axis grid lines
        }
      }
    },
    plugins: {
      legend: {
        display: false // Hide the legend
      }
    }
  }
});

num1Input.addEventListener('input', () => {
    chart.data.datasets[0].data = [
      add(parseFloat(num1Input.value), parseFloat(num2Input.value)),
      subtract(parseFloat(num1Input.value), parseFloat(num2Input.value)),
      multiply(parseFloat(num1Input.value), parseFloat(num2Input.value)),
      divide(parseFloat(num1Input.value), parseFloat(num2Input.value))
    ];
    chart.update();
  });
  
  num2Input.addEventListener('input', () => {
    chart.data.datasets[0].data = [
      add(parseFloat(num1Input.value), parseFloat(num2Input.value)),
      subtract(parseFloat(num1Input.value), parseFloat(num2Input.value)),
      multiply(parseFloat(num1Input.value), parseFloat(num2Input.value)),
      divide(parseFloat(num1Input.value), parseFloat(num2Input.value))
    ];
    chart.update();
  });