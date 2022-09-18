import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyleSpan = styled.span`
  position: absolute;
  left: 35%;
  font-weight: 700;
  font-size: 288px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`
const StyleTitre = styled.h1`
  position: absolute;
  left: 25%;
  top: 65%;
  font-weight: 500;
  font-size: 36px;
  display: flex;
`
const StyleLink = styled(NavLink)`
  position: absolute;
  left: 40.14%;
  right: 40.14%;
  top: 81.93%;
  bottom: 15.53%;
  font-size: 18px;
  display: flex;
  align-items: flex-end;
  text-decoration-line: underline;
  color: #e60001;
`
function Error() {
  return (
    <div>
      <StyleSpan id="error">404</StyleSpan>
      <StyleTitre id="msgError">
        Oups! La page que vous demandez n'existe pas
      </StyleTitre>
      <StyleLink to="/" id="lienHome">
        Retourner sur la page d’accueil
      </StyleLink>
    </div>
  )
}

export default Error
