import { useParams } from 'react-router-dom'
import proteines from '../../assets/proteines.png'

let urlUser = 'http://localhost:3000/user/'
let userProteines = ''

function Proteines() {
  const { id } = useParams()
  fetch(urlUser + id)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      userProteines = data.data.keyData.proteinCount
    })
  return (
    <div
      style={{
        position: 'absolute',
        marginLeft: '1100px',
        marginTop: '300px',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div>
        <img src={proteines} alt="proteines" width="80px" />
      </div>
      <div
        style={{ marginTop: '15px', fontWeight: 'bold', marginLeft: '30px' }}
      >
        {userProteines}
        <p>proteines</p>
      </div>
    </div>
  )
}
export default Proteines
