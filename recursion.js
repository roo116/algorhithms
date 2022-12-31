function multiplyLoop(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  console.log(product);
}

function multiplyRec(arr, n) {
  console.log("this is arr ", arr);
  console.log("this is n ", n);

  if (n <= 0) {
    console.log("if n <= 0");
    console.log("console.log(1)", 1);
    return 1;
  } else {
    console.log(`multiply(${arr},${n - 1}) * ${arr}[${n} - 1])`);
    const result = multiply(arr, n - 1) * arr[n - 1];
    console.log(`result = ${result}`);
  }
}

function sum(arr, n) {
  if (n <= 0) {
    console.log("This should be 0 ", n);
    return 0;
  } else {
    console.log("This should be greater than 0 ", n);
    console.log(`sum(${arr}) + ${arr}[${n} - 1]`)
    console.log(sum(arr, n - 1) + arr[n - 1]);
    return sum(arr, n - 1) + arr[n - 1];
  }
}

function rangeOfNumbers (startNum, endNum) {
   if (endNum < startNum) {
    return [];
   } else {
    const countArray = rangeOfNumbers(startNum, endNum - 1)
    countArray.push(endNum)
    return countArray
   }
}

// console.log(rangeOfNumbers(4, 4));

sum()

// multiplyLoop([1, 3, 5], 3);
