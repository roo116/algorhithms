function rot13(str) {
  const cipher = [
    [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
    [
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
    ],
  ];

  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (!str[i].match(/[A-Z]/i)) {
      console.log("first string character ", str[i]);
      result.push(str[i]);
    } else {
      let index = cipher[0].indexOf(str[i]);
      console.log(index);
      result.push(cipher[1][index]);
      console.log(result);
    }
  }
  str = result.join("");
  console.log(str);
  return str;
}

rot13("SERR PBQR PNZC");
