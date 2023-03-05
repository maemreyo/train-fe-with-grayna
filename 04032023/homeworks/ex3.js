const smile = ["Ha!"];
function smileInt(i) {
  for (let x = 0; x <i; x++) {
     smile.push("Ha!");
  }
}
console.log(smileInt(3));
console.log(smile.join(" "));

