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

  for (let i=0;i< obj.length;i++) {
 // Destructure symbol and value
    while (num >= obj[i][0]) {
      r += symbol;
      num -= obj[i][1];
    }
  }

  return r;
}

// Test
//console.log(convertToRoman(36)); // Output: XXXVI

// Do not edit below this line
module.exports = convertToRoman;
