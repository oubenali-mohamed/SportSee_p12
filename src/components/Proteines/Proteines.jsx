import proteines from '../../assets/proteines.png'
import './Proteines.css'
import PropTypes from 'prop-types'

Proteines.propTypes = {
  proteineCount: PropTypes.number,
}
function Proteines({ proteineCount }) {
  return (
    <div className="containerProteines">
      <div>
        <img className="imgProteines" src={proteines} alt="proteines" />
      </div>
      <div className="numberProteines">
        {proteineCount}g<p>proteines</p>
      </div>
    </div>
  )
}
export default Proteines
