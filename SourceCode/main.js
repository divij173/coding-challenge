const {readFileDir, metricsCalculations} = require("./metricFunctions");

try {
    const data = readFileDir("../data.json");
    const output = metricsCalculations(data);

    console.log(`Revenue: $${Math.round(output.revenue).toLocaleString()}`);
    console.log(`Expenses: $${Math.round(output.expenses).toLocaleString()}`);
    console.log(`Gross Profit Margin: ${(output.grossProfitMargin).toFixed(1)}%`);
    console.log(`Net Profit Margin: ${(output.netProfitMargin).toFixed(1)}%`);
    console.log(`Working Capital Ratio: ${(output.workingCapitalRatio).toFixed(1)}%`);
    
} catch (e) {
    console.error("Error occurred processing the given data: ", e.message);
}
