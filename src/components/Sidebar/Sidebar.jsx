import styled from 'styled-components'
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
const StyleSideBar = styled.div`
  width: 60px;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const StyleImgSidebar = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 10px;
  margin-bottom: 10px;
`
function Sidebar() {
  return (
    <StyleSidebar>
      <StyleSideBar>
        <StyleImgSidebar src={yoga} alt="yoga" />
        <StyleImgSidebar src={swim} alt="swim" />
        <StyleImgSidebar src={bike} alt="bike" />
        <StyleImgSidebar src={weight} alt="weight" />
      </StyleSideBar>
    </StyleSidebar>
  )
}
export default Sidebar
