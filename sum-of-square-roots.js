// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
  let sum = 0;
  numbers.forEach((idx) => {
    console.log(idx)
    if(idx !== 0) {
    let sq = Math.pow(idx, 2);
    console.log(sq)
    sum += sq;}
    // console.log(sum)
  });
  console.log(sum);
}

// squareSum([0, 3, 4, 5]);

function squareSum(numbers) {
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
      console.log(`${numbers[i]} * ${numbers[i]}`);
      result += numbers[i] * numbers[i];
    }
    console.log(result);
    return result;
  }
  
//   squareSum([0, 3, 4, 5]);
  
