// Third assignment challenge:Net Salary Calculator
function calculateNetSalary(basicSalary, benefits) {
    // Below are the parameters for monthly PAYE rates as of 1 July 2023 
    const taxRates = [
        { min: 0, max: 24000, rate: 0.1 },
        { min: 24001, max: 32333, rate: 0.25 },
        { min: 32334, max: 500000, rate: 0.3 },
        { min: 500001, max: 800000, rate: 0.325 },
        { min: 800001, max: Infinity, rate: 0.35 }
    ];
    const nhifDeduction = 0; // Set NHIF deduction value
    const nssfDeduction = 0; // Set NSSF deduction value

    // Procedure for the calculation of gross salary
    const grossSalary = basicSalary + benefits;

    // Procedure for calculation of tax
    let tax = 0;
    let taxableIncome = grossSalary;
    for (const rate of taxRates) {
        if (taxableIncome <= 0) break;
        const taxableAmount = Math.min(taxableIncome, rate.max - rate.min);
        tax += taxableAmount * rate.rate;
        taxableIncome -= taxableAmount;
    }

    // procedure for calculation of net salary
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

    // Return an object containing salary details
    return {
        grossSalary: grossSalary,
        tax: tax,
        nhifDeduction: nhifDeduction,
        nssfDeduction: nssfDeduction,
        netSalary: netSalary
    };
}

// Export functions for testing or integration with other modules
module.exports = {
    calculateGrade,
    speedDetector,
    calculateNetSalary
};
