import * as React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleLienUser = styled(Link)`
text-decoration: none;
color: #FFFFFF;
font-size: 20px;
`
const StyleButton = styled.button`
width: 150px;
height: 60px;
background-color: #4A5162;
border-radius: 30px;
border: none;
cursor: pointer;`

function App() {
  return (
    <div className="App">
      <StyleButton>
        <StyleLienUser to="/profil/:id"> Utilisateur 1</StyleLienUser>
      </StyleButton>
      <StyleButton>
        <StyleLienUser to="/profil/:id"> Utilisateur 2</StyleLienUser>
      </StyleButton>
    
    </div>
  );
}

export default App;
