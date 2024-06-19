1- Install Typescript Globally.
Open a CMD and execute:
npm install -g typescript

2- Transpile TypeScript file to JavaScript.
Put your file inside the "1_Input_Ts_to_Js" folder.
Open a CMD and execute:
tsc <PutHereTheNameOfFile.ts>

example:
tsc translations.ts

3- Convert the Js to Json.
Open a CMD and execute (remenber change the path/name of your file):
node 1to2_convertJsToJson.js

4- To Sort the Keys of the Json:
Open a CMD and execute (remember change the path/name of your file):
node 2to3_sortJson.js

5- Convert the Json (sorted) to Ts.
Open a CMD and execute (remember change the path/name of your file):
node 3to4_convertJsonToTs.js

5- Eliminate the Double Quote
Then, open the generated file.ts and search the " and replace with nothing
Check for errors using ' in sentences with abbreviations inside, because that sentences will need the "