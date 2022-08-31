import { useParams } from 'react-router-dom'
import glucides from '../../assets/glucides.png'

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
    <div
      style={{
        position: 'absolute',
        marginLeft: '1100px',
        marginTop: '400px',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div>
        <img src={glucides} alt="glucides" width="80px" />
      </div>
      <div
        style={{ marginTop: '15px', fontWeight: 'bold', marginLeft: '30px' }}
      >
        {userGlucides}
        <p>glucides</p>
      </div>
    </div>
  )
}
export default Glucides
