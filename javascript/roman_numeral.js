function romanNumeral(string) {
  let result = 0
  let lastString = ''
  const romanNumerals = [
    'I', 1,
    'V', 5,
    'X', 10,
    'L', 50,
    'C', 100,
    'D', 500,
    'M', 1000
  ];
  for (const rome of string) {
    const index = romanNumerals.indexOf(rome) + 1
    const value = romanNumerals[index]
    const lastIndex = romanNumerals.indexOf(lastString) + 1
    const lastValue = romanNumerals[lastIndex]
    if (value > lastValue) {
      result -= lastValue
      result += value - lastValue
    } else {
      result += value
    }
    lastString = rome
  }
  return result
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution

// function takes in string, and iterates over that string
// If the last string was an I, it takes away one, otherwise adds them all up
