// how I worked it out real-time
function abbrevName(name) {
  let firstLtr = name[0].toUpperCase();
  for (let i = 1; i < name.length; i++) {
    if (name[i] === " ") {
      let secondLtr = name[i + 1].toUpperCase();
      return firstLtr + "." + secondLtr;
    }
  }
}

// easier way
function abbrevName(name) {
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
