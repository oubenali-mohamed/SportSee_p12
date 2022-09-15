import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../../utils/styles/styles.css'

const StyleNavigation = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #000000;
  height: 80px;
`
const StyleMenu = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
`
const StyleLogo = styled.img`
  margin-top: 10px;
  margin-left: 20px;
  height: 55px;
`
const StyleLien = styled(Link)`
  font-size: 24px;
  margin-top: 20px;
  color: #ffffff;
  text-decoration: none;
  font-family: 'roboto';
`
function Navigation() {
  return (
    <StyleNavigation>
      <Link to="/">
        <StyleLogo id="logo" src={logo} alt="logo SportSee" />
      </Link>

      <StyleMenu>
        <StyleLien to="/">Accueil</StyleLien>
        <StyleLien to="/">Profil</StyleLien>
        <StyleLien to="/">Réglage</StyleLien>
        <StyleLien to="/">Communauté</StyleLien>
      </StyleMenu>
    </StyleNavigation>
  )
}
export default Navigation
