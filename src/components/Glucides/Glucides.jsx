import { useParams } from 'react-router-dom'
import glucides from '../../assets/glucides.png'
import './Glucides.css'
let urlUser = 'http://localhost:3000/user/'
let userGlucides = ''

function Glucides() {
  const { id } = useParams()
  fetch(urlUser + id)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      userGlucides = data.data.keyData.carbohydrateCount
    })
  return (
    <div className="containerGlucides">
      <div>
        <img className="imgGlucides" src={glucides} alt="glucides" />
      </div>
      <div className="numberGlucides">
        {userGlucides}g<p>glucides</p>
      </div>
    </div>
  )
}
export default Glucides
