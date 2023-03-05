const interal = "We are doing some exercises.";
const index = (string, i = 1) => {
  if (i > 1 && i < interal.length) {
    slice = interal.slice(i, i + 1);
    return (result = interal.replace(slice, string));
  } else if (i < 0 || i > interal.length) {
    return (result = interal + " " + string);
  } else {
    return (result = string + " " + interal);
  }
};
console.log(index("my name is",10));
