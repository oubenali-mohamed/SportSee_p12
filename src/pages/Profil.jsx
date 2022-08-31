import Sidebar from '../components/Sidebar/Sidebar'
import { useParams } from 'react-router-dom'
import Activity from '../components/Activity/Activity'
// import Performance from '../components/Performance/Performance'
import Session from '../components/Sessions/Sessions'
import Calories from '../components/Calories/Calories'
import Glucides from '../components/Glucides/Glucides'
import Proteines from '../components/Proteines/Proteines'
import Lipides from '../components/Lipides/Lipides'

let urlUser = 'http://localhost:3000/user/'
let userFirstName = ''

function Profil() {
  const { id } = useParams()
  fetch(urlUser + id)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      userFirstName = data.data.userInfos.firstName
      // console.log(userFirstName)
    })
  return (
    <div>
      <div
        style={{ position: 'absolute', marginLeft: '150px', marginTop: '50px' }}
      >
        <h1>Bonjour {userFirstName}</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div>
        <Calories />
        <Glucides />
        <Proteines />
        <Lipides />
        <Activity />
        <Session />
        {/* <Performance /> */}
        <Sidebar />
      </div>
    </div>
  )
}
export default Profil
