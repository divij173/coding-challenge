const { readFileDir, metricsCalculations } = require("../SourceCode/metricFunctions");
const fs = require("fs");

describe("metricsCalculations", () => {
    test("should calculate all metrics correctly for valid data", () => {
        // Mock data
        const mockData = {
            data: [
                { account_category: "revenue", total_value: 2000 },
                { account_category: "expense", total_value: 1000 },
                { account_type: "sales", value_type: "debit", total_value: 1500 },
                { account_category: "assets", account_type: "current", value_type: "debit", total_value: 500 },
                { account_category: "assets", account_type: "current", value_type: "credit", total_value: 200 },
                { account_category: "liability", account_type: "current", value_type: "credit", total_value: 300 },
                { account_category: "liability", account_type: "current", value_type: "debit", total_value: 100 }
            ]
        };

        const result = metricsCalculations(mockData);

        expect(result.revenue).toBe(2000);
        expect(result.expenses).toBe(1000);
        expect(result.grossProfitMargin).toBeCloseTo(75.0, 1);
        expect(result.netProfitMargin).toBeCloseTo(50.0, 1);
        expect(result.workingCapitalRatio).toBeCloseTo(150.0, 1);
    });

    test("should handle zero revenue without errors", () => {
        // Mock data
        const mockData = {
            data: [
                { account_category: "expense", total_value: 500 },
                { account_type: "sales", value_type: "debit", total_value: 0 }
            ]
        };

        const result = metricsCalculations(mockData);

        expect(result.revenue).toBe(0);
        expect(result.expenses).toBe(500);
        expect(result.grossProfitMargin).toBe(0);
        expect(result.netProfitMargin).toBe(0);
        expect(result.workingCapitalRatio).toBe(0);
    });

    test("should handle zero liabilities without errors", () => {
        // Mock data
        const mockData = {
            data: [
                { account_category: "assets", account_type: "current", value_type: "debit", total_value: 1000 },
                { account_category: "assets", account_type: "current", value_type: "credit", total_value: 500 }
            ]
        };

        const result = metricsCalculations(mockData);

        expect(result.workingCapitalRatio).toBe(0);
    });

    test("should handle negative values correctly in the data", () => {
        // Mock data
        const mockData = {
            data: [
                { account_category: "revenue", total_value: 5000 },
                { account_category: "expense", total_value: -1500 }, // Negative expense
                { account_type: "sales", value_type: "debit", total_value: 4000 },
                { account_category: "assets", account_type: "current", value_type: "debit", total_value: 2000 },
                { account_category: "assets", account_type: "current", value_type: "credit", total_value: 500 },
                { account_category: "liability", account_type: "current", value_type: "credit", total_value: 1000 },
                { account_category: "liability", account_type: "current", value_type: "debit", total_value: 200 }
            ]
        };
    
        const result = metricsCalculations(mockData);
 
        expect(result.revenue).toBe(5000);
        expect(result.expenses).toBe(-1500);
        expect(result.grossProfitMargin).toBeCloseTo(80.0, 1);
        expect(result.netProfitMargin).toBeCloseTo(130.0, 1);
        expect(result.workingCapitalRatio).toBeCloseTo(187.5, 1);
    });
});


