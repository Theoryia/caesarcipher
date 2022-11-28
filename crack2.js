const ps = require("prompt-sync");
const alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
const prompt = ps();
const string = prompt("Enter text: ");

let shifts = 2;
console.log(shifts);
const arrayphabet = alphabet.split("");

const arrayForm = string.split("");
console.log(arrayForm);
let output = [];
for (let e = 0; e < arrayphabet.length; e++) {
  console.log("shifts" + e);
  encrypt(e);
}

function encrypt(e) {
  console.log("decrypting...");

  for (let i of string) {
    if (i != " ") {
      for (j = 0; j < arrayphabet.length; j++) {
        //

        let r = j - e;

        if (i == arrayphabet[j]) {
          output.push(arrayphabet[r]);
        }
      }
    } else {
      output.push(" ");
    }
  }
  console.log("  ");
  console.log(`output: ${output.join("")}`);
  console.log(" ");
  output = [];
}
