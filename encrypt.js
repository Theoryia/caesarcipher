const ps = require("prompt-sync");
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const prompt = ps();

const string = prompt("Enter text: ");

let shifts = 2;
console.log(shifts);
const arrayphabet = alphabet.split("");

const arrayForm = string.split("");
console.log(arrayForm);
let output = [];
encrypt();
function encrypt() {
  console.log("encrypting...");

  for (let i of string) {
    if (i != " ") {
      for (j = 0; j < arrayphabet.length; j++) {
        

        let r = j + shifts;

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
}


