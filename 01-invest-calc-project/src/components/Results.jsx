import { calculateInvestmentResults } from '../util/investment.js'

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

      </tbody>
    </table>
  )
};