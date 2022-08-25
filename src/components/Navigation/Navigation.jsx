import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import styled from "styled-components"
import "../../utils/styles/styles.css"

const StyleNavigation = styled.div `
display: flex;
flex-direction: row;
background-color: #000000;
height: 80px;
`

function Navigation() {

    return (
      <StyleNavigation>
          <Link to="/"> 
            <img className="logo" id='logo' src={logo} alt="logo SportSee" />
          </Link>
       
        <nav className="navigation">
          <Link className="lien" to="/">Accueil </Link>
          <Link className="lien" to="/profil/:id">Profil </Link>
          <Link className="lien" to="/reglage">Réglage </Link>
          <Link className="lien" to="/communaute">Communauté </Link>
        </nav>
      </StyleNavigation>
    )
  }
  export default Navigation