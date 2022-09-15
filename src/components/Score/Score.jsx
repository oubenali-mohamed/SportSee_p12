import { PieChart, Pie } from 'recharts'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StylePieChart = styled(PieChart)`
  margin-left: 40px;
`
Score.propTypes = {
  score: PropTypes.number,
}
function Score({ score }) {
  const scoreData = [{ name: 'score', value: score }]
  return (
    <StylePieChart width={300} height={235}>
      <Pie
        dataKey="value"
        data={scoreData}
        cx={100}
        cy={150}
        innerRadius={70}
        outerRadius={80}
        startAngle={210}
        endAngle={90}
        fill="#E60001"
      />
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
