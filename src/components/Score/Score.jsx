import { PieChart, Pie } from 'recharts'

function Score({ score }) {
  const scoreData = [{ name: 'score', value: score }]
  return (
    <PieChart width={400} height={300}>
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
    </PieChart>
  )
}

export default Score
