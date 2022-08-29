import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { useParams } from 'react-router-dom'
let urlUser = 'http://localhost:3000/user/'
let dataActivity = ''

function Activity() {
  const { id } = useParams()
  fetch(urlUser + id + '/activity')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      dataActivity = data.data.sessions
      console.log(dataActivity)
    })
  return (
    <BarChart
      width={1200}
      height={500}
      data={dataActivity}
      margin={{
        top: 200,
        right: 30,
        left: 150,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis />
      <YAxis />
      <Tooltip />
      <Bar dataKey="calories" fill="red" />
      <Bar dataKey="kilogram" fill="black" />
    </BarChart>
  )
}
export default Activity
