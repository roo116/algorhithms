function convertToRoman(num) {
  // set some variables
  let numArr = [];
  let romArr = [];
  let numStr = num.toString();
  console.log("Initial test of num", num);

  // push the number into an array to deal with each digit
  for (let i = 0; i < numStr.length; i++) {
    numArr.push(numStr[i]);
  }

  // convert the smallest number first

  console.log("This is numArr", numArr);
  let count = numArr.length;
  console.log("this is count", count);
  let romNum = numArr[count - 1];
  console.log("this is romNum", romNum);
  if (romNum > 0 && romNum < 4) {
    console.log("romNum < 4");
    for (let i = 0; i < romNum; i++) {
      romArr.push("I");
      console.log("romArr if num < 4", romArr);
    }
  }

  if (romNum == 4) {
    romArr.push("IV");
    console.log("romArr if num = 4", romArr);
  }

  if (romNum == 5) {
    romArr.push("V");
    console.log("romArr if num = 5", romArr);
  }

  if (romNum > 5 && romNum < 9) {
    console.log("romNum > 5 && romNum < 9");
    romArr.push("V");
    console.log(romArr);
    let diff = romNum - 5;
    console.log("this is diff", diff);
    for (let i = 0; i < diff; i++) {
      romArr.push("I");
      console.log("from arr if num between 6 and 8", romArr);
    }
    console.log(romArr);
  }

  if (romNum == 9) {
    romArr.push("IX");
    console.log("romArr if num is 9", romArr);
  }

  if (numArr[count - 2]) {
    console.log("getting ready to write the second character", romArr);
    romNum = numArr[count - 2];
    console.log("this is count-2", romNum);
    if (romNum < 4) {
      console.log(romNum);
      for (let i = 0; i < romNum; i++) {
        romArr.unshift("X");
      }
    }
    if (romNum == 4) {
      romArr.unshift("XL");
    }
    if (romNum == 5) {
      romArr.unshift("L");
    }
    if (romNum > 5 && romNum < 9) {
      let diff = romNum - 5;
      for (let i = 0; i < diff; i++) {
        romArr.unshift("X");
      }
      romArr.unshift("L");
    }
    if (romNum == 9) {
      romArr.unshift("XC");
    }
  }

  if (numArr[count - 3]) {
    console.log("getting ready to write the third character", romArr);
    romNum = numArr[count - 3];
    console.log("this is count-3", romNum);
    if (romNum < 4) {
      for (let i = 0; i < romNum; i++) {
        romArr.unshift("C");
      }
    }
    if (romNum == 4) {
      romArr.unshift("CD");
    }
    if (romNum == 5) {
      romArr.unshift("D");
    }
    if (romNum > 5 && romNum < 9) {
      let diff = romNum - 5;

      for (let i = 0; i < diff; i++) {
        romArr.unshift("C");
      }
      romArr.unshift("D");
    }

    if (romNum == 9) {
      romArr.unshift("CM");
    }
  }

  if (numArr[count - 4]) {
    romNum = numArr[count - 4];
    if (romNum < 4) {
      for (let i = 0; i < romNum; i++) {
        romArr.unshift("M");
      }
    }
  }

  console.log(romArr);
  num = romArr.join("");
  console.log("final result", num);
  return num;
}

convertToRoman(12);
