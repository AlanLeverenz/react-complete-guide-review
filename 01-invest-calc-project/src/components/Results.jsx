import { calculateInvestmentResults, formatter } from '../util/investment.js'

export default function Results({ input }) {

  const resultsData = calculateInvestmentResults(input);
  const initialinvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  console.log(resultsData);

  return (
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capitol</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map(yearData => {
          const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{(yearData.year)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
};