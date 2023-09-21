// Style your components here
import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *:focus {
        outline:none;
    }


`

export const FormContainer = styled.form`
  width: 50%;
`

export const Heading = styled.h1`
  color: #35469c;
  font-weight: 'bold';
  font-family: 'Open Sans';
`

export const Label = styled.label`

    font-family:'Open Sans',
    color: #7e858e;
    margin-top: 10px;
    margin-bottom: 8px;
`
export const Input = styled.input`
  background-color: transparent;
  padding: 10px;
  border: 2px solid #d7dfe9;
  color: #7e858e;
  font-family: 'Open Sans';
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`

export const SelectElement = styled.select`
  background-color: transparent;
  padding: 10px;
  border: 2px solid #d7dfe9;
  color: #1e293b;
  font-family: 'Open Sans';
  width: 100%;
  margin-bottom: 20px;
`

export const Para = styled.p`
    font-family:'Open Sans',
    color: black;
    margin-top: 10px;
    margin-bottom: 8px;

`

export const GenerateButton = styled.button`
  color: white;
  background-color: #0b69ff;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  border: none;
`

export const RightContainer = styled.div`
  width: 50%;

  margin-left: 30px;
  background-image: url(${props => `${props.imageUrl}`});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const TextPara = styled.p`
  color: white;
  font-family: 'Open sans';
  font-size: ${props => props.size}px;
`

export const MemeContainer = styled.div`
  height: 100vh;
  padding-left: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-right: 50px;
  
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center:
`
