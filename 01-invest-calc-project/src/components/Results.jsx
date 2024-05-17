import { calculateInvestmentResults, formatter } from '../util/investment.js'

export default function Results({ input }) {

  const resultsData = calculateInvestmentResults(input);

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
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.annualInvestment)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{(yearData.year)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
};