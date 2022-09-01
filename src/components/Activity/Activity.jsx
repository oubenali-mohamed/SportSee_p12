import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from 'recharts'
import { useParams } from 'react-router-dom'
let urlActivity = 'http://localhost:3000/user/'
let dataActivity = ''

function Activity() {
  const { id } = useParams()
  fetch(urlActivity + id + '/activity')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      dataActivity = data.data.sessions
    })
  return (
    <BarChart
      width={1000}
      height={500}
      data={dataActivity}
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
