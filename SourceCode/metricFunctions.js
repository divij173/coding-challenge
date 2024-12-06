const fs = require("fs");

function readFileDir(fileDir) {
    const fileData = fs.readFileSync(fileDir, "utf8");
    // return fileData;
    return JSON.parse(fileData); // Parsed as JS Object

}

function metricsCalculations(fileData) {
    let revenue = 0;
    let expense = 0;

    for (let i = 0; i < fileData.data.length; i++) {
        const rowData = fileData.data[i];
        
        if (rowData.account_category === "revenue") {
            revenue += rowData.total_value;
        }
        
        if (rowData.account_category === "expense") {
            expense += rowData.total_value;
        }
    } 

    return {"Revenue": revenue,
            "Expense": expense
    };
};

module.exports = {readFileDir, metricsCalculations};