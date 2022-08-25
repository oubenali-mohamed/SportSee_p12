import * as React from 'react'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Link to="/profil/:id"> Utilisateur 1</Link>
     <Link to="/profil/:id"> Utilisateur 2</Link>
    </div>
  );
}

export default App;
