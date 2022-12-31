function opposite(number) {
  //your code here
  // console.log("Is number positive or negative", Math.sign(number))
  // console.log("Absolute value of number", Math.abs(number))
  if (Math.sign(number) === -1) {
    // console.log(Math.abs(number))
    return Math.abs(number);
  } else {
    // number = "-" + number;
    number = Number("-" + number);
    // console.log(number)
    return number;
  }
}

// Easier way to do this
function opposite(number) {
  return -number;
}
