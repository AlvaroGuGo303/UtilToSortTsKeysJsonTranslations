const fs = require("fs");

const inputFilePath = "./2_JsonUnsorted/FILENAME.json"; // Path of the generated JSON unsorted
const outputFilePath = "./3_JsonSorted/FILENAME.json"; // Path to save the JSON sorted

// Function to sort an object alphabetically
const sortObject = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(sortObject);
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj)
      .sort()
      .reduce((result, key) => {
        result[key] = sortObject(obj[key]);
        return result;
      }, {});
  }
  return obj;
};

// Read the JSON file
fs.readFile(inputFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const json = JSON.parse(data);
  const sortedJson = sortObject(json);

  // Write the sorted JSON file
  fs.writeFile(outputFilePath, JSON.stringify(sortedJson, null, 2), (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("JSON file sorted and saved successfully.");
  });
});
