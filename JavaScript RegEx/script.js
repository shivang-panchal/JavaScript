// let reg = /shivang/;
// reg = /shivang/g; //g means global
// reg = /shivang/i; // i means case insensitve
// console.log(reg);
// console.log(reg.source);

// let s = "shivaang is a good boy shivang loves play cricket";

// let result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);
// console.log(result.input);
//  console.log(result.index);

// result = s.match(reg);
// console.log(result)
// result = s.search(reg);
// console.log(result);

// let result = reg.exec(s);
// console.log("The Result From exec is ", result);

//  metacharcter sysmbols

// let regex = /^hel/; // ^means expression will match match if string starts with
// regex = /ng$/; // $ atthe end of the string means string ends with
// regex = /s.hiv/; //matches any one character
// regex = /s*hiv/; //matches any zero or more character
// regex = /s?hi?v/; //optional
// regex = /s\*hi?v/; //original star
// let str = "hello i am saaddfhivang";
// let result = regex.exec();

// if (regex.test(str)) {
//   console.log(`The String ${str} Matches The Expression ${regex.source}`);
// } else {
//   console.log(
//     `The String ${str} Does Not Match The Expression ${regex.source}`
//   );
// }

// const regex = /s/i;

// Charcter Sets we uses []
// const regex = /s[ahru]iv/; //can be an a, h, r or y
// let regex = /s[a-z]iv/; // can be any character from a to z
//  regex = /s[^aty]iv/; // here ^ is used for not, means not of a t y
// const str = "shivang bhai";

// let result = regex.exec(str);
// console.log("The Result From exec is ", result);

// if (regex.test(str)) {
//   console.log(`The String ${str} Matches The Expression ${regex.source}`);
// } else {
//   console.log(
//     `The String ${str} Does Not Match The Expression ${regex.source}`
//   );
// }

// Quantifiers we use {}
// let regex = /shi{2}v/; // i can occur exactly 2 times
// regex = /shi{0,2}v/; // i can occur 0,1 or 2 times

// const str = "shiivang bhai";

// let result = regex.exec(str);
// console.log("The Result From exec is ", result);

// if (regex.test(str)) {
//   console.log(`The String ${str} Matches The Expression ${regex.source}`);
// } else {
//   console.log(
//     `The String ${str} Does Not Match The Expression ${regex.source}`
//   );
// }

//Grouping we use ()

// let regex = /(shi){2}([0-9]r){3}/; //shi occur 2 times

// const str = "shishi1r4r5rivang bhai";

// let result = regex.exec(str);
// console.log("The Result From exec is ", result);

// if (regex.test(str)) {
//   console.log(`The String ${str} Matches The Expression ${regex.source}`);
// } else {
//   console.log(
//     `The String ${str} Does Not Match The Expression ${regex.source}`
//   );
// }

// Character classes
// + means mor ethan one

// let regex = /\whi/; //word character _ or alphabet or numbers
// regex = /\w+hi/; // \w+ means one or more word character _ or alphabet or numbers
// regex = /\w bhai/; //non word character
// regex = /\d999/; //d means digit
// regex = /\D999/; //D means non digit
// regex = /\ska number/; //s means white space
// regex = /\Ska number/; //S means not white space
// regex = /ka\b number/; //b means word boundary

// Assertions
// regx = /s(?=h)/;
// regx = /s(?!h)/;

// const str = "shishi1r4r5rivang bhai ka number 99999999";

// let result = regex.exec(str);
// console.log("The Result From exec is ", result);

// if (regex.test(str)) {
//   console.log(`The String ${str} Matches The Expression ${regex.source}`);
// } else {
//   console.log(
//     `The String ${str} Does Not Match The Expression ${regex.source}`
//   );
// }
