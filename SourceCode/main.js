const {readFileDir} = require("./metricFunctions");

const data = readFileDir("../data.json");

console.log(data);