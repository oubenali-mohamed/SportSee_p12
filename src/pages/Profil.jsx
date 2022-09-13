import Sidebar from '../components/Sidebar/Sidebar'
import { useParams } from 'react-router-dom'
import Activity from '../components/Activity/Activity'
import Performance from '../components/Performance/Performance'
import Session from '../components/Sessions/Sessions'
import Calories from '../components/Calories/Calories'
import Glucides from '../components/Glucides/Glucides'
import Proteines from '../components/Proteines/Proteines'
import Lipides from '../components/Lipides/Lipides'
import Score from '../components/Score/Score'
import { useEffect } from 'react'
import Services from '../Services'

let userFirstName = ''
let calories = ''
let lipides = ''
let proteines = ''
let glucides = ''
let dataSessions = ''
let dataPerformance = ''
let dataActivity = ''
let score = ''

function Profil() {
  const { id } = useParams()

  useEffect(() => {
    Services.getUserData(id).then((data) => {
      console.log(data)
      userFirstName = data.data.userInfos.firstName
      calories = data.data.keyData.calorieCount
      lipides = data.data.keyData.lipidCount
      proteines = data.data.keyData.proteinCount
      glucides = data.data.keyData.carbohydrateCount
      score = data.data.score * 100
    })
    Services.getUserSession(id).then((data) => {
      dataSessions = data.data.sessions
    })
    Services.getUserPerformance(id).then((data) => {
      dataPerformance = data.data.data
    })
    Services.getUserActivity(id).then((data) => {
      dataActivity = data.data.sessions
    })
  }, [id])

  return (
    <div>
      <div
        style={{ position: 'absolute', marginLeft: '150px', marginTop: '50px' }}
      >
        <h1>Bonjour {userFirstName}</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div>
        <Sidebar />
        <Calories calorieCount={calories} />
        <Proteines proteineCount={proteines} />
        <Lipides lipideCount={lipides} />
        <Glucides glucideCount={glucides} />
        <Activity activity={dataActivity} />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Session sessions={dataSessions} />
          <Performance performances={dataPerformance} />
          <Score score={score} />
        </div>
      </div>
    </div>
  )
}
export default Profil
