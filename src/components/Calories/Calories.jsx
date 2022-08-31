import { useParams } from 'react-router-dom'
import calories from '../../assets/calories.png'

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
    <div
      style={{
        position: 'absolute',
        marginLeft: '1100px',
        marginTop: '200px',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div>
        <img src={calories} alt="calories" width="80px" />
      </div>
      <div
        style={{ marginTop: '15px', fontWeight: 'bold', marginLeft: '30px' }}
      >
        {userCalories}
        <p>calories</p>
      </div>
    </div>
  )
}
export default Calories
