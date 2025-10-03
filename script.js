function convertToRoman(num) {
  if (num === 0) return ""; // no Roman numeral for 0

  // Symbols for Roman numerals including subtractive notation
  const romanSymbols = [
    ["C̄", 100000], ["X̄C̄", 90000], ["L̄X̄", 50000], ["X̄L̄", 40000], ["X̄", 10000], ["ĪX̄", 9000],
    ["V̄", 5000], ["ĪV̄", 4000],
    ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
    ["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
    ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
  ];

  let result = "";

  for (const [symbol, value] of romanSymbols) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

// Examples:
console.log(convertToRoman(14));   // XIV
console.log(convertToRoman(798));  // DCCXCVIII
console.log(convertToRoman(0));    // "" (empty string)
console.log(convertToRoman(100000)); // C̄
