/* ID,Name,Occupation,Age\n42,Bruce,Knight,
41\n57,Bob,Fry Cook,
19\n63,Blaine,Quiz Master
,58\n98,Bill,Doctor’s Assistant,26 
*/
// Part 2: Expanding Functionality
let num_columns;
const rows = csv.split("\n");

const csvArr = []
rows.forEach(row=>csvArr.push(row.split(",")))
// Part 3: Transforming Data
const header = csvArr.shift();
const csvObjArr = []
csvArr.forEach(rowArr=>{
    let rowObj = {};
    rowArr.forEach((cell, i)=>{
        rowObj[header[i].toLowerCase()] = cell;
    })
    csvObjArr.push(rowObj)
})
console.log(csvObjArr);
// Part 4: Sorting and Manipulating Data
let lastElement = csvObjArr.pop();
console.log(lastElement);
console.log(csvObjArr)