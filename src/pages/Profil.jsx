import Sidebar from '../components/Sidebar/Sidebar'
import { useParams } from 'react-router-dom'
import Activity from '../components/Activity/Activity'
import Performance from '../components/Performance/Performance'
import Session from '../components/Sessions/Sessions'
import AllNutriments from '../components/AllNutriments/AllNutriments'
import Score from '../components/Score/Score'
import { useEffect } from 'react'
import Services from '../Services'
import styled from 'styled-components'
import Loader from '../utils/Loader.jsx'

const StyleHeader = styled.div`
  position: absolute;
  margin-left: 150px;
  margin-top: 50px;
`
const StyledDashboard = styled.div`
  display: flex;
  flex-direction: row;
`
let userFirstName = ''
let dataSessions = ''
let dataPerformance = ''
let dataActivity = ''
let score = ''
let nutrimentsData = ''

function Profil() {
  const { id } = useParams()

  useEffect(() => {
    Services.getUserData(id).then((data) => {
      nutrimentsData = data.data.keyData
      userFirstName = data.data.userInfos.firstName
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
  if (
    !nutrimentsData &&
    !userFirstName &&
    !score &&
    !dataSessions &&
    !dataPerformance &&
    !dataActivity
  ) {
    return <Loader />
  }
  return (
    <div>
      <StyleHeader>
        <h1>
          Bonjour <span className="userName">{userFirstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </StyleHeader>
      <div id="radarSessionScore">
        <Sidebar />
        <Activity activity={dataActivity} />
        <StyledDashboard>
          <Session sessions={dataSessions} />
          <Performance performances={dataPerformance} />
          <Score score={score} />
          <AllNutriments keyData={nutrimentsData} />
        </StyledDashboard>
      </div>
    </div>
  )
}
export default Profil
