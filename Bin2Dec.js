function binToDec(binary) {
  if (binary.length > 8 || !/^[01]+$/.test(binary)) {
    return "Invalid input. Please enter up to 8 binary digits (0 or 1).";
  }

  return parseInt(binary, 2);
}

console.log(binToDec());
