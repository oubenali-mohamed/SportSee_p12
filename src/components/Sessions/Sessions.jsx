import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

function Session({ sessions }) {
  return (
    <LineChart
      width={400}
      height={300}
      data={sessions}
      margin={{
        top: 30,
        right: 30,
        left: 100,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" fill="#E60001" stroke="none" />
      <XAxis dataKey="day" />
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
