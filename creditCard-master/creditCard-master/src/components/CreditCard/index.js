// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  MainContainer,
  CreditCardContainer,
  Heading,
  HorizontalLine,
  NumberText,
  NameDescription,
  NameText,
  CCInputContainer,
  InputContainer,
  InputHeading,
  CustomInput,
} from './styledComponents'

const CreditCard = () => {
  const [CCNumber, setCCNumber] = useState('')
  const [name, setName] = useState('')

  const onCCNumberChange = event => setCCNumber(event.target.value)
  const onCCNameChange = event => setName(event.target.value)

  return (
    <AppContainer>
      <MainContainer>
        <div>
          <Heading>CREDIT CARD</Heading>
          <HorizontalLine />
        </div>
        <CreditCardContainer data-testid="creditCard ">
          <NumberText>{CCNumber}</NumberText>
          <div>
            <NameDescription>CARDHOLDER NAME</NameDescription>
            <NameText>{name.toUpperCase()}</NameText>
          </div>
        </CreditCardContainer>
      </MainContainer>
      <CCInputContainer>
        <InputContainer>
          <InputHeading>Payment Method</InputHeading>
          <CustomInput
            type="text"
            placeholder="Card Number"
            onChange={onCCNumberChange}
          />
          <CustomInput
            type="text"
            placeholder="Cardholder Name"
            onChange={onCCNameChange}
          />
        </InputContainer>
      </CCInputContainer>
    </AppContainer>
  )
}

export default CreditCard
