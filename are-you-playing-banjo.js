function areYouPlayingBanjo(name) {
  // Implement me
  console.log(name[0])
  if (name[0] === "r" || name[0] === "R") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

areYouPlayingBanjo("Ringo");
