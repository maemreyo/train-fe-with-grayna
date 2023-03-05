const gmail = "robin_singh@example.com";
const mailSplit = gmail.split("@");

const randomL = Math.floor(Math.random() * mailSplit[0].length-3);

const mailSlice=mailSplit[0].slice(randomL,randomL+3);

const newHate = mailSplit[0].replace(mailSlice, "...");



console.log(result=newHate+ "@" +mailSplit[1]);


