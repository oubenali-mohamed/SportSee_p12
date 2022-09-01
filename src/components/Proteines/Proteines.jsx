import { useParams } from 'react-router-dom'
import proteines from '../../assets/proteines.png'
import './Proteines.css'
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
    <div className="containerProteines">
      <div>
        <img className="imgProteines" src={proteines} alt="proteines" />
      </div>
      <div className="numberProteines">
        {userProteines}g<p>proteines</p>
      </div>
    </div>
  )
}
export default Proteines
