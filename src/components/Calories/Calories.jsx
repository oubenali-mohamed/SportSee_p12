import { useParams } from 'react-router-dom'
import calories from '../../assets/calories.png'
import './Calories.css'

let urlUser = 'http://localhost:3000/user/'
let userCalories = ''

function Calories() {
  const { id } = useParams()
  fetch(urlUser + id)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      userCalories = data.data.keyData.calorieCount
    })
  return (
    <div className="containerCalories">
      <div>
        <img className="imgCalories" src={calories} alt="calories" />
      </div>
      <div className="numberCalories">
        {userCalories}kcal
        <p>calories</p>
      </div>
    </div>
  )
}
export default Calories
