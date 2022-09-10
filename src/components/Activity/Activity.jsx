import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from 'recharts'

import '../../utils/styles/styles.css'

function Activity({ activity }) {
  return (
    <BarChart
      width={1000}
      height={500}
      data={activity}
      margin={{
        top: 200,
        right: 30,
        left: 150,
        bottom: 5,
      }}
      barSize={15}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis />
      <YAxis yAxisId="right" orientation="right" stroke="#000000" />
      <YAxis hide={true} />
      <Tooltip />
      <Legend
        verticalAlign="middle"
        align="center"
        iconType={'circle'}
        iconSize={10}
      />
      <Bar dataKey="calories" fill="#E60001" />
      <Bar yAxisId="right" dataKey="kilogram" fill="#000000" />
    </BarChart>
  )
}
export default Activity
