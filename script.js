function convertToRoman(num) {
  if (num === 0) return ""; // No Roman numeral for 0

  const romanNumerals = [function convertToRoman(num) {
    // Create a mapping of Roman numerals to their values
    const romanNumerals = [
        ['M', 1000],
        ['D', 500],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1]
    ];

    let result = '';

    // Iterate over the romanNumerals array
    for (let i = 0; i < romanNumerals.length; i++) {
        // While the number is greater than the current value
        while (num >= romanNumerals[i][1]) {
            result += romanNumerals[i][0]; // Append the Roman numeral
            num -= romanNumerals[i][1];    // Subtract the value from num
        }
    }

    return result; // Return the final Roman numeral
}
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    const [symbol, value] = romanNumerals[i];
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
