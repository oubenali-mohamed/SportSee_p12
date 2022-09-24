import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
    transform: rotate(360deg);
    }
`

const Loader = styled.div`
  padding: 10px;
  border: 6px solid #ff0002;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 1s infinite linear;
  height: 100px;
  width: 100px;
  margin-top: 20%;
  margin-left: 45%;
`

export default Loader
