import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from 'recharts'
import '../../utils/styles/styles.css'
import PropTypes from 'prop-types'

Activity.propTypes = {
  activity: PropTypes.array,
}

function Activity({ activity }) {
  function TooltipCustom({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <div className="contentTooltip">
          <p>{`${payload[0].value} kg`}</p>
          <p>{`${payload[1].value} kCal`}</p>
        </div>
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
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis />
      <YAxis yAxisId="right" orientation="right" stroke="#000000" />
      <YAxis hide={true} />
      <Tooltip content={TooltipCustom} />
      <Legend
        verticalAlign="top"
        align="right"
        iconType={'circle'}
        iconSize={10}
      />
      <Bar yAxisId="right" dataKey="kilogram" fill="#000000" />
      <Bar dataKey="calories" fill="#E60001" />
    </BarChart>
  )
}
export default Activity
