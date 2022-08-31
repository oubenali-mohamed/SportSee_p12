import { useParams } from 'react-router-dom'
import lipides from '../../assets/lipides.png'

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
    <div
      style={{
        position: 'absolute',
        marginLeft: '1100px',
        marginTop: '500px',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div>
        <img src={lipides} alt="lipides" width="80px" />
      </div>
      <div
        style={{ marginTop: '15px', fontWeight: 'bold', marginLeft: '30px' }}
      >
        {userLipides}
        <p>lipides</p>
      </div>
    </div>
  )
}
export default Lipides
