function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let r = '';

  for (let key in obj) {
    const [symbol, value] = obj[key]; // Destructure symbol and value
    while (num >= value) {
      r += symbol;
      num -= value;
    }
  }

  return r;
}

// Test
console.log(convertToRoman(36)); // Output: XXXVI

// Do not edit below this line
module.exports = convertToRoman;
