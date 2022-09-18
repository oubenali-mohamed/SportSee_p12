import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from 'recharts'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyleTooltipActivity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  height: 100px;
  background-color: #e60001;
  color: #ffffff;
  font-size: 12px;
`

Activity.propTypes = {
  activity: PropTypes.arrayOf(
    PropTypes.shape({
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ),
}

function Activity({ activity }) {
  /**
   * @param {boolean} active
   * @param {array} payload return array with value
   */
  function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <StyleTooltipActivity>
          <p>{`${payload[0].value} kg`}</p>
          <p>{`${payload[1].value} kCal`}</p>
        </StyleTooltipActivity>
      )
    }
    return null
  }
  return (
    <BarChart
      width={1000}
      height={500}
      data={activity}
      margin={{
        top: 200,
        right: 30,
        left: 150,
        bottom: 5,
      }}
      barSize={15}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis />
      <YAxis yAxisId="right" orientation="right" stroke="#000000" />
      <YAxis hide={true} />
      <Tooltip content={CustomTooltip} />
      <Legend
        verticalAlign="top"
        align="right"
        iconType={'circle'}
        iconSize={10}
      />
      <Bar yAxisId="right" dataKey="kilogram" fill="#000000" />
      <Bar dataKey="calories" fill="#E60001" />
      <text x="180" y="220" fontSize={16}>
        Activité quotidienne
      </text>
    </BarChart>
  )
}
export default Activity
