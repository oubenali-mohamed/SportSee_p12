import lipides from '../../assets/lipides.png'
import './Lipides.css'
import PropTypes from 'prop-types'

Lipides.propTypes = {
  lipideCount: PropTypes.number,
}
function Lipides({ lipideCount }) {
  return (
    <div className="containerLipides">
      <div>
        <img className="imgLipides" src={lipides} alt="lipides" />
      </div>
      <div className="numberLipides">
        {lipideCount}g<p>lipides</p>
      </div>
    </div>
  )
}
export default Lipides
