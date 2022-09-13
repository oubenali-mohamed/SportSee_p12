import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'
import PropTypes from 'prop-types'

Performance.propTypes = {
  performances: PropTypes.array,
}

function Performance({ performances }) {
  function kind(value) {
    if (value === 1) return 'Cardio'
    if (value === 2) return 'Energy'
    if (value === 3) return 'Endurance'
    if (value === 4) return 'Strength'
    if (value === 5) return 'Speed'
    if (value === 6) return 'Intensity'
    return value
  }

  return (
    <RadarChart
      outerRadius={90}
      width={300}
      height={235}
      data={performances}
      className="radarChart"
    >
      <PolarGrid />
      <PolarAngleAxis
        dataKey="kind"
        tickFormatter={kind}
        stroke="#FFFFFF"
        tickLine={false}
      />

      <Radar dataKey="value" fill="#E60001" fillOpacity={0.6} />
    </RadarChart>
  )
}
export default Performance
