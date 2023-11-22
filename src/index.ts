import "./styles.css";

// TypeScript Playground
// write, share and learn TypeScript.
const anExampleVariable = "Hello World";
const palindromeText = "race_car!";
const sentence = "The quick brown fox jumped over zakarivony";
const sentence2 = "I'm a little teapot";

function reverseString(str: string): string {
  // const strArray = str.split("");
  // const reversedStrArray = strArray.reverse();
  // const reversedString = reversedStrArray.join("");
  // return reversedString;
  // return str.split("").reverse().join("");
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function isPalindrome(str: string): boolean {
  const reg = /[\W_]/g;
  const smallStr = str.toLowerCase().replace(reg, "");
  // console.log('smallStr:: ', smallStr);
  const reverseStr = reverseString(smallStr);
  return reverseStr === smallStr;
}

function factorialize(num: number): BigInt {
  let result = BigInt(1);
  for (let i = num; i > 0; i--) {
    result *= BigInt(i);
  }
  return result;
}

function findLongestWord(str: string): number {
  const words: string[] = str.split(" ");
  let longestWords: string = "";
  for (let word of words) {
    if (word.length > longestWords.length) {
      longestWords = word;
    }
  }
  // console.log(str.split(" ").sort((a, b) => a > b ? -1 : 1)[0].length);
  return longestWords.length;
}

function titleCase(str: string): string {
  const words: string[] = str.toLowerCase().split(" ");
  // console.log(words);
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    // console.log(words[i]);
  }
  return words.join(" ");
}

function titleCase2(str: string): string {
  let titled = str
    .toLowerCase()
    .split(" ")
    .map((word: string) => {
      return word[0].toUpperCase + word.slice(1);
    });
  return titled.join(" ");
}

console.log(
  `reverseString('${anExampleVariable}')\n` + reverseString(anExampleVariable),
);
console.log(``);
console.log(
  `isPalindrome('${palindromeText}')\n` + isPalindrome(palindromeText),
);
console.log(``);
console.log(`factorialize('${25})\n` + factorialize(25));
console.log(``);
console.log(`findLongestWord('${sentence})\n` + findLongestWord(sentence));
console.log(``);
console.log(`titleCase2('${sentence2})\n` + titleCase2(sentence2));
