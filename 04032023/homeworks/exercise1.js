// const sampleResponse =
//   "Certainly, here's the software development flowchar't in ```Mermaid code:mermaid flowchart TD;";
// const word = sampleResponse.split(" ");

// const newWord = () => {
//   for (let i = 0; i < word.length; i++) {
//     if (word[i].includes("'")) {

//       console.log((quote = word[i].indexOf("'","`")));

//       console.log((word[i] =  word[i].substring(0,quote+1) + word[i][quote+1].toUpperCase()));
//       // console.log(newWord=word[i].splice(quote,0,"charKey"));
//     }
//   }
// };
// newWord();
// console.log(word.join(" "));

const gmail = "robin_singh@example.com";
const mailSplit = gmail.split("@")[0];
const nameTrust = mailSplit.split();

const randomKey = () => {
  randomL = Math.floor(Math.random() * mailSplit.length);
  console.log(randomL);

  if (mailSplit[0]) {
    console.log((mailSplit = nameTrust.splice(randomL, 3, "...")));
    nameTrust.join();
  }
};
randomKey();
console.log(mailSplit.join("@"));
