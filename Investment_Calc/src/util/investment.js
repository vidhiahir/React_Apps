// This function expects a JS object as an argument
// The object should contain the following properties
// - initial: The initial investment amount
// - annual: The amount invested every year
// - returni: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initial,
  annual,
  returni,
  duration,
}) {
  const annualData = [];
  let investmentValue = initial;
  let totalInterest = 0;
  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (returni / 100);
    investmentValue += interestEarnedInYear + annual;
    totalInterest += interestEarnedInYear;
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annual: annual, // investment added in this year
      tInterest: totalInterest,
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
