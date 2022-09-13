import { PieChart, Pie } from 'recharts'
import PropTypes from 'prop-types'

Score.propTypes = {
  score: PropTypes.number,
}
function Score({ score }) {
  const scoreData = [{ name: 'score', value: score }]
  return (
    <PieChart width={300} height={235} className="pieChart">
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
      <text fontSize={14}>
        <tspan x="80" y="150">
          de votre
        </tspan>
        <tspan x="80" y="170">
          objectif
        </tspan>
      </text>
    </PieChart>
  )
}

export default Score
