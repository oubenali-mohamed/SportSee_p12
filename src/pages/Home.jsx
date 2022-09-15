import * as React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar/Sidebar'

const StyleLienUser = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  font-size: 20px;
`
const StyleButton = styled.button`
  width: 150px;
  height: 60px;
  background-color: #4a5162;
  border-radius: 30px;
  border: none;
  cursor: pointer;
`
const StyleApp = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  left: 20%;
  top: 30%;
`
function Home() {
  return (
    <div>
      <StyleApp>
        <StyleButton>
          <StyleLienUser to="/profil/12"> User 1</StyleLienUser>
        </StyleButton>
        <StyleButton>
          <StyleLienUser to="/profil/18"> User 2</StyleLienUser>
        </StyleButton>
      </StyleApp>
      <div>
        <Sidebar />
      </div>
    </div>
  )
}

export default Home
