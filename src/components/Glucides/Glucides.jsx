import glucides from '../../assets/glucides.png'
import './Glucides.css'

function Glucides({ glucideCount }) {
  return (
    <div className="containerGlucides">
      <div>
        <img className="imgGlucides" src={glucides} alt="glucides" />
      </div>
      <div className="numberGlucides">
        {glucideCount}g<p>glucides</p>
      </div>
    </div>
  )
}
export default Glucides
