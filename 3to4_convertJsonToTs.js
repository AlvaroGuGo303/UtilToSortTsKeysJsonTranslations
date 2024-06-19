const fs = require("fs");

const inputFilePath = "./3_JsonSorted/FILENAME.json"; // Path to the JSON sorted
const outputFilePath = "./4_Output_Ts/FILENAME.ts"; // Path to save the TypeScript file

// Read JSON
const jsonData = fs.readFileSync(inputFilePath, "utf8");

// Convert JSON to JavaScript
const data = JSON.parse(jsonData);

// Function to process the object values ​​and apply the necessary modifications
const processObject = (obj) => {
  const newObj = {};
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      newObj[key] = processObject(obj[key]); // Recursive call to process nested objects
    } else if (typeof obj[key] === "string") {
      newObj[key] = `'${obj[key]}'`; // Add single quotes to text values
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

// Apply processing function to parent object
const processedData = processObject(data);

// Write the TypeScript file
const tsContent = `export const locale = ${JSON.stringify(
  processedData,
  null,
  2
)};\n`;

fs.writeFileSync(outputFilePath, tsContent, "utf8");

console.log(`TypeScript file save in ${outputFilePath}`);
