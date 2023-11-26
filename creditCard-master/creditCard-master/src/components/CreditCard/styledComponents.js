// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #344e7a;
  padding: 20px;

  @media screen and (min-width: 768px) {
    width: 50vw;
  }
`

export const CreditCardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 300px;
  width: 500px;
  border-radius: 15px;
  padding: 20px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  text-align: center;
  margin-bottom: 0;
`

export const HorizontalLine = styled.hr`
  color: #ffd773;
  margin-top: 0;
  width: 150px;
  height: 3px;
  background-color: #ffd773;
  border: 0;
`

export const NumberText = styled.p`
  color: #ffffff;
  font-size: 32px;
  margin: 0px;
  padding: 0;
`

export const NameDescription = styled.p`
  font-family: 'Roboto';
  color: #d3d9e0;
  margin-top: 25px;
  margin-bottom: 5px;
`

export const NameText = styled.p`
  color: #ffffff;
  font-size: 20px;
  margin: 0;
  padding: 0;
`

export const CCInputContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media screen and (min-width: 768px) {
    width: 50vw;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 5px #d3d9e0;
  height: 300px;
  width: 400px;
`

export const InputHeading = styled.h1`
  font-family: 'Roboto';
  color: #344e7a;
  text-align: center;
`

export const CustomInput = styled.input`
  margin: 5px;
  height: 40px;
  padding: 5px;
  border: 1px solid #475569;
  border-radius: 3px;
`
