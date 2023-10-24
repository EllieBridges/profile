const letters = ["A", "B", "C", "D", "E", "F"];

const divide = (num) => {
  return Math.floor(num / 16);
};

const remainder = (num) => {
  return num % 16;
};

const charCalc = (num, arr) => {
  if (num > 9) {
    const i = num - 10;
    return arr[i];
  }
  return num;
};

const rGBConversion = (rgb) => {
  let hex = [];

  rgb.map((colourValue) => {
    const divided = divide(colourValue);
    const firstChar = charCalc(divided, letters);
    hex.push(firstChar);
    const remaining = remainder(colourValue);
    const secondChar = charCalc(remaining, letters);
    hex.push(secondChar);
    return firstChar + secondChar;
  });
  return `#${hex.join("")}`;
};

export default rGBConversion;
