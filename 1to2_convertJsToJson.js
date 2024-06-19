const fs = require("fs");

const inputFilePath = "./1_Input_Ts_to_Js/FILENAME.js";  // Put here the name of your file
const outputFilePath = "./1_Input_Ts_to_Js/FILENAME.json";  // Put here the name of your file

const { locale } = require(inputFilePath);
// Write the JSON file
fs.writeFileSync(outputFilePath, JSON.stringify(locale, null, 2), "utf8");

console.log(`File JSON save in ${outputFilePath}`);
