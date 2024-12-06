const fs = require("fs");

function readFileDir(fileDir) {
    const fileData = fs.readFileSync(fileDir, "utf8");
    // return fileData;
    return JSON.parse(fileData); // Parsed as JS Object

}

function metricsCalculations(fileData) {
    let revenue = 0;
    let expenses = 0;
    let grossProfit = 0;
    let grossProfitMargin = 0;

    for (let i = 0; i < fileData.data.length; i++) {
        const rowData = fileData.data[i];
        
        // Revenue Calculation
        if (rowData.account_category === "revenue") {
            revenue += rowData.total_value;
        }
        
        // Expenses Calculation
        if (rowData.account_category === "expense") {
            expenses += rowData.total_value;
        }

        // Gross Profit Margin Calculation
        if (rowData.account_type === "sales" && rowData.value_type === "debit") {
            grossProfit += rowData.total_value;
        }
    } 
    grossProfitMargin = revenue !==0 ? grossProfit/revenue : 0;

    return {"Revenue": revenue,
            "Expense": expenses,
            "GrossProfitMargin": grossProfitMargin,
    };
};

module.exports = {readFileDir, metricsCalculations};