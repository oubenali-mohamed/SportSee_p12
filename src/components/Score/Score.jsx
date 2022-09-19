import { PieChart, Pie, Cell } from 'recharts'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StylePieChart = styled(PieChart)`
  background-color: #fcfcfc;
  margin-top: 30px;
  margin-left: 50px;
`
Score.propTypes = {
  score: PropTypes.number,
}
function Score({ score }) {
  const scoreData = [
    {
      name: 'completed',
      value: score,
    },
    {
      name: 'incomplete',
      value: 100 - score,
    },
  ]
  return (
    <StylePieChart width={200} height={235} id="pieChart">
      <Pie
        dataKey="value"
        data={scoreData}
        cx={100}
        cy={120}
        innerRadius={70}
        outerRadius={80}
        startAngle={90}
        endAngle={480}
      >
        {scoreData.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={index === 0 ? '#E60001' : '#FFFFFF'}
            cornerRadius="40%"
          />
        ))}
      </Pie>
      <text x="30" y="30" fontSize={16} fontWeight="bold">
        Score
      </text>
      <text x="85" y="130" fontSize={16} fontWeight="bold">
        {score}%
      </text>
      <text x="80" y="150" fontSize={14}>
        de votre
      </text>
      <text x="80" y="170" fontSize={14}>
        objectif
      </text>
    </StylePieChart>
  )
}

export default Score
