import { useParams } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
let urlSession = 'http://localhost:3000/user/'
let dataSessions = ''

function Session() {
  const { id } = useParams()
  fetch(urlSession + id + '/average-sessions')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      dataSessions = data.data.sessions
    })
  return (
    <LineChart
      width={500}
      height={300}
      data={dataSessions}
      margin={{
        top: 30,
        right: 30,
        left: 150,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" fill="#E60001" stroke="none" />
      <XAxis />
      <YAxis hide={true} />
      <Line
        type="natural"
        dataKey="sessionLength"
        stroke="#FFFFFF"
        dot={false}
      />
      <Tooltip />
    </LineChart>
  )
}

export default Session
