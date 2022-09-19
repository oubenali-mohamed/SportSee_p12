import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyleTooltip = styled.div`
  background-color: #ffffff;
  color: #000000;
  width: 60px;
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
`
Session.propTypes = {
  performances: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionsLength: PropTypes.number,
    })
  ),
}

function Session({ sessions }) {
  /**
   * @param {number} value
   * @return {string} corresponding at first letter of day
   */
  function day(value) {
    if (value === 1) return 'L'
    if (value === 2) return 'M'
    if (value === 3) return 'M'
    if (value === 4) return 'J'
    if (value === 5) return 'V'
    if (value === 6) return 'S'
    if (value === 7) return 'D'
    return value
  }
  function Dot({ cx, cy }) {
    return (
      <svg>
        <circle cx={cx} cy={cy} r={4} stroke="#FFFFFF" fill="#FFFFFF" />
      </svg>
    )
  }
  function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <StyleTooltip>
          <span>{`${payload[0].value} min`}</span>
        </StyleTooltip>
      )
    }
    return null
  }
  return (
    <LineChart
      id="lineChart"
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
      <CartesianGrid
        strokeDasharray="3 3"
        fill="#E60001"
        stroke="none"
        id="linegrid"
      />
      <XAxis dataKey="day" tickFormatter={day} />
      <YAxis hide={true} />
      <Line
        type="natural"
        dataKey="sessionLength"
        stroke="#FFFFFF"
        dot={false}
        activeDot={<Dot />}
      />
      <Tooltip content={CustomTooltip} />
    </LineChart>
  )
}

export default Session
