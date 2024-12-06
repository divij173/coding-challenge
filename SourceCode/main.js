const {readFileDir, metricsCalculations} = require("./metricFunctions");

try {
    const data = readFileDir("../data.json");
    const output = metricsCalculations(data);

    console.log(output);
} catch (e) {
    console.error("Error occurred processing the given data: ", e.message);
}
