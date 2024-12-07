Here's a comprehensive `README.md` file for your project: 

---

# RewardPay Accounting Metrics Challenge

This repository contains the solution to the RewardPay coding challenge. The challenge involves developing an application that calculates key accounting metrics from a given JSON data file and outputs them in a specific format.

## Project Overview

The application performs the following tasks:
1. Reads and parses an external data file (`data.json`).
2. Calculates the following accounting metrics:
   - **Revenue**
   - **Expenses**
   - **Gross Profit Margin**
   - **Net Profit Margin**
   - **Working Capital Ratio**
3. Outputs the calculated metrics in a user-friendly format.

This project demonstrates good development practices, including unit testing, proper formatting, and modular code structure.

---

## Features

- Reads and processes structured financial data from `data.json`.
- Accurately computes metrics using the specified formulas.
- Formats output according to the requirements:
  - Monetary values are prefixed with `$`, include commas for thousands, and omit decimal points.
  - Percentages are formatted with one decimal place and prefixed with `%`.
- Includes robust unit tests to validate functionality and handle edge cases.

---

## Getting Started

Follow these instructions to set up, run, and test the application.

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js** (v14.x or later)
- **npm** (Node Package Manager, comes with Node.js)

### Installation

1. Clone this repository:
   ```bash
   git clone <repo_url>
   cd rewardpay-challenge
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

To run the application and calculate metrics:

1. Ensure `data.json` is located in the root folder (or modify the path in `readFileDir` accordingly).
2. Execute the application:
   ```bash
   node SourceCode/main.js
   ```

### Example Output
```bash
Revenue: $32,431
Expenses: $36,530
Gross Profit Margin: 0.0%
Net Profit Margin: -12.6%
Working Capital Ratio: 118.8%
```

---

## Running Tests

This project includes unit tests for all major functionalities to ensure correctness and robustness.

To run the tests:
```bash
npx jest
```

The test suite includes cases for:
- Valid data inputs.
- Edge cases like zero revenue or liabilities.
- Handling of negative values in the data.

---

## Project Structure

```plaintext
rewardpay-challenge/
├── data.json                     # Input data file
├── SourceCode/
│   ├── main.js                   # Entry point for the application
│   ├── metricFunctions.js        # Functions to read data and calculate metrics
├── test/
│   ├── metricFunctions.test.js   # Unit tests for the metrics calculations
├── package.json                  # Project metadata and dependencies
├── README.md                     # Project documentation
```

---

## Dependencies

The following npm packages are required for this project:
- **`fs`**: Built-in Node.js module for file system operations.
- **`jest`**: Testing framework for JavaScript. (Installed via `npm`)

To install dependencies:
```bash
npm install
```

---

## Development Notes

1. **Error Handling**: 
   - If the data file is missing or contains invalid fields, the application will log an appropriate error message.
   - Ensure the input JSON adheres to the expected format.

2. **Formatting**:
   - Monetary values are formatted using `toLocaleString`.
   - Percentages are rounded to one decimal place and prefixed with `%`.

---