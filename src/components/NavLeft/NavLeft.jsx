
import { Link } from 'react-router-dom'
import styled from "styled-components"
import "../../utils/styles/styles.css"
import yoga from "../../assets/yoga.png"
import swim from "../../assets/swim.png"
import bike from "../../assets/bike.png"
import weight from "../../assets/weight.png"

const StyleNavLeft = styled.div `
height: 100%;
background-color: #000000;
position: absolute;
width: 80px;
`
function Navigation() {

    return (
      <StyleNavLeft>
         <nav className="navLeft">
          <Link className="lienLeft" to="/"><img src={yoga} alt="yoga" /> </Link>
          <Link className="lienLeft" to="/profil/:id"><img src={swim} alt="swim" />  </Link>
          <Link className="lienLeft" to="/reglage"><img src={bike} alt="bike" /></Link>
          <Link className="lienLeft" to="/communaute"><img src={weight} alt="weight" /></Link>
        </nav>
      </StyleNavLeft>
    )
  }
  export default Navigation

