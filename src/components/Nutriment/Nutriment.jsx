import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyleContainer = styled.div`
  background-color: #fbfbfb;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 250px;
`
const StyledImg = styled.img`
  width: 60px;
  height: 60px;
  margin: 20px 0px;
`
const StyleNutriment = styled.p`
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: -15px;
  color: #282d30;
`
const StyleNutrimentUnity = styled.p`
  font-size: 18px;
  color: #74798c;
`
Nutriment.propTypes = {
  children: PropTypes.object,
  image: PropTypes.string,
  unityCount: PropTypes.string,
}
function Nutriment({ children, image, unityCount }) {
  return (
    <StyleContainer id="nutriment">
      <StyledImg src={image} alt="nutriment" />
      <div>
        <StyleNutriment>{children}</StyleNutriment>
        <StyleNutrimentUnity>{unityCount}</StyleNutrimentUnity>
      </div>
    </StyleContainer>
  )
}

export default Nutriment
