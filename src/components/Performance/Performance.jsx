import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'

function Performance({ performances }) {
  return (
    <RadarChart outerRadius={90} width={400} height={300} data={performances}>
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />

      <Radar
        name="User"
        dataKey="value"
        stroke="#E60001"
        fill="#E60001"
        fillOpacity={0.6}
      />
    </RadarChart>
  )
}
export default Performance
