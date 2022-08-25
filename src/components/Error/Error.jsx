import { NavLink } from 'react-router-dom'

function Error() {
    return (
      <div>
        <span id='error'>404</span>
        <h1 id='msgError'>Oups! La page que vous demandez n'existe pas</h1>
        <NavLink to="/" id="lienHome">Retourner sur la page d’accueil</NavLink>
      </div>
      
       
    )
  }
  
  export default Error
  