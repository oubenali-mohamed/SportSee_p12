import proteines from '../../assets/proteines.png'
import './Proteines.css'

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
