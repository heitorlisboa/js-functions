function formatNumber(number, decimalDigits, asString = true) {
  const regex = /[.]/;
  number = number.toString();
  const decimalPoint = number.search(regex);
  let foundDecimalDigits;

  if (decimalPoint !== -1) {
    foundDecimalDigits = number.length - (decimalPoint + 1);
  } else {
    number = number + ".";
    foundDecimalDigits = 0;
  }

  if (foundDecimalDigits < decimalDigits) {
    const zerosToAdd = decimalDigits - foundDecimalDigits;
    number = number + "0".repeat(zerosToAdd);
  } else if (foundDecimalDigits > decimalDigits && decimalDigits > 0) {
    const zerosToRemove = foundDecimalDigits - decimalDigits;
    number = number.slice(0, number.length - zerosToRemove);
  }

  if (!asString) return parseFloat(number);
  return number;
}

const formattedNumber = formatNumber(3, 10);
console.log(formattedNumber);
