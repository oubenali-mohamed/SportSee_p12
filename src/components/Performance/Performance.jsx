import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyleRadar = styled(RadarChart)`
  background-color: #282d30;
  margin-top: 30px;
  margin-left: 30px;
`
Performance.propTypes = {
  performances: PropTypes.any,
}

function Performance({ performances }) {
  /**
   * @param {number} value
   * @returns {string} corresponding at performance of user
   */
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
    <StyleRadar
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
    </StyleRadar>
  )
}
export default Performance
