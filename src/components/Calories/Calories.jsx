import calories from '../../assets/calories.png'
import './Calories.css'

function Calories({ calorieCount }) {
  return (
    <div className="containerCalories">
      <div>
        <img className="imgCalories" src={calories} alt="calories" />
      </div>
      <div className="numberCalories">
        {(calorieCount / 1000).toFixed(3) + ' '} kCal
        <p>calories</p>
      </div>
    </div>
  )
}
export default Calories
