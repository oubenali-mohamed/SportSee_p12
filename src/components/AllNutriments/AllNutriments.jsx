import React from 'react'
import calories from '../../assets/calories.png'
import glucides from '../../assets/glucides.png'
import lipides from '../../assets/lipides.png'
import proteines from '../../assets/proteines.png'
import Nutriment from '../Nutriment/Nutriment'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -300px;
  margin-left: 40px;
`
AllNutriments.propTypes = {
  keyData: PropTypes.shape({
    calorieCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number,
    proteinCount: PropTypes.number,
  }),
}
function AllNutriments({ keyData }) {
  return (
    <StyleContainer id="nutriments">
      <Nutriment unity="calories" image={calories}>
        {<span>{(keyData.calorieCount / 1000).toFixed(3)} kCal</span>}
      </Nutriment>
      <Nutriment unity="proteines" image={proteines}>
        {<span>{keyData.proteinCount} g</span>}
      </Nutriment>
      <Nutriment unity="glucides" image={glucides}>
        {<span>{keyData.carbohydrateCount} g</span>}
      </Nutriment>
      <Nutriment unity="lipides" image={lipides}>
        {<span>{keyData.lipidCount} g</span>}
      </Nutriment>
    </StyleContainer>
  )
}
export default AllNutriments
