const fs = require("fs");

function readFileDir(fileDir) {
    const fileData = fs.readFileSync(fileDir, "utf8");
    // return fileData;
    return JSON.parse(fileData); // Parsed as JS Object

}

/**
 * Calculates various financial metrics from the provided file data.
 * 
 * The metrics include:
 * - Revenue: Total revenue from the "revenue" account category.
 * - Expenses: Total expenses from the "expense" account category.
 * - Gross Profit Margin: Ratio of gross profit to revenue.
 * - Net Profit Margin: Ratio of (revenue - expenses) to revenue.
 * - Working Capital Ratio: Ratio of assets to liabilities.
 */

function metricsCalculations(fileData) {
    let revenue = 0;
    let expenses = 0;
    let grossProfit = 0;
    let assets = 0;
    let liabilities = 0;

    for (let i = 0; i < fileData.data.length; i++) {
        const rowData = fileData.data[i];
        
        // Revenue Calculation: Add value if account category is "revenue"
        if (rowData.account_category === "revenue") {
            revenue += rowData.total_value;
        }
        
        // Expenses Calculation: Add value if account category is "expense"
        if (rowData.account_category === "expense") {
            expenses += rowData.total_value;
        }

        // Gross Profit Calculation: Add value if account type is "sales" and value type is "debit"
        if (rowData.account_type === "sales" && rowData.value_type === "debit") {
            grossProfit += rowData.total_value;
        }

        // Working Capital Ratio Calculation
        // Assets Calculation: Sum values for specific account types and categories (current, bank, receivables)
        if (rowData.account_category === "assets" && (rowData.account_type === "current" || rowData.account_type === "bank" || rowData.account_type === "current_accounts_receivable")) {
            if (rowData.value_type ==="debit") {
                assets += rowData.total_value; 
            }
            else if (rowData.value_type ==="credit") {
                assets -= rowData.total_value; 
            }
        }

        // Liabilities Calculation: Sum values for specific account types and categories (current, payable)
        if (rowData.account_category === "liability" && (rowData.account_type === "current" || rowData.account_type === "current_accounts_payable")) {
            if (rowData.value_type ==="credit") {
                liabilities += rowData.total_value; 
            }
            else if (rowData.value_type ==="debit") {
                liabilities -= rowData.total_value; 
            }
        }
    }

    const grossProfitMargin = revenue !==0 ? ((grossProfit/revenue)*100) : 0;
    const netProfitMargin = revenue !==0 ? (((revenue - expenses)/ revenue)*100) : 0;
    const workingCapitalRatio = liabilities !==0 ? ((assets/liabilities)*100) : 0;

    return {revenue, expenses, grossProfitMargin, netProfitMargin, workingCapitalRatio};
};


module.exports = {readFileDir, metricsCalculations};