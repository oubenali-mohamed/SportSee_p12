/* import { useParams } from 'react-router-dom'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'
let urlPerformance = 'http://localhost:3000/user/'
let dataPerformance = ''
let onePerf = ''
function Performance() {
  const { id } = useParams()
  fetch(urlPerformance + id + '/performance')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      dataPerformance = data.data.data
      for (let i = 0; i < dataPerformance.length; i++) {
        onePerf = dataPerformance[i]
        console.log(onePerf)
      }
    })
  return (
    <RadarChart
      cx="50%"
      cy="50%"
      outerRadius="100%"
      width={500}
      height={500}
      data={dataPerformance}
      margin={{
        top: 200,
        right: 30,
        left: 150,
        bottom: 5,
      }}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey={onePerf.kind} />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey={onePerf.kind}
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  )
}
export default Performance
 */
