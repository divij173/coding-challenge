const {readFileDir, metricsCalculations} = require("./metricFunctions");

const data = readFileDir("../data.json");
const output = metricsCalculations(data);


console.log(output);