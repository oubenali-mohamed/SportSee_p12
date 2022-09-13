import styled from 'styled-components'
import '../../utils/styles/styles.css'
import yoga from '../../assets/yoga.png'
import swim from '../../assets/swim.png'
import bike from '../../assets/bike.png'
import weight from '../../assets/weight.png'

const StyleSidebar = styled.div`
  height: 120%;
  background-color: #000000;
  position: absolute;
  width: 80px;
  top: 0;
  margin-top: 85px;
`
function Sidebar() {
  return (
    <StyleSidebar>
      <div className="sidebar">
        <img className="lienLeft" src={yoga} alt="yoga" />
        <img className="lienLeft" src={swim} alt="swim" />
        <img className="lienLeft" src={bike} alt="bike" />
        <img className="lienLeft" src={weight} alt="weight" />
      </div>
    </StyleSidebar>
  )
}
export default Sidebar
