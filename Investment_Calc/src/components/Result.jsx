import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

const Result = ({ input }) => {
  const ans = calculateInvestmentResults(input);
  console.log(ans); // Check what is being passed
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest(Year)</td>
          <td>Total Interest</td>
          <td>Investment Capital</td>
        </tr>
      </thead>
      <tbody>
        {ans.map((product) => {
          const totalCapital = product.valueEndOfYear - product.tInterest;
          return (
            <tr key={product.year}>
              <td> {product.year}</td>
              <td>{formatter.format(product.valueEndOfYear)}</td>
              <td>{formatter.format(product.interest)}</td>
              <td>{formatter.format(product.tInterest)}</td>
              <td>{formatter.format(totalCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
