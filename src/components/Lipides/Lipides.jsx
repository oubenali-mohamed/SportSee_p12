import { useParams } from 'react-router-dom'
import lipides from '../../assets/lipides.png'
import './Lipides.css'
let urlUser = 'http://localhost:3000/user/'
let userLipides = ''

function Lipides() {
  const { id } = useParams()
  fetch(urlUser + id)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      userLipides = data.data.keyData.lipidCount
    })
  return (
    <div className="containerLipides">
      <div>
        <img className="imgLipides" src={lipides} alt="lipides" />
      </div>
      <div className="numberLipides">
        {userLipides}g<p>lipides</p>
      </div>
    </div>
  )
}
export default Lipides
