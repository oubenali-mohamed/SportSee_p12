import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import PropTypes from 'prop-types'

Session.propTypes = {
  sessions: PropTypes.array,
}
function Session({ sessions }) {
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
  function TooltipCustom({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <div className="contentTooltipSessions">
          <span>{`${payload[0].value} min`}</span>
        </div>
      )
    }
    return null
  }
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
      <XAxis dataKey="day" tickFormatter={day} />
      <YAxis hide={true} />
      <Line
        type="natural"
        dataKey="sessionLength"
        stroke="#FFFFFF"
        dot={false}
        activeDot={<Dot />}
      />
      <Tooltip content={TooltipCustom} />
    </LineChart>
  )
}

export default Session
